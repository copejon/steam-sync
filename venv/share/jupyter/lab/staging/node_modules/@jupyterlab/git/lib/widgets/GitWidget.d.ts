/// <reference types="react" />
import { ReactWidget } from '@jupyterlab/apputils';
import { FileBrowserModel } from '@jupyterlab/filebrowser';
import { ISettingRegistry } from '@jupyterlab/settingregistry';
import { TranslationBundle } from '@jupyterlab/translation';
import { CommandRegistry } from '@lumino/commands';
import { Message } from '@lumino/messaging';
import { Widget } from '@lumino/widgets';
import { GitExtension } from '../model';
/**
 * A class that exposes the git plugin Widget.
 */
export declare class GitWidget extends ReactWidget {
    constructor(model: GitExtension, settings: ISettingRegistry.ISettings, commands: CommandRegistry, fileBrowserModel: FileBrowserModel, trans: TranslationBundle, options?: Widget.IOptions);
    /**
     * A message handler invoked on a `'before-show'` message.
     *
     * #### Notes
     * The default implementation of this handler is a no-op.
     */
    onBeforeShow(msg: Message): void;
    /**
     * Render the content of this widget using the virtual DOM.
     *
     * This method will be called anytime the widget needs to be rendered, which
     * includes layout triggered rendering.
     */
    render(): JSX.Element;
    private _commands;
    private _fileBrowserModel;
    private _model;
    private _settings;
    private _trans;
}
