import '../App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { switchColor } from '../ts/changeActiveState.ts';

export default function SidePanel({name}){
    //switchColor();
    return(
        <aside className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark sidebar">
            <a href="#" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <span className="fs-4">{name}</span>
            </a>
            <hr/>
            <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
                <a id="test1" href="#accountinfo" className="nav-link bg-warning text-black">Profile Info</a>
            </li>
            <li>
                <a href="#favorites" className="nav-link text-white sideoptions">Favourites</a>
            </li>
            <li>
                <a href="#myrecipes" className="nav-link text-white sideoptions">My recipes</a>
            </li>
            <li>
                <a href="#createrecipe" className="nav-link text-white sideoptions">Create recipe</a>
            </li>
            <li>
                <a href="#" className="nav-link text-white sideoptions">Challenges</a>
            </li>
            </ul>
            <hr/>
        </aside>
    )
}