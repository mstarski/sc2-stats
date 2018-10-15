const React = require('react');
const LoginBg = require('../../../assets/bg.jpg');
const Background = require('../Background/Background');

const LoginForm = function (props) {
    return (
        <React.Fragment>
            <Background src={LoginBg}></Background>
            <form className="login-form">
                <h2 className="login-form__header">Welcome to Starcraft II Stats</h2>
                <label className="login-form__label" htmlFor="login">
                    Login
            </label>
                <input className="login-form__input" id="login" type="text" />
                <label className="login-form__label" htmlFor="password">
                    Password
            </label>
                <input className="login-form__input" id="password" type="password" />
                <button className="login-form__submit" type="submit">Log In</button>
            </form>
        </React.Fragment>
    )
}

module.exports = LoginForm;
