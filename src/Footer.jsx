import React,{Component} from 'react';

class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: (this.props.currentUser.name || "Anonymous"),
			message: ''
		}
	}
	handleTextChange = (ev) => {
		if (ev.key === 'Enter' && this.state.content) {
			this.props.sendMessageToSocket(this.state);
			ev.target.value = '';
			this.setState({content: null});
		} else {
			this.setState({content: ev.target.value, type: 'message', user_color: this.props.userColor })
		}
	}

	handleUserChange = (ev) => {
		if (ev.target.value !== this.state.username) {
			this.props.sendMessageToSocket({ type: 'notification', content: `User ${this.state.username} changed their name to ${ev.target.value}.` });
			this.setState({ username: ev.target.value });
		}
	}
	render() {
		return(
			<footer className={"chatbar"}>
			  <input className={"chatbar-username"} onBlur={this.handleUserChange} placeholder={"Your Name (Optional)"} defaultValue={this.props.currentUser.name} />
			  <input className={"chatbar-message"} onKeyUp={this.handleTextChange} placeholder={"Type a message and hit ENTER"} />
			</footer>
		)
	}
}

export default Footer;