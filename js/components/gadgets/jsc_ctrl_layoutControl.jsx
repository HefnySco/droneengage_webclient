export class CLSS_CTRL_Layout extends React.Component {
    constructor() {
        super();
        this.state = {};
        window.AndruavLibs.LocalStorage.fn_getDisplayMode();

        fn_applyControl();
    }

    render() {
        const v_display_mode = window.AndruavLibs.LocalStorage.fn_getDisplayMode()%5+1;
        return (
            <div id="main_btn_group"  role="group" aria-label="Basic example">
                <button type="button" id="btn_showSettings" className="btn btn-success btn-sm ctrlbtn" onClick={(e) => fn_showSettings()}><strong>SETTINGS</strong></button>
                <button type="button" id="btn_showMap" className="btn btn-danger btn-sm ctrlbtn" onClick={(e) => fn_showMap()}><strong>MAP</strong></button>
                <button type="button" id="btn_showVideo" className="btn btn-warning btn-sm ctrlbtn" onClick={(e) => fn_showVideoMainTab()}><strong>CAMERA</strong></button>
                <button type="button" id="btn_showControl" className="btn btn-primary btn-sm ctrlbtn" onClick={(e) => fn_showControl()}><strong>{'DISPLAY-' + v_display_mode}</strong></button>
            </div>
        );
    }
}
