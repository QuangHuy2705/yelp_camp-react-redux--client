import React, {Component} from "react";
import {findCampground} from "../store/actions/campgrounds";
import {connect} from "react-redux";
import CommentList from "./CommentList";
import {fetchComments} from "../store/actions/comments";


class CampgroundDetail extends Component {
	componentDidMount() {
		this.props.findCampground(this.props.match.params.campground_id);
	}
	render() {

		const {detailedCampground} = this.props; 
		return (
			<div className="row">
				<div className="col-md-3">
					<p className="lead">
						YelpCamp
					</p>
					<div className="list-group">
						<li className="list-group-item active">Info 1</li>
						<li className="list-group-item">Info 2</li>
						<li className="list-group-item">Info 3</li>
					</div>
				</div>
				<div className="col-md-9">
					<div className="thumbnail">
						<img src={detailedCampground.imageUrl} alt="" className="img-responsive"/>
						<div className="caption-full">
							<h4>{detailedCampground.name}</h4>
							<p>{detailedCampground.description}</p>
						</div>
					</div>
					<CommentList fetchComments={this.props.fetchComments} campground_id={this.props.match.params.campground_id} comments={this.props.comments} {...this.props}/>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		detailedCampground: state.detailedCampground,
		comments: state.comments
	}
}

export default connect(mapStateToProps, {fetchComments, findCampground})(CampgroundDetail);