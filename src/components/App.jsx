const React = require('react');
const { Route, Switch, Redirect, withRouter } = require('react-router-dom');
const Login = require('./Login/Login');

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    <Redirect to="/login"></Redirect>
                </Switch>
            </React.Fragment>
        )
    }
}

module.exports = withRouter(App);
