import React from "react";
import {Link} from "react-router-dom";

const Jumbotron = () => {
	return (
		<header className="jumbotron">
			<div className="container">
				<h1>Welcome to Yelpcamp</h1>
				<p>View our hand-picked Campground from all over the world</p>
				<Link to="/campground/new" className="btn btn-primary btn-lg">Add new Campground</Link>
			</div>

		</header>
	)
}

export default Jumbotron;