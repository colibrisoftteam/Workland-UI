import React from 'react';
import './TaskCard.css';
import star from "../../assets/images/star.png";
import { ProfPhoto } from '../../assets/icons/svg';



const TaskCard = () => {
    return (
        <div className="TaskCard-setting">
            <h3 className="TaskCard-title"> Разработка веб сайта</h3>
            <h4 className="TaskCard-subtitle">Бюджет: 1,000000 Сум </h4>
            <div className="line">
            </div>
            <br />
            <div className="offers">
                <h4 className="detail">Dетали</h4>
                <h4 className="predlojeniya">Предложения</h4>
            </div>
            <div className="border">
                <div className="profilinfo">
                    <div className="pr-photo">
                        <ProfPhoto />
                    </div>
                    <div className="ratingfrilansers">
                        <h5 className="name">John Doe</h5>
                        <h6 className="name2">@John Travolta</h6>
                        <img className="star" src={star} alt="" />
                        <span className="starnumber">5.0 (5 отзывов)</span>
                    </div>
                </div>
                <div className="contract">
                    <h4 className="money">Сумма: 100.000 Сум время | Время: 2 дня</h4>
                    <h3 className="skills">Навыки: React,Laravel,Javascript <br /> <br /> Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской печать и издательской индустрии для предварительного просмотра макета и визуальных макетах. индустрии для</h3>
                    <div className="offers2">
                        <h4 className="detail2">Выбрать исполнителем</h4>
                        <h4 className="detail3">Отправить сообщение</h4>
                        <h4 className="detail4">Отказать</h4>
                    </div>
                </div>
            </div>
            <div className="border">
                <div className="profilinfo">
                    <div className="pr-photo">
                        <ProfPhoto />
                    </div>
                    <div className="ratingfrilansers">
                        <h5 className="name">John Doe</h5>
                        <h6 className="name2">@John Travolta</h6>
                        <div className="rating">
                            <img className="star" src={star} alt="" />
                            <span className="starnumber">5.0 (5 отзывов)</span>
                        </div>
                    </div>
                </div>
                <div className="contract">
                    <h4 className="money">Сумма: 100.000 Сум время | Время: 2 дня</h4>
                    <h3 className="skills">Навыки: React,Laravel,Javascript <br /> <br /> Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской печать и издательской индустрии для предварительного просмотра макета и визуальных макетах. индустрии для</h3>
                    <div className="offers2">
                        <h4 className="detail2">Выбрать исполнителем</h4>
                        <h4 className="detail3">Отправить сообщение</h4>
                        <h4 className="detail4">Отказать</h4>
                    </div>
                </div>
            </div>
            <div className="border">
                <div className="profilinfo">
                    <div className="pr-photo">
                        <ProfPhoto />
                    </div>
                    <div className="ratingfrilansers">
                        <h5 className="name">John Doe</h5>
                        <h6 className="name2">@John Travolta</h6>
                        <div className="rating">
                            <img className="star" src={star} alt="" />
                            <span className="starnumber">5.0 (5 отзывов)</span>
                        </div>
                    </div>
                </div>
                <div className="contract">
                    <h4 className="money">Сумма: 100.000 Сум время | Время: 2 дня</h4>
                    <h3 className="skills">Навыки: React,Laravel,Javascript <br /> <br /> Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской печать и издательской индустрии для предварительного просмотра макета и визуальных макетах. индустрии для</h3>
                    <div className="offers2">
                        <h4 className="detail2">Выбрать исполнителем</h4>
                        <h4 className="detail3">Отправить сообщение</h4>
                        <h4 className="detail4">Отказать</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TaskCard;
