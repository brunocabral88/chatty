import React, {Component} from 'react';
import Navbar from './Navbar.jsx';
import MessagesBox from './MessagesBox.jsx'
import Footer from './Footer.jsx'

const appData = {
  currentUser: {name:null},
  messages: [],
  users_connected: 1
}

class App extends Component {

  handleMessage = (message) => {
    if (message.type === 'maintenance') {
      this.setState(message);
    } 
    else {
      this.state.messages.push(message);
      this.setState({ messages: this.state.messages });
    }
  }
  sendMessageToSocket = (message) => {
    this.ws.send(JSON.stringify(message));
  }
  constructor(props) {
    super(props);
    this.state = appData; 
  }
  componentDidMount() {
    // Creates websocket
    this.ws = new WebSocket('ws://localhost:3001');
    this.ws.onmessage = (data) => {
      const message = JSON.parse(data.data);
      this.handleMessage(message);
    }
  }

  render() {
    return (
    	<div>
	    	<Navbar usersConnected={this.state.users_connected} />
	    	<MessagesBox messageList={this.state.messages} userColor={this.state.user_color} />
	    	<Footer userColor={this.state.user_color} sendMessageToSocket={this.sendMessageToSocket} currentUser={this.state.currentUser} />
	    </div>
    )
  }
}
export default App;
