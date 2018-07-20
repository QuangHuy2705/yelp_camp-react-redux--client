import React from "react";
import {Link} from "react-router-dom";

const CampgroundListItem = ({removeCampground, name, imageUrl, campgroundId, author_id, currentUser_id}) => {
	return (
		<div className="col-md-3 col-sm-6">
			<div className="thumbnail" id="index-thumbnail">
				<img src={imageUrl} alt=""/>
				<div className="caption">
					<h4>{name}</h4>
				</div>
				<p> 
					<Link to={`/campgrounds/${campgroundId}`} className="btn btn-primary">More Info</Link>
	            </p>
	            {(author_id == currentUser_id) && (
	            	<p>
	            		<a onClick={removeCampground} className="btn btn-danger">Delete</a>
	            	</p>
	            )}
			</div>
		</div>
	)
}

export default CampgroundListItem;