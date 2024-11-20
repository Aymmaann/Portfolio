import React, { useState } from "react";
import "./About.css"
import hero from "../../assets/hero.png"
import techStack from "./techStack";

const About = () => {
    const [skills, setSkills] = useState(true)
    const [education, setEducation] = useState(false)

    const showSkills = () => {
        setEducation(false)
        setSkills(true)
    }

    const showEducation = () => {
        setSkills(false)
        setEducation(true)
    }

    return(
        <>
            <div>
                <div className="about-section">
                    <h1 className='text-purple uppercase text-[28px] sl:text-[37px] font-bold text-center pt-14 xxl:text-[55px] xl:text-[45px]' id="About">About Me</h1>

                    <div className="about-div">
                        <div className="about-img">
                            <img src={hero} alt="hero image"/>
                        </div>

                        <div className="about-text">
                            <p className="about-description">As a dedicated frontend developer with a passion for AI, I'm currently deepening my skills by mastering the MERN stack. My journey has also included hands-on experience with machine learning and deep learning projects, utilizing powerful frameworks like TensorFlow and Scikit-learn. To further enhance my expertise, I've successfully completed several relevant courses and industrial training programs.</p>

                            <ul className="about-list">
                                <li onClick={showSkills} className="about-list-li">
                                    Skills
                                    <div className="line"></div>
                                </li>
                                <li onClick={showEducation}>
                                    Education
                                    <div className="line"></div>
                                </li>
                            </ul>

                            {skills && (
                                <div className="skills-section">
                                    <h2>Front End Development</h2>
                                    <p>Designing aesthetic and functional websites using React and Tailwind.</p>
                                    <h2 className="skills-other-headings">AI/ML</h2>
                                    <p>Developing intricate Machine Learning and Deep Learning models.</p>
                                    <h2 className="skills-other-headings">Competitive Coding</h2>
                                    <p>Obtaining innovative solutions for your problems.</p>
                                </div>
                            )}

                            {education && (
                                <div className="education-section">
                                    <h2>2022 - 2026</h2>
                                    <p>Btech CSE Cloud Computing Student at SRM University.</p>
                                    <p>Current CGPA: 9.6</p>
                                    <h2 className="skills-other-headings">2020 - 2022</h2>
                                    <p>Sanjos Metropolitan School(CBSE)</p>
                                    <p>12th Percentage: 92%</p>
                                    <h2 className="skills-other-headings">2017 - 2020</h2>
                                    <p>Mount Guide International School(CBSE)</p>
                                    <p>10th Percentage: 95.6%</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="tech-stack-section">
                    <h1 className='text-purple uppercase text-[28px] sl:text-[37px] xxl:text-[55px] xl:text-[45px] font-bold text-center sl:mt-14'>My Tech Stack</h1>
                    <ul className="tech-stack">
                        {Object.values(techStack).map((item, index) => (
                            <li key={index}>
                                <img src={item} alt={`design-${index}`} className="tech-stack-img"/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default About;