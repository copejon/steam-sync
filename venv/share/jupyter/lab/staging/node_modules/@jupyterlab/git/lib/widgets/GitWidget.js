import { ReactWidget, UseSignal } from '@jupyterlab/apputils';
import { StylesProvider } from '@material-ui/core/styles';
import * as React from 'react';
import { Feedback } from '../components/Feedback';
import { GitPanel } from '../components/GitPanel';
import { LoggerContext } from '../logger';
import { gitWidgetStyle } from '../style/GitWidgetStyle';
import { Level } from '../tokens';
/**
 * A class that exposes the git plugin Widget.
 */
export class GitWidget extends ReactWidget {
    constructor(model, settings, commands, fileBrowserModel, trans, options) {
        super(options);
        this.node.id = 'GitSession-root';
        this.addClass(gitWidgetStyle);
        this._trans = trans;
        this._commands = commands;
        this._fileBrowserModel = fileBrowserModel;
        this._model = model;
        this._settings = settings;
        // Add refresh standby condition if this widget is hidden
        model.refreshStandbyCondition = () => !this._settings.composite['refreshIfHidden'] && this.isHidden;
    }
    /**
     * A message handler invoked on a `'before-show'` message.
     *
     * #### Notes
     * The default implementation of this handler is a no-op.
     */
    onBeforeShow(msg) {
        // Trigger refresh when the widget is displayed
        this._model.refresh().catch(error => {
            console.error('Fail to refresh model when displaying GitWidget.', error);
        });
        super.onBeforeShow(msg);
    }
    /**
     * Render the content of this widget using the virtual DOM.
     *
     * This method will be called anytime the widget needs to be rendered, which
     * includes layout triggered rendering.
     */
    render() {
        return (React.createElement(StylesProvider, { injectFirst: true },
            React.createElement(LoggerContext.Consumer, null, logger => (React.createElement(React.Fragment, null,
                React.createElement(GitPanel, { commands: this._commands, filebrowser: this._fileBrowserModel, logger: logger, model: this._model, settings: this._settings, trans: this._trans }),
                React.createElement(UseSignal, { signal: logger.signal, initialArgs: { message: '', level: Level.INFO } }, (sender, log) => (log === null || log === void 0 ? void 0 : log.message) ? (React.createElement(Feedback, { log: log, settings: this._settings, trans: this._trans })) : null))))));
    }
}
//# sourceMappingURL=GitWidget.js.map