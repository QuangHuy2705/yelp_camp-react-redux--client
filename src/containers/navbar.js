import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {logOut } from "../store/actions/auth";

class Navbar extends Component {

	logOut = e => {
		e.preventDefault();
		this.props.logOut();
	}

	render() {
		return (
			<nav className="navbar navbar-default">
	            <div className="container-fluid">
	                <div className="navbar-header">
	                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
	                      <span className="sr-only">Toggle navigation</span>
	                      <span className="icon-bar"></span>
	                      <span className="icon-bar"></span>
	                      <span className="icon-bar"></span>
	                    </button>
	                    <Link className="navbar-brand" to="/landing">Yelpcamp</Link>
	                </div>
	               
	                <div id="navbar" className="collapse navbar-collapse">
	                    <ul className="nav navbar-nav">
	                        <li><Link to="/">Home</Link></li>
	                    </ul>
	                    
	                    
	                    	{this.props.currentUser.isAuthenticated ? (
	                    		<ul className="nav navbar-nav navbar-right">
		                        	<li><a href="#">Edit profile</a></li>
		                            <li><a >Signed in As {this.props.currentUser.user.username}</a></li>
		                            <li><a href="#" onClick={this.logOut}>Logout</a></li>
	                            </ul>)
	                        :
	                        	(<ul className="nav navbar-nav navbar-right">
		                    		<li><Link to="/signin">Log In</Link></li>
		                            <li><Link to="/signup">Sign Up</Link></li>
	                            </ul>
	                        	
	                    	)}
	                    
	                </div> 
	            </div>
	        </nav>
		)
	}
};

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser
	}
}

export default connect(mapStateToProps, {logOut})(Navbar);