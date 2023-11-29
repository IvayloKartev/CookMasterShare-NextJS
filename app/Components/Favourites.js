import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeCard from "./RecipeCard";
import RecipeAssembler from "./RecipeAssembler";
import '../App.css';

export default function Favourites({favorites}){
    if(favorites == null || favorites.length === 0){
        return (
            <>
                <RecipeCard type="none" link="#"/>
            </>
        )
    }
    else {
        favorites.forEach((favorite) => {
            let photo = favorite.image;
            let title = favorite.title;
            let content = favorite.content;

            return (
                <>
                    <RecipeAssembler type="general" photo={photo} title={title} content={content}/>
                </>
            )
        })
    }
}