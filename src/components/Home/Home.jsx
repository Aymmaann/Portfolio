import React from "react";
import "./Home.css"

const Home = () => {
    return(
        <>
            <section className="home" id="Home">
                <div className="home-text">
                    <h1>I'm Ayman Haseeb,</h1>
                    <p>{"A passionate  <b>"}<span className="front-end">frontend developer</span>{"</b>  with a keen interest in AI."}</p>
                    <p className="description">A third-year CS student at SRM University, I'm crafting digital solutions with a blend of creativity and technical prowess. My passion for web development and AI fuels my journey towards innovative creations.</p>

                    <div className="flex gap-8 items-center justify-center mt-5 sl:mt-10">
                        <a href="https://github.com/Aymmaann" target="_blank"><button>GitHub</button></a>
                        <a href="#Contact"><button>Contact Me</button></a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;