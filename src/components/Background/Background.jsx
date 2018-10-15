const React = require('react');

const Background = function (props) {
    const style = {
        opacity: "0.6",
        zIndex: -1,
        width: "100vw",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0
    }

    return <img style={style} src={props.src} alt="bg" />
}

module.exports = Background;
