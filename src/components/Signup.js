import React from 'react';
import { Link } from 'react-router-dom';

export default class Signup extends React.Component{
    render(){
        return(
            <div>
                <form>
                    <input type="text" name="user[username]" placeholder="Username"/>
                    <input type="email" name="user[email]" placeholder="Email"/>
                    <input type="password" name="user[password]" placeholder="Password"/>
                    <input type="submit"/>
                </form>
                <p><Link to="/login">Log In</Link></p>
            </div>
        )
    }
}