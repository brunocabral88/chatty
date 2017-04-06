import React, {Component} from 'react';

class Navbar extends Component {
	render() {
		return(
			<nav className={"navbar"}>
			  <a href={"/"} className="navbar-brand">Chatty</a>
				<span className="connected-users">{this.props.usersConnected} users connected</span>
			</nav>
		)
	}
}

export default Navbar;