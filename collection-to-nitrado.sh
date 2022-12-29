#! /usr/bin/env bash 
set -euo pipefail
#function _trap_DEBUG() {
#  printf "L%d:\t%s\n" "$BASH_LINENO" "$BASH_COMMAND"
#}
#trap '_trap_DEBUG' DEBUG

INI_FILE="${1}"

APP_ID=108600
COLLECTION=2903054110

function GetToken() {
  local _token_file=$HOME/.steam/token
  if ! [ -e "$_token_file" ]; then
    >&2 echo "Token file ${_token_file}"
  fi
  local token
  token="$(cat $_token_file)"
  [ $? == 0 ] || return 1
  TOKEN=$token
}

function GetCollectionDetails() {
  local ret
  ret="$(curl -gsSL -X POST https://api.steampowered.com/ISteamRemoteStorage/GetCollectionDetails/v1/?  \
    -d "key=${TOKEN}" \
    -d "publishedfileids[0]=${COLLECTION}" \
    -d "collectioncount=1" | jq -er 'select(.response) | [.response.collectiondetails[0].children[]?.publishedfileid] | join(" ")')"
  [ $? == 0 ] || return 1
  echo "$ret"
}

function GetCollectionItem(){
  local fileId=$1
  local ret
  ret="$(curl -gsSL -X POST https://api.steampowered.com/ISteamRemoteStorage/GetPublishedFileDetails/v1/? \
    -d "key=${TOKEN}" \
    -d "itemcount=1" \
    -d  "publishedfileids[0]=${fileId}")"
  [ $? == 0 ] || return 1
  echo "$ret"
}


###########################################
#              MAIN
#########################################

GetToken

SHARED_FILE_IDS=''
SHARED_FILE_IDS="$( GetCollectionDetails )"

typeset -a mod_ids
typeset -a ws_ids
i=0
for ID in $SHARED_FILE_IDS; do
  file_details=""
  file_details="$(GetCollectionItem $ID)"
  [ $? == 0 ] || exit 2
  desc="$(echo "$file_details" | jq -er '.response.publishedfiledetails[0].description' )"
  wid="$(echo "$desc" | awk '
    /Workshop ID/ {
      sub("Workshop.?ID: +", "")
      gsub("\\[.*\\]", "")
      gsub("\\W", "")
      printf "%s", $0
      exit
    }')"
  ws_ids+="$wid"
  ws_ids+=" "
  mid="$(echo "$desc" | awk '
    /Mod.?ID/ {
      sub("Mod.?ID: +", "")
      gsub("\\[.*\\]", "")
      gsub("\\W", "")
      printf "%s", $0
      exit
    }')"
  mod_ids+="$mid"
  mod_ids+=" "
  (( ++i ))
done

mod_list="$(echo $mod_ids | sed 's|\s|,|g')"
ws_list="$(echo $ws_ids | sed 's|\s|;|g')"

if [ -n "$INI_FILE" ]; then
  echo  sed 's|^Mods=.*|Mods='"${mod_list}"'|'
  sed -i 's|^WorkshopItems=.*|WorkshopItem='"${ws_list}"'|'
else
  sed -i 's|^Mods=.*|Mods='"${mod_list}"'|' $INI_FILE
  sed -i 's|^WorkshopItems=.*|WorkshopItem='"${ws_list}"'|' $INI_FILE
fi

