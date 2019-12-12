import React, {useState} from 'react';
import {ProfilePhoto} from "../../assets/icons/svg";
import work1 from "../../assets/images/Profile Images/work_1.jpg";
import work3 from "../../assets/images/Profile Images/work_3.jpg";
import work4 from "../../assets/images/Profile Images/work_4.jpg";
import work6 from "../../assets/images/Profile Images/work_6.jpg";
import work7 from "../../assets/images/Profile Images/work_7.jpg";
import work8 from "../../assets/images/Profile Images/work_8.jpg";
import './Portfolio.css';

const Portfolio = (props) => {

    const [watch, setWatch] = useState(0);

    const routeContent = (route) => {
        props.history.push(`/${route}`);
    }

    const mouseEntered = (arg) => {
        setWatch(arg);
    }

    const mouseLeft = (arg) => {
        setWatch(arg);
    }

    return (
        <div className="container">
            <div className="row justify-content-lg-center">
                <div className="col-lg-8">
                    <div className="portfolio-container">
                        <div className="photo">
                            <ProfilePhoto width={"67px"} height={"76px"}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="portfolio-container">
                        <div className="portfolio-header">
                            <h3>Portfolio</h3>
                            <div
                                className="edit-ref"
                                onClick={() => routeContent("edit")}>
                                <span>Edit</span>
                            </div>
                        </div>
                        <div className="projects-container">
                            <div
                                onMouseEnter={() => mouseEntered(1)}
                                onMouseLeave={() => mouseLeft(0)}
                                className="portfolio-project">
                                <div  className="edit-delete">
                                    <span>Edit | </span><span>Delete</span>
                                </div>
                                <div className="img-container">
                                    <img className="project-image" alt="work1" src={work1}/>
                                    {watch === 1 ?  <div className="watch-project">
                                        <span>Watch it</span>
                                    </div>
                                    :null}
                                </div>
                                <div className="description">
                                    Lorem ipsum dolor sit amet, consectetur
                                </div>
                            </div>

                            <div
                                onMouseEnter={() => mouseEntered(2)}
                                onMouseLeave={() => mouseLeft(0)}
                                className="portfolio-project">
                                <div className="edit-delete">
                                    <span>Edit | </span><span>Delete</span>
                                </div>
                                <div className="img-container">
                                    <img className="project-image" alt="work1" src={work3}/>
                                    {watch === 2 ?
                                        <div className="watch-project">
                                            <span>Watch it</span>
                                        </div>
                                    :null}
                                </div>
                                <div className="description">
                                    Lorem ipsum dolor sit amet, consectetur
                                </div>
                            </div>
                            <div
                                onMouseEnter={() => mouseEntered(3)}
                                onMouseLeave={() => mouseLeft(0)}
                                className="portfolio-project">
                                <div  className="edit-delete">
                                    <span>Edit | </span><span>Delete</span>
                                </div>
                                <div className="img-container">
                                    <img className="project-image" alt="work1" src={work4}/>
                                    {watch === 3 ?
                                        <div className="watch-project">
                                            <span>Watch it</span>
                                        </div>
                                        :null}
                                </div>
                                <div className="description">
                                    Lorem ipsum dolor sit amet, consectetur
                                </div>
                            </div>
                            <div
                                onMouseEnter={() => mouseEntered(4)}
                                onMouseLeave={() => mouseLeft(0)}
                                className="portfolio-project">
                                <div  className="edit-delete">
                                    <span>Edit | </span><span>Delete</span>
                                </div>
                                <div className="img-container">
                                    <img className="project-image" alt="work1" src={work7}/>
                                    {watch === 4 ?
                                        <div className="watch-project">
                                            <span>Watch it</span>
                                        </div>
                                        :null}
                                </div>
                                <div className="description">
                                    Lorem ipsum dolor sit amet, consectetur
                                </div>
                            </div>
                            <div
                                onMouseEnter={() => mouseEntered(5)}
                                onMouseLeave={() => mouseLeft(0)}
                                className="portfolio-project">
                                <div  className="edit-delete">
                                    <span>Edit | </span><span>Delete</span>
                                </div>
                                <div className="img-container">
                                    <img className="project-image" alt="work1" src={work8}/>
                                    {watch === 5 ?
                                        <div className="watch-project">
                                            <span>Watch it</span>
                                        </div>
                                        :null}
                                </div>
                                <div className="description">
                                    Lorem ipsum dolor sit amet, consectetur
                                </div>
                            </div>
                            <div
                                onMouseEnter={() => mouseEntered(6)}
                                onMouseLeave={() => mouseLeft(0)}
                                className="portfolio-project">
                                <div  className="edit-delete">
                                    <span>Edit | </span><span>Delete</span>
                                </div>
                                <div className="img-container">
                                    <img className="project-image" alt="work1" src={work8}/>
                                    {watch === 6 ?
                                        <div className="watch-project">
                                            <span>Watch it</span>
                                        </div>
                                        :null}
                                </div>
                                <div className="description">
                                    Lorem ipsum dolor sit amet, consectetur
                                </div>
                            </div>
                            <div
                                onMouseEnter={() => mouseEntered(7)}
                                onMouseLeave={() => mouseLeft(0)}
                                className="portfolio-project">
                                <div  className="edit-delete">
                                    <span>Edit | </span><span>Delete</span>
                                </div>
                                <div className="img-container">
                                    <img className="project-image" alt="work1" src={work4}/>
                                    {watch === 7 ?
                                        <div className="watch-project">
                                            <span>Watch it</span>
                                        </div>
                                        :null}
                                </div>
                                <div className="description">
                                    Lorem ipsum dolor sit amet, consectetur
                                </div>
                            </div>
                            <div
                                onMouseEnter={() => mouseEntered(8)}
                                onMouseLeave={() => mouseLeft(0)}
                                className="portfolio-project">
                                <div  className="edit-delete">
                                    <span>Edit | </span><span>Delete</span>
                                </div>
                                <div className="img-container">
                                    <img className="project-image" alt="work1" src={work6}/>
                                    {watch === 8 ?
                                        <div className="watch-project">
                                            <span>Watch it</span>
                                        </div>
                                        :null}
                                </div>
                                <div className="description">
                                    Lorem ipsum dolor sit amet, consectetur
                                </div>
                            </div>
                        </div>
                        <div className="more-projects">
                                <span>More</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;