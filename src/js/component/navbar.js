import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import {Context} from "../store/appContext";
import {useContext} from "react";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0">
					<img className="logo mx-5" src={logo} alt="logo"></img>
				</span>
			</Link>
			<div className="ml-auto me-5">
				<div className="dropdown me-5">
					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu">
						{store.favorites.map((favorite)=>{
							return (
								<li className="d-flex justify-content-between p-3">
									{favorite.result.properties.name}
									<button className="btn btn-secondary" onClick={() =>{actions.addFavorites(favorite)}}><i className="fas fa-times"></i></button>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</nav>
	);

};
