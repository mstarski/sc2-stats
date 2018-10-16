const React = require('react');
const Background = require('../Background/Background');
const LoginBg = require('../../../assets/login-bg.jpg');
const BattlenetIcon = require('../../../assets/battlenet-icon.png');

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler() {
        alert('Working!');
    }

    render() {
        return (
            <React.Fragment>
                <Background src={LoginBg} ></Background>
                <div className="login-wrapper">
                    <h1 className="login-wrapper__header">Welcome to Starcraft II Statistics</h1>
                    <button onClick={this.submitHandler} className="login-wrapper__button"><img style={{ width: "50px" }} src={BattlenetIcon} alt="battle.net" /><span>Log in with battle.net</span></button>
                </div>
            </React.Fragment>
        )
    }
}


module.exports = Login;
