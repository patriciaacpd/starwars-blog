import React from "react";
import user from "../../img/user.png";
import {Context} from "../store/appContext";
import {useNavigate} from "react-router";
import {useContext} from "react";
import {useParams} from "react-router";

const CharacterDetails = () => {
    const navigate = useNavigate();
    const { store } = useContext(Context);
    const params = useParams();
    const { id } = params;
    const getCharacter = store.swapiCharacters.find((character) => character.result.uid == id);
    return (
        <div className="down">
            <div className="container text-center">
                <div className="text-center fs-4 d-flex justify-content-between border-bottom border-4 border-danger">
                    <img src={user} className="tarjeta my-4" alt="..."></img>
                    <span className="w-50">
                        <h2>{getCharacter?.result.properties.name}</h2>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur assumenda suscipit modi dolor! Ea quasi ipsa ab et, nulla deserunt nihil dolorem adipisci soluta quaerat, asperiores veniam quia, neque ullam ratione. Corrupti, ratione? Minus nobis ad natus asperiores repudiandae voluptatibus.</p>
                    </span>
                </div>
                <div className="d-flex justify-content-between mt-4">
                    <div className="text-center text-danger">
                        <h5>NAME</h5>
                        <p>{getCharacter?.result.properties.name}</p>
                    </div>
                    <div className="text-center text-danger">
                        <h5>BIRTH YEAR</h5>
                        <p>{getCharacter?.result.properties.birth_year}</p>
                    </div>
                    <div className="text-center text-danger">
                        <h5>GENDER</h5>
                        <p>{getCharacter?.result.properties.gender}</p>
                    </div>
                    <div className="text-center text-danger">
                        <h5>HAIR COLOR</h5>
                        <p>{getCharacter?.result.properties.hair_color}</p>
                    </div>
                    <div className="text-center text-danger">
                        <h5>EYE COLOR</h5>
                        <p>{getCharacter?.result.properties.eye_color}</p>
                    </div>
                    <div className="text-center text-danger">
                        <h5>HEIGHT</h5>
                        <p>{getCharacter?.result.properties.height}</p>
                    </div>
                </div>
                <button type="button" className="btn btn-primary btn-sm" onClick={() => {navigate("/")}}>Back</button>
            </div>
        </div>
    )

}

export default CharacterDetails;