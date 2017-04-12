import React,{Component} from 'react';

class Footer extends Component {

	render() {
		return(
			<footer className={"chatbar"}>
			  <input className={"chatbar-username"} onBlur={this.props.handleUserChange} placeholder={"Your Name (Optional)"}
				 	defaultValue={this.props.currentUser.name} />
			  <input className={"chatbar-message"} onKeyUp={this.props.handleTextChange}
					placeholder={"Type a message and hit ENTER"} />
			</footer>
		)
	}
}

export default Footer;