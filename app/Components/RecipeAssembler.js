'use client'
import '../css/slider.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Head from './Head';

export default function RecipeAssembler({photo, title, content, type, recLike}){

    if(type === "active"){
        return (
            <div className="card active-card" id="card2">
                <Head/>
                <div className="card-body">
                    <img className="card-img" src={photo}/>
                    <h1 className="card-title">{title}</h1>
                    <p className="card-text">{content}</p>
                </div>
                <button className="btn btn-secondary" onClick={() => {recLike(title)}}><i className="fa-solid fa-heart"></i></button>
            </div>
        )
    }
    if(type === 'general'){
        return (
            <div className="card active-card">
                <Head/>
                <div className="card-body">
                    <img className="card-img" src={photo}/>
                    <h1 className="card-title">{title}</h1>
                    <p className="card-text">{content}</p>
                </div>
                <button className="btn btn-secondary" onClick={() => {recLike(title)}}><i className="fa-solid fa-heart"></i></button>
            </div>
        )
    }
    if(type === "unactive"){
        return (
            <div className="card unactive-card" id="card1">
                <Head/>
                <div className="card-body">
                    <img className="card-img" src={photo}/>
                    <h1 className="card-title">{title}</h1>
                    <p className="card-text">{content}</p>
                </div>
                <button className="btn btn-secondary" onClick={() => {recLike(title)}}><i className="fa-solid fa-heart"></i></button>
            </div>
        )
    }
    if(type === "unactive-left"){
        return (
            <div className="card unactive-card" id="card3">
                <Head/>
                <div className="card-body">
                    <img className="card-img" src={photo}/>
                    <h1 className="card-title">{title}</h1>
                    <p className="card-text">{content}</p>
                </div>
                <button className="btn btn-secondary" onClick={() => {recLike(title)}}><i className="fa-solid fa-heart"></i></button>
            </div>
        )
    }
}