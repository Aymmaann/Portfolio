import React from "react";
import info from "./info";
import './Project.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

const ProjectInverse = (props) => {
    const projectKey = `project${props.number}`

    return(
        <>
            <div className="project-box flex flex-col-reverse justify-center items-center gap-0 xxxl:gap-20 xxl:flex-row xxl:gap-6">
                <div className="project-img-inverse-div bg-white border-2 border-gray-400 p-0.5 rounded-md flex justify-center items-center cursor-pointer">
                    <a href={info[projectKey].link} target="_blank">
                        <img src={info[projectKey].img} alt="" className="project-img"/>
                    </a>
                </div>
                

                <div className="project-text-box p-3 l:p-6 bg-black rounded-xl text-lightPink">
                    <h1 className="text-xl sl:text-2xl font-bold text-white">{info[projectKey].heading}</h1>
                    <p className="mt-5 text-sm xl:text-base">{info[projectKey].description}</p>
                    <a href={info[projectKey].githubLink} target="_blank">
                        <button className="project-btn bg-white text-black px-1 py-1 sl:px-2 sl:py-2 rounded-3xl font-bold mt-6">
                            <i className ="fa-brands fa-github"></i>
                        </button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default ProjectInverse