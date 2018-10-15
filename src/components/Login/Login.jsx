const React = require('react');


class Login extends React.Component {
    render() {
        return (
            <React.Fragment>
                <form className="login-form">
                    <h2 class="login-form__header">Welcome to Starcraft II Stats</h2>
                    <label className="login-form__label" htmlFor="login">
                        Login
                    </label>
                    <input className="login-form__input" id="login" type="text" />
                    <label className="login-form__label" htmlFor="password">
                        Password
                    </label>
                    <input className="login-form__input" id="password" type="password" />
                    <input value="Log in" className="login-form__submit" type="submit" />
                </form>
            </React.Fragment>
        )
    }
}


module.exports = Login;
