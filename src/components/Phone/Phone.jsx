import React from "react";
import "./Phone.css"
import designs from "./designs";

const Phone = () => {
    return(
        <>
            <section className="design-section">
                <h1 className='text-purple uppercase font-bold text-center pt-10 l:pt-14 text-[28px] sl:text-[37px] xl:text-[45px] xxl:text-[55px]' id="Designs">Designs</h1>
                <div className="phone-scroller">
                    <ul className="phone-scroller-ul">
                        {Object.values(designs).map((design,index) => (
                            <li className="one-design" key={index}>
                                <div className="phone-bezel">
                                    <div className="dynamic-island"></div>
                                    <img src={design} alt={`design-${index}`} className="phone-screen xl:w-[175px]"/>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Phone;