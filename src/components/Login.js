import React from 'react';
import { Link } from 'react-router-dom';

export default class Login extends React.Component{
    render(){
        return (
            <div>
                <form>
                    <input type="text" name="user[username]" placeholder="Username"/>
                    <input type="password" name="user[password]" placeholder="Password"/>
                    <input type="submit"/>
                </form>
                <p><Link to="/signup">Signup</Link></p>
            </div>
        )
    }
}