const React = require('react');
const { Route, Switch, Redirect, withRouter } = require('react-router-dom');
const Login = require('./Login/Login');
const { ipcRenderer } = window.require('electron');

class App extends React.Component {

    constructor(props) {
        super(props);
        
    }

    render() {

        //Set localStorage when authentiaction is complete
        ipcRenderer.on('auth-complete', function (event, playerData) {
            Object.keys(playerData).forEach(key => {
                localStorage.setItem(key, playerData[key]);
            })
        })

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
