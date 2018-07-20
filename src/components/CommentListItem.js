import React from "react";
import Moment from "react-moment";
import {remove} from "../store/actions/comments";



const CommentListItem = (props) => {
	const {removeComment, currentUser, comment, onCommentDelete, campground_id} = props;
	return (
		<div className="row" style={{margin: "10px 0 10px 0"}}>
			<div className="col-md-12">
				<strong>
					{(currentUser && currentUser.user.id === comment.author.id) ? (
						<span style={{color: "orange"}} className="glyphicon glyphicon-user" aria-hidden="true"></span>
						)
					: (
						<span className="glyphicon glyphicon-user" aria-hidden="true"></span>
					)
					}
					{comment.author.username}
				</strong>
				<span>
					<Moment className="pull-right text-muted" format="Do MMM YYY"> 
					{comment.date}
					</Moment>	
				</span>
				
				<p>{comment.text}</p>
				{(currentUser && currentUser.user.id === comment.author.id) && (
					<div>
						<a href={`#collapse-edit${comment.id}`} 
							role="button" 
							data-toggle="collapse" 
							className="btn btn-xs btn-warning"
							aria-expanded="false" 
							aria-controls={`collapse${comment.id}`}
						>Edit
						</a>
						<a onClick={removeComment}
							style={{marginLeft: "2px"}}  
							className="btn btn-xs btn-danger"
							>Delete
						</a>
					</div>
					
				)}
			</div>
		</div>
	)
}

export default CommentListItem;