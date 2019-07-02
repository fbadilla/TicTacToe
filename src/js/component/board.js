import React from "react";

export default class Board extends React.Component {
	constructor() {
		super();
		this.state = {
			game: ["", "", "", "", "", "", "", "", ""],
			player: true
		};
	}
	clickGame(position) {
		let arr = this.state.game;
		let val = this.state.player ? "X" : "O";

		if (arr[position] === "") {
			arr[position] = val;
			this.setState({
				game: arr,
				player: !this.state.player
			});
		}
	}
	render() {
		return (
			<div>
				<table id="board1">
					<tr>
						<td onClick={() => this.clickGame(0)}>
							{this.state.val[0]}
						</td>
						<td onClick={() => this.clickGame(1)}>
							{this.state.val[1]}
						</td>
						<td onClick={() => this.clickGame(2)}>
							{this.state.game[2]}
						</td>
					</tr>
					<tr>
						<td onClick={() => this.clickGame(3)}>
							{this.state.game[3]}
						</td>
						<td onClick={() => this.clickGame(4)}>
							{this.state.game[4]}
						</td>
						<td onClick={() => this.clickGame(5)}>
							{this.state.game[5]}
						</td>
					</tr>
					<tr>
						<td onClick={() => this.clickGame(6)}>
							{this.state.game[6]}
						</td>
						<td onClick={() => this.clickGame(7)}>
							{this.state.game[7]}
						</td>
						<td onClick={() => this.clickGame(8)}>
							{this.state.game[8]}
						</td>
					</tr>
				</table>
			</div>
		);
	}
}
