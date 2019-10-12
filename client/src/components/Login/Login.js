import React, { Component } from 'react';
import '../../App.css';

export default class Login extends Component {
    
    handleSignIn(e) {
        e.preventDefault()
        let username = this.refs.username.value
        let password = this.refs.password.value
        this.props.onSignIn(username, password)
      }
      
      render() {
        return (
          <div>
          <div className='background'></div>
                <div className='panel-left'></div>
                <div className='panel-right'></div>
          <form onSubmit={this.handleSignIn.bind(this)}>
            <h3 class = 'page-title'>Sign in</h3>
            <input id='username' type="text" ref="username" placeholder="enter you username" />
            <input id='password' type="password" ref="password" placeholder="enter password" />
            <input id='login-btn' type="submit" value="Login" />
          </form>
          </div>
        )
      }
}