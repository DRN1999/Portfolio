import { useState } from "react";
import "./qualification.css"

const Qualification = (props) => {
    const[toggleState, setToggleState] = useState(1);
    const toggleTab = (index)=>{
        setToggleState(index);
    };
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personel journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState===1?"qualification__button qualification__active button--flex": "qualification__button button--flex"} onClick={()=>toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i>{" "}Education
                </div>

                <div className={toggleState===2?"qualification__button qualification__active button--flex": "qualification__button button--flex"} onClick={()=>toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState===1?"qualification__content qualification__content-active":"qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">JavaScript Full-Stack Developer Course</h3>
                            <span className="qualification__subtitle">RST Forum, Mumbai</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>2023 - present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">M.Sc (Computer Science)</h3>
                            <span className="qualification__subtitle">University of Mumbai</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>2021 - 2023
                            </div>
                        </div>

                        
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">B.Sc (Computer Science)</h3>
                            <span className="qualification__subtitle">University of Mumbai</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>2017 - 2020
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data"> 
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">High Schooling</h3>
                            <span className="qualification__subtitle">State Board of Maharashtra</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>2014 - 2017
                            </div>
                        </div>

                        
                    </div>
                </div>


                <div className={toggleState===2?"qualification__content qualification__content-active":"qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Product Designer</h3>
                            <span className="qualification__subtitle">Aaksa E-Commerce</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>2023 - present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">UX Designer</h3>
                            <span className="qualification__subtitle">Bolt-IoT Pvt. Ltd.</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>2021 - 2023
                            </div>
                        </div>

                        
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Designer</h3>
                            <span className="qualification__subtitle">Portfolio Project</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>2017 - 2020
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    {/* <div className="qualification__data"> 
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">High Schooling</h3>
                            <span className="qualification__subtitle">State Board of Maharashtra</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>2014 - 2017
                            </div>
                        </div>

                        
                    </div> */}
                </div>
            </div>
        </div>
    </section>
  )
};

export default Qualification;