import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Board } from "./board.js";
//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			game: ["", "", "", "", "", "", "", "", ""],
			jugador: true
		};
	}
	clickGame(position) {
		let arr = this.state.game;
		let val = this.state.player ? "X" : "O";

		if (arr[position] === "") {
			arr[position] = val;
			this.setState({
				game: arr,
				jugador: !this.state.jugador
			});
		}
	}
	render() {
		return (
			<div>
				<div className="center">
					<h2>Tic Tac Toe</h2>
					<h3>subtitulo </h3>
				</div>
				<div className="container">
					<table id="board1">
						<tr>
							<td onClick={() => this.clickGame(0)}>
								{this.state.game[0]}
							</td>
							<td onClick={() => this.clickGame(1)}>
								{this.state.game[1]}
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
			</div>
		);
	}
}
