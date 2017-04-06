import React,{Component} from 'react';

class Message extends Component {
	render() {
		if (this.props.message.image_url) {
			return(<div className={"message"}>
						<span style={{color: this.props.message.user_color}} className={"message-username"}>{this.props.message.username}</span>
						<span className={"message-content"}><span className="message-image-caption"> {this.props.message.content}</span>
							<img className="message-image" src={this.props.message.image_url} />
						</span>
						
					</div>)
		} else {
			return (<div className={"message"}>
						<span style={{color: this.props.message.user_color}} className={"message-username"}>{this.props.message.username}</span>
						<span className={"message-content"}>{this.props.message.content}</span>
					</div>)
		}
		
	}
}

export default Message;