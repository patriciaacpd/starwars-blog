import React, {useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Characters from "../component/character.jsx";
import Planets from "../component/planets.jsx";

export const Home = () => {
	return (
		<>
		<Characters></Characters>
		<Planets></Planets>
		</>
	)

	};
