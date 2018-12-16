const React = require("react");
const { Pane, Dialog } = require("evergreen-ui");

function DialogComponent(props) {
    return (
        <Pane>
            <Dialog
                alignItems="center"
                isShown={props.isShown}
                title="Danger intent"
                intent="danger"
                onCloseComplete={props.onClose}
                confirmLabel="Delete Something"
            >
                Dialog content
            </Dialog>
        </Pane>
    );
}

module.exports = DialogComponent;
