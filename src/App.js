import React, {Component} from 'react';
import {ToastContainer} from 'react-toastify';
import {Redirect, Route, Switch} from 'react-router-dom';
import Movies from './components/movies';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/NotFound';
import NavBar from './components/navBar';
import MovieForm from './components/movieForm';
import Logout from './components/logout';
import ProtectedRoute from './components/common/protectedRoute';
import auth from './services/authService';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';


class App extends Component {
    state = {};
    componentDidMount() {
        const user = auth.getCurrentUser();
        this.setState({user});
    }
    render() {
        const {user} = this.state;
        return (
            <div>
                <ToastContainer/>
                <NavBar user={user}/>
                < main className="container">
                    <Switch>
                        
                        <ProtectedRoute path="/movies/:id" component={MovieForm}/>

                        <Route path="/login" component={LoginForm}/>
                        <Route path="/logout" component={Logout}/>
                        <Route path="/register" component={RegisterForm}/>
                        <Route path="/movies" render={props => <Movies {...props} user={this.state.user}/>}/>
                        <Route path="/customers" component={Customers}/>
                        <Route path="/rentals" component={Rentals}/>
                        <Route path="/not-found" component={NotFound}/>
                        <Redirect exact from="/" to="/movies"/>
                        <Redirect to="/not-found"/>
                    </Switch>
                </main>
            </div>

        );
    };
}

export default App;