import React, {Component} from 'react';
import Message from './Message.jsx'
import SystemMessage from './SystemMessage.jsx'

class MessagesBox extends Component {
	render() {
		return(
			<div>
				{ this.props.messageList.map((message) => {
					if (message.type == "message") { 
						return(<Message key={message.id} message={message} />) }
					else if (message.type === 'notification') { 
						return(<SystemMessage message={message} />) }
				}) }
			</div>
		)
	}
}

export default MessagesBox;