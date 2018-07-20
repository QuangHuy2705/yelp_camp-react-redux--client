import React, {Component} from "react";
import {Switch, Route, withRouter, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {authUser} from "../store/actions/auth";
import {removeError} from "../store/actions/errors";
import AuthForm from "../components/AuthForm";
import CampgroundList from "./CampgroundList";
import Jumbotron from "../components/Jumbotron";
import withAuth from "../hocs/withAuth";
import CampgroundForm from "./CampgroundForm";
import CampgroundDetail from "./CampgroundDetail";

const Main = (props) => {
	const {authUser, removeError, errors, currentUser} = props; 
	return (
		<div className="container">
				<Route exact path="/" render={props => {
					return (
						<div>
							<Jumbotron />
							<CampgroundList />	
						</div>
						
					)
				}} 

				/>
				<Route exact path="/signup" render={props => {
					return (
						<AuthForm 
								onAuth={authUser}
								errors={errors}
								buttonText="Sign Up"
								removeError={removeError}
								heading="Sign Up"
								signUp
								{...props}
							/>
					)
				}}/>

				<Route exact path="/signin" render={props => {
					return (
						<AuthForm 
							onAuth={authUser}
							errors={errors}
							buttonText="Log in"
							removeError={removeError}
							heading="Welcome Back"
							{...props}
						/>
					)
				}}/>

				<Route exact path="/campground/new" component={withAuth(CampgroundForm)}/>

				<Route exact path="/campgrounds/:campground_id" component={CampgroundDetail}/>

				
				
		</div>
	)
}



function mapStateToProps(state) {
	return {
		currentUser: state.currentUser,
		errors: state.errors
	}
}

export default withRouter(connect(mapStateToProps, { authUser, removeError} )(Main))