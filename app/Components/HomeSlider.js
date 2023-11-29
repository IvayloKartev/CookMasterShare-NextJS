'use client'
import React from "react";
import '../css/slider.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeAssembler from "./RecipeAssembler";

export default function HomeSlider({recipes, recLike}){
    //let photos = recipes.map(recipe => recipe.image);
    //let titles = recipes.map(recipe => recipe.name);
    //let contents = recipes.map(recipe => recipe.content);

    let slideCounter = 0;

    function slideRight(){
        const rCard = document.getElementById('card1');
        const mCard = document.getElementById('card2');
        const lCard = document.getElementById('card3');

    
        if(slideCounter % 3 === 0) {
            mCard.setAttribute('class', 'card unactive-card');
            lCard.setAttribute('class', 'card active-card');
            rCard.setAttribute('class', 'card unactive-card');
            mCard.style.transform = 'translate(-115%, 0)';       
            lCard.style.transform = 'translate(-100%, 0)';
            rCard.style.transform = 'translate(250%, 0)';
        }
        else if(slideCounter % 3 === 1) {
            lCard.setAttribute('class', 'card unactive-card');
            rCard.setAttribute('class', 'card active-card');
            mCard.setAttribute('class', 'card unactive-card');
            mCard.style.transform = 'translate(125%, 0)';       
            lCard.style.transform = 'translate(-240%, 0)';
            rCard.style.transform = 'translate(110%, 0)';         
        }
        else if(slideCounter % 3 === 2) {
            lCard.setAttribute('class', 'card unactive-card');
            mCard.setAttribute('class', 'card active-card');
            rCard.setAttribute('class', 'card unactive-card');
            mCard.style.transform = 'translate(0, 0)';       
            lCard.style.transform = 'translate(0, 0)';
            rCard.style.transform = 'translate(0, 0)';         
        }
        slideCounter ++;
    }
    function slideLeft(){
        const rCard = document.getElementById('card1');
        const mCard = document.getElementById('card2');
        const lCard = document.getElementById('card3');

        if(slideCounter % 3 === 1) {
            mCard.setAttribute('class', 'card unactive-card');
            lCard.setAttribute('class', 'card active-card');
            rCard.setAttribute('class', 'card unactive-card');
            mCard.style.transform = 'translate(-110%, 0)';       
            lCard.style.transform = 'translate(-105%, 0)';
            rCard.style.transform = 'translate(250%, 0)';
        }
        else if(slideCounter % 3 === 0) {
            lCard.setAttribute('class', 'card unactive-card');
            rCard.setAttribute('class', 'card active-card');
            mCard.setAttribute('class', 'card unactive-card');
            mCard.style.transform = 'translate(125%, 0)';       
            lCard.style.transform = 'translate(-250%, 0)';
            rCard.style.transform = 'translate(110%, 0)';         
        }
        else if(slideCounter % 3 === 2) {
            lCard.setAttribute('class', 'card unactive-card');
            mCard.setAttribute('class', 'card active-card');
            rCard.setAttribute('class', 'card unactive-card');
            mCard.style.transform = 'translate(0, 0)';       
            lCard.style.transform = 'translate(0, 0)';
            rCard.style.transform = 'translate(0, 0)';         
        }
        slideCounter ++;
    }

    return (
        <>
            <h1 className="text-white slider-title">The most liked recipes for today</h1>
            <section className="recipe-slider">                
                <div className="slide-back" id="rs" onClick={slideRight}><i class="fas fa-arrow-left"></i></div>
                <RecipeAssembler photo='https://hips.hearstapps.com/hmg-prod/images/goulash-index-64de8d20b97d5.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=1200:*' title='Test' content='{contents[0]}' type="unactive"/>
                <RecipeAssembler photo='https://hips.hearstapps.com/hmg-prod/images/goulash-index-64de8d20b97d5.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=1200:*' title='Test' content='{contents[0]}' type="active"/>
                <RecipeAssembler photo='https://hips.hearstapps.com/hmg-prod/images/goulash-index-64de8d20b97d5.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=1200:*' title='Test' content='{contents[0]}' type="unactive"/>
                <div className="slide-forth" id="ls" onClick={slideLeft}><i class="fas fa-arrow-right"></i></div>
            </section> 
        </>
    )
}