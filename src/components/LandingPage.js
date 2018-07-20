import React from "react";
import {Link} from "react-router-dom";

const LandingPage = () => {
	return (
		<div>
			<div id="landing-header">
		 		<h1>Welcome to YelpCamp!</h1>
		 		<Link to="/" className="btn btn-lg btn-success">View All Campgrounds</Link>
		    </div>
		    
		    <ul className="slideshow">
		      <li></li>
		      <li></li>
		      <li></li>
		      <li></li>
		      <li></li>
		    </ul>
		</div>
	)
		
}

export default LandingPage;