import React, {Component} from "react";
import {connect} from "react-redux";
import {removeError, addERROR} from "../store/actions/errors";
import {postCampground} from "../store/actions/campgrounds";

export default function withAuth(ComponentToBeRender) {
	class Authenticate extends Component {
		componentWillMount() {
			if(this.props.isAuthenticated === false) {
				this.props.history.push("/signin");
				this.props.addERROR("You need to be logged in to do that!");

			}
		}

		componentWillUpdate(nextProps) {
			if(nextProps.isAuthenticated === false) {
				this.props.history.push("/signin");
			}
		};

		render() {
			return (
				<ComponentToBeRender {...this.props}/>
			)
		}
	};

	function mapStateToProps(state) {
		return {
			isAuthenticated: state.currentUser.isAuthenticated,
			errors: state.errors
		}
	}

	return connect(mapStateToProps, {postCampground, removeError, addERROR})(Authenticate)
}