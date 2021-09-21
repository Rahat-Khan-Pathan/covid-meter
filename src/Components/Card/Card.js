import React from 'react';
import { useState } from 'react/cjs/react.development';
import './Card.css';

const Card = (props) => {
    const {TotalConfirmed,TotalDeaths} = props.global;
    const TotalRecovered = 155465512;
    const counters = document.querySelectorAll('.counter');
    const speed = 20;
    counters.forEach(counter => {
        const updateCount = ()=> {
            console.log(counter);
            const target = +(counter.getAttribute('data-target'));
            const count = +(counter.innerText);
            const inc = Math.round(target/speed);
            if(count <= target) {
                counter.innerText = count + inc;
                setTimeout(updateCount,100);
            }
            else {
                counter.innerText = target;
            }
        }
        updateCount();
    })

    return (
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 mx-4 g-4 card-div">
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Total Cases</h5>
                        <p class="card-text cnt counter" data-target={TotalConfirmed}>0</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Total Deaths</h5>
                        <p class="card-text cnt death counter" data-target={TotalDeaths}>0</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Total Recovered</h5>
                        <p class="card-text cnt recover counter" data-target={TotalRecovered}>0</p>
                    </div>
                    </div>
                </div>
            </div>
    );
};

export default Card;