import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			a: ["", "", "", "", "", "", "", "", ""],
			b: ["", "", "", "", "", "", "", "", ""],
			jugador: true
		};
	}
	cambiarJugador() {
		this.setState({ jugador: true });
	}
	render() {
		return (
			<div className="container" id="container">
				<div className="row text-white ">
					<div className="col-12 turno">
						turn :{" "}
						{this.state.jugador == true
							? this.state.a
							: this.state.b}
					</div>
					<div
						className="col-4 a"
						onClick={() => {
							this.setState({
								a: "X",
								b: "0",
								jugador: !this.state.jugador
							});
						}}>
						{" "}
						{this.state.jugador == true
							? this.state.a
							: this.state.b}
					</div>
					<div
						className="col-4 a"
						onClick={() => {
							this.setState({
								a: "X",
								b: "0",
								jugador: !this.state.jugador
							});
						}}>
						{" "}
						{this.state.jugador == true
							? this.state.a
							: this.state.b}
					</div>
					<div className="col-4 b" />
					<div className="col-4 a" />
					<div className="col-4 a" />
					<div className="col-4 b" />
					<div className="col-4 c" />
					<div className="col-4 c" />
					<div className="col-4 " />
				</div>
			</div>
		);
	}
}
