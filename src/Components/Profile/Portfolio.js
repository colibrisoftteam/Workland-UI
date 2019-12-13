import React, {useState} from 'react';
import {ProfilePhoto, Stars} from "../../assets/icons/svg";
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

    const pushToSetting = (route) => {
        props.history.push(`/${route}`);
    }

    return (
        <div className="container">
            <div className="row justify-content-lg-center">
                <div className="col-lg-8">
                    <div className="user-container">
                        <div style={{width: "20%"}}>
                            <div className="user-photo">
                                <ProfilePhoto width={"67px"} height={"76px"}/>
                            </div>
                        </div>
                        <div className="user-details">
                            <div className="user-name">
                                <span>John Doe</span>
                                <br/>
                                <span className="userName">@JohnTravolta</span>
                                <div className="reviews-rating">
                                    <Stars width={"20px"} height={"20px"} color="#F7993A"/>
                                    <Stars width={"20px"} height={"20px"} color="#F7993A"/>
                                    <Stars width={"20px"} height={"20px"} color="#F7993A"/>
                                    <Stars width={"20px"} height={"20px"} color="#F7993A"/>
                                    <Stars width={"20px"} height={"20px"} color="#F7993A"/>
                                </div>
                            </div>
                            <div className="brief-content">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Dolores est, facere nisi nobis nostrum tempora voluptatibus!
                                Accusantium assumenda at beatae consequuntur cumque deserunt,
                            </div>
                            <div className="additional-info">
                                <div className="user-references">
                                    <div>Telephone:  +998991234455</div>
                                    <div>Email:  john1998@gmail.com</div>
                                </div>
                                <div>Skills:</div>
                                <div className="user-skills">
                                    <div className="user-skill">
                                        Web Programming
                                    </div>
                                    <div className="user-skill">
                                       Mobile Applications
                                    </div>
                                    <div className="user-skill">
                                        Web Design
                                    </div>
                                </div>
                            </div>
                            <div className="edit-profile">
                                <button
                                    onClick={() => pushToSetting("settings/profile")}
                                    className="edit-user-details">Edit</button>
                            </div>
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
                    <div className="portfolio-container">
                        <div className="portfolio-header">
                            <h3>Reviews</h3>
                        </div>
                        <div className="reviews-container">
                            <div className="reviews">
                                <div className="reviews-header">
                                    <div className="reviews-title">
                                        <span className="reviews-title">Make a web-site</span>
                                        <div className="reviews-rating">
                                            <Stars width={"20px"} height={"20px"} color="#F7993A"/>
                                            <Stars width={"20px"} height={"20px"} color="#F7993A"/>
                                            <Stars width={"20px"} height={"20px"} color="#F7993A"/>
                                            <Stars width={"20px"} height={"20px"} color="#F7993A"/>
                                            <Stars width={"20px"} height={"20px"} color="#F7993A"/>
                                        </div>
                                    </div>
                                    <div className="reviews-date">
                                        Today at 16:21
                                    </div>
                                </div>
                                <br/>
                                <div className="reviews-body">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Alias at beatae corporis inventore, nulla repellat sit temporibus.
                                    Ab accusamus alias amet blanditiis dignissimos, dolorem inventore nihil,
                                    odio perferendis quas sapiente.
                                    Ab accusamus alias amet blanditiis dignissimos, dolorem inventore nihil,
                                    odio perferendis quas sapiente.
                                </div>
                            </div>
                            <div className="reviews">
                                <div className="reviews-header">
                                    <div className="reviews-title">
                                        <span className="reviews-title">Make a web-site</span>
                                        <div className="reviews-rating">
                                            <Stars width={"20px"} height={"20px"} color="#F7993A"/>
                                            <Stars width={"20px"} height={"20px"} color="#F7993A"/>
                                            <Stars width={"20px"} height={"20px"} color="#F7993A"/>
                                            <Stars width={"20px"} height={"20px"} color="#F7993A"/>
                                            <Stars width={"20px"} height={"20px"} color="#F7993A"/>
                                        </div>
                                    </div>
                                    <div className="reviews-date">
                                        Today at 16:21
                                    </div>
                                </div>
                                <br/>
                                <div className="reviews-body">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Alias at beatae corporis inventore, nulla repellat sit temporibus.
                                    Ab accusamus alias amet blanditiis dignissimos, dolorem inventore nihil,
                                    odio perferendis quas sapiente.
                                    Ab accusamus alias amet blanditiis dignissimos, dolorem inventore nihil,
                                    odio perferendis quas sapiente.
                                </div>
                            </div>
                            <div className="reviews">
                                <div className="reviews-header">
                                    <div className="reviews-title">
                                        <span className="reviews-title">Make a web-site</span>
                                        <div className="reviews-rating">
                                            <Stars width={"20px"} height={"20px"} color="#F7993A"/>
                                            <Stars width={"20px"} height={"20px"} color="#F7993A"/>
                                            <Stars width={"20px"} height={"20px"} color="#F7993A"/>
                                            <Stars width={"20px"} height={"20px"} color="#F7993A"/>
                                            <Stars width={"20px"} height={"20px"} color="#F7993A"/>
                                        </div>
                                    </div>
                                    <div className="reviews-date">
                                        Today at 16:21
                                    </div>
                                </div>
                                <br/>
                                <div className="reviews-body">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Alias at beatae corporis inventore, nulla repellat sit temporibus.
                                    Ab accusamus alias amet blanditiis dignissimos, dolorem inventore nihil,
                                    odio perferendis quas sapiente.
                                    Ab accusamus alias amet blanditiis dignissimos, dolorem inventore nihil,
                                    odio perferendis quas sapiente.
                                </div>
                            </div>
                            <div className="reviews">
                                <div className="reviews-header">
                                    <div className="reviews-title">
                                        <span className="reviews-title">Make a web-site</span>
                                        <div className="reviews-rating">
                                            <Stars width={"20px"} height={"20px"} color="#F7993A"/>
                                            <Stars width={"20px"} height={"20px"} color="#F7993A"/>
                                            <Stars width={"20px"} height={"20px"} color="#F7993A"/>
                                            <Stars width={"20px"} height={"20px"} color="#F7993A"/>
                                            <Stars width={"20px"} height={"20px"} color="#F7993A"/>
                                        </div>
                                    </div>
                                    <div className="reviews-date">
                                        Today at 16:21
                                    </div>
                                </div>
                                <br/>
                                <div className="reviews-body">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Alias at beatae corporis inventore, nulla repellat sit temporibus.
                                    Ab accusamus alias amet blanditiis dignissimos, dolorem inventore nihil,
                                    odio perferendis quas sapiente.
                                    Ab accusamus alias amet blanditiis dignissimos, dolorem inventore nihil,
                                    odio perferendis quas sapiente.
                                </div>
                            </div>
                            <div className="reviews">
                                <div className="reviews-header">
                                    <div className="reviews-title">
                                        <span className="reviews-title">Make a web-site</span>
                                        <div className="reviews-rating">
                                            <Stars width={"20px"} height={"20px"} color="#F7993A"/>
                                            <Stars width={"20px"} height={"20px"} color="#F7993A"/>
                                            <Stars width={"20px"} height={"20px"} color="#F7993A"/>
                                            <Stars width={"20px"} height={"20px"} color="#F7993A"/>
                                            <Stars width={"20px"} height={"20px"} color="#F7993A"/>
                                        </div>
                                    </div>
                                    <div className="reviews-date">
                                        Today at 16:21
                                    </div>
                                </div>
                                <br/>
                                <div className="reviews-body">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Alias at beatae corporis inventore, nulla repellat sit temporibus.
                                    Ab accusamus alias amet blanditiis dignissimos, dolorem inventore nihil,
                                    odio perferendis quas sapiente.
                                    Ab accusamus alias amet blanditiis dignissimos, dolorem inventore nihil,
                                    odio perferendis quas sapiente.
                                </div>
                            </div>
                            <div className="more-projects">
                                More
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;