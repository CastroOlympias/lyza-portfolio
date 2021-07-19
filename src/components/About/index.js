import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
    return (
        <section className="my-5">
            <h1 id="about">Who am I? Who the hell are you?</h1>
            <h1 id="about">Who am I? I'm the captain of this ship!</h1>
            <img src={coverImage} className="my-2" style={{ width: "100%"}} alt="cover"></img>
        </section>
    )
}

export default About;