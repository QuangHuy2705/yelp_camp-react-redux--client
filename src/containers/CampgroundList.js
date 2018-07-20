import React, {Component} from "react";
import {connect} from "react-redux";
import CampgroundListItem from "../components/CampgroundListItem";
import {fetchCampgrounds, removeCampground} from "../store/actions/campgrounds";
import {apiCall} from "../services/api";
import {addError} from "../store/actions/errors";
class CampgroundList extends Component {
	componentDidMount() {
		this.props.fetchCampgrounds();
	};

	render() {
		const {campgrounds, currentUser, removeCampground} = this.props;
		const campgroundList = campgrounds.map(campground => {
			return (
				<CampgroundListItem 
					author_id={campground.author}
					name={campground.name}
					imageUrl={campground.imageUrl}
					campgroundId={campground._id}
					key={campground._id}
					currentUser_id={currentUser.user.id}
					removeCampground={removeCampground.bind(this, campground._id)}
				/>
			)
				
		})
		return (
			<div className="row text-center" style={{display: "flex", flexWrap: "wrap"}}>
				{campgroundList}
			</div>
		)
	}
};

function mapStateToProps(state){
	return {
		campgrounds: state.campgrounds,
		currentUser: state.currentUser
	}
}

export default connect(mapStateToProps, {fetchCampgrounds, removeCampground})(CampgroundList);



