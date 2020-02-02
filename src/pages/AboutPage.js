import React from 'react'
import Info from './../components/AboutPage/info';
import Hero from './../components/Hero';
import aboutBcg from '../images/aboutBcg.jpeg';

export default function AboutPage() {
    return (
        <React.Fragment>
            
            <Hero img={aboutBcg}/>
            <Info></Info>
        </React.Fragment>
    )
}
