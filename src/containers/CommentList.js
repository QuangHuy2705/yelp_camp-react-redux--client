import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import CommentListItem from "../components/CommentListItem";
import {addComment, removeComment} from "../store/actions/comments";
import {bindActionCreators} from "redux";

class CommentList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ""
		}
	}

	componentDidMount() {
		this.props.fetchComments(this.props.campground_id);		
	}


	handleChange = e => {
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value
		})
	};

	handleSubmit = e => {
		const {currentUser, campground_id, removeComment} = this.props;
		e.preventDefault();
		this.props.addComment(this.state.text, campground_id, currentUser);
		this.setState({text: ""});
	}

	render() {
		const {comments, campground_id, removeComment, currentUser} = this.props;
		const commentList = comments.map(comment => {
			return (

				<CommentListItem 
				key={comment._id}
				text={comment.text}
				comment={comment}
				{...this.props}
				campground_id={campground_id}
				removeComment={removeComment.bind(this, currentUser, campground_id, comment._id)}
				/>
			)
		})
		return (
			<div className="well">
				<div className="text-right">
					<a role="button" data-toggle="collapse" href="#collapseComment" aria-expanded="false" aria-controls="collapseComment" className="btn btn-success pull-right">
						<span className="glyphicon glyphicon-plus" aria-hidden="true"></span> Add new comment
					</a>
				</div>
				<h4><strong>Comments <span className="glyphicon glyphicon glyphicon-comment" aria-hidden="true"></span></strong></h4>
				<div className="collapse" id="collapseComment">
					<div className="well" style={{borderLeft: "5px solid #00C851"}}>
						{!this.props.currentUser.isAuthenticated ? (
							<h5>You need to login before you can comment. 
								<Link to="/signin">Click here</Link> to go to the login page.
							</h5>)
						: ( 
							<div>
								<h4>Write your comment <span className="glyphicon glyphicon glyphicon-pencil" aria-hidden="true"></span> </h4>
								<form onSubmit={this.handleSubmit} id="add-comment-form">
				                    <div className="form-group">
				                      <input className="form-control" type="text" disabled value={this.props.currentUser.user.username}/>
				                    </div>
				                    <div className="form-group">
				                      <textarea onChange={this.handleChange} className="form-control" name="text" placeholder="Write your comment..." value={this.state.text} form="add-comment-form" rows="5" cols="70"></textarea>
				                    </div>
				                    <div className="form-group">
				                      <button type="submit" className="btn btn-success btn-sm">Comment <span className="glyphicon glyphicon-comment" aria-hidden="true"></span></button>
				                    </div>
				                </form>
							</div>
							
						)}
					</div>
				</div>
				<hr/>
				{this.props.comments.length === 0 ? (
					<em style={{color: "grey"}}>
						No comments yet.
					</em>)
				: (
					<div>
						{commentList}	
					</div>
					
				)}
			</div>
		)
	}
};

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser,
	}
};

export default connect(mapStateToProps, {addComment, removeComment})(CommentList);