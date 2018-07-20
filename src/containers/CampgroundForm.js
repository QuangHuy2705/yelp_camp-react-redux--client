import React, {Component} from "react";

class CampgroundForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			imageUrl: "",
			description: ""
		};
	};

	handleChange = (e) => {
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value
		})
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.postCampground({...this.state});
		this.props.history.push("/");
	};

	render() {
		return (
			<div className="row">
				<h1 style={{textAlign: "center"}}>Create a new Campground</h1>
				{this.props.errors.message && (<div className="alert alert-danger" style={{textAlign: "center", width: "30%", margin: "25px auto"}}>{this.props.errors.message}</div>)}
				<div style={{width: "30%", margin: "auto"}}>
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<input type="text"
								className="form-control"
								onChange={this.handleChange}	
								placeholder="name"
								name="name"
								value={this.state.name}
							/>
						</div>	
						<div className="form-group">
							<input type="text"
								className="form-control"
								onChange={this.handleChange}
								placeholder="imageUrl"
								name="imageUrl"
								value={this.state.imageUrl}
							/>
						</div>
						<div className="form-group">
							<input type="text"
								className="form-control"
								onChange={this.handleChange}
								placeholder="description"
								name="description"
								value={this.state.description}
							/>
						</div>
						
						<div className="form-group">
		                    <button className="btn btn-lg btn-primary btn-block" type="submit">Add</button>
		                </div>
					</form>
				</div>
			</div>
		)
	}
}

export default CampgroundForm;