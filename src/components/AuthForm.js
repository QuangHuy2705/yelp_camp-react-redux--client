import React, {Component} from "react";

class AuthForm extends Component {
	constructor(props) {
		super(props);
		this.state =  {
			email: "",
			password: "",
			username: "",
			avatar: ""
		}
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const authType = this.props.signUp ? "signup" : "signin";
		this.props.onAuth(authType, this.state)
			.then(() => {
				this.props.history.push("/");
			}).catch(() => {
				return;
			})
	}

	render() {
		const {removeError, heading, buttonText, errors, history} = this.props;
		const {username, email, password, avatar} = this.state;
		
		history.listen(() => {
			removeError();
		})

		return (
			<div className="row">
			    <h1 style={{textAlign: "center"}}>{heading}</h1>
			    {errors.message && (<div className="alert alert-danger" style={{textAlign: "center", width: "30%", margin: "25px auto"}}>{errors.message}</div>)}
			    <div style={{width: "30%", margin: "auto"}}>
			        <form onSubmit={this.handleSubmit}>
			            <div className="form-group">
			                <input 
			                	className="form-control" 
			                	type="text" 
			                	name="email" 
			                	placeholder="Email:"
			                	value={email}
			                	onChange={this.handleChange}
			                />
			                
			            </div>
			            <div className="form-group">
			                <input 
			                	className="form-control" 
			                	type="password" 
			                	name="password" 
			                	placeholder="password"
			                	value={password}
			                	onChange={this.handleChange}
			                />
			            </div>
			            {this.props.signUp && (
			            	<div>
			            		<div className="form-group">
					                <input 
					                	className="form-control" 
					                	type="text" 
					                	name="username" 
					                	placeholder="username"
					                	value={username}
					                	onChange={this.handleChange}
					                />
					                
					            </div>
					            <div className="form-group">
					                <input 
					                	className="form-control" 
					                	type="text" 
					                	name="avatar" 
					                	placeholder="avatar"
					                	value={avatar}
					                	onChange={this.handleChange}
					                />
					                
					            </div>
			            	</div>
			            		
			            	)
			        	}
			            <div className="form-group">
			                <button type="submit" className="btn btn-lg btn-primary btn-block" >{buttonText}</button>
			            </div>
			        </form>
			        <a href="/campgrounds">Go Back</a>
			        
			    </div>
			</div>
		)
	}
}

export default AuthForm;