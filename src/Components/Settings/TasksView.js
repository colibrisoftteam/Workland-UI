import React from 'react';
import './TasksView.css';
import { ProfilePhoto } from '../../assets/icons/svg';
import { Stars } from '../../assets/icons/svg';



const TasksView = () => {
    return (
        <div className="TaskView-setting">
            <h3 className="TaskView-title"> Разработка веб сайта</h3>
            <h4 className="TaskView-subtitle">Бюджет: 1,000000 Сум </h4>
            <div className="line">
            </div>
            <br />
            <div className="viewoffers">
                <h4 className="viewdetail">Dетали</h4>
                <h4 className="viewpredlojeniya">Предложения</h4>
            </div>
            <div className="viewborder">
                <div className="viewprofilinfo">
                    <div className="pr-photo">
                        <ProfilePhoto width={"56"} height={"66"} />
                    </div>
                    <div className="ratingfrilansers">
                        <h5 className="name">John Doe</h5>
                        <h6 className="name2">@John Travolta</h6>
                        <div className="rating">
                            <Stars />
                            <Stars />
                            <Stars />
                            <Stars />
                            <Stars />
                            <span className="starnumber"> 5.0 (5 отзывов)</span>
                        </div>
                    </div>
                </div>
                <div className="viewcontract">
                    <div className="viewcontract2">
                        <h4 className="money">Описание</h4>
                        <h3 className="skills">  Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской печать и издательской индустрии для предварительного просмотра макета и визуальных макетах. индустрии для</h3>
                        <h4 className="money">Навыки</h4>
                        <div className="viewcategory">
                            <h4 className="veb">Веб разработка</h4>
                            <h4 className="front">Фронт енд разработка</h4>
                        </div>
                        <h4 className="deadline">Время</h4>
                        <h3 className="skills">2 недели (осталось 2 недели)</h3>
                        <h4 className="deadline"> <br />Файлы</h4>
                        <h3 className="doctype">photo.png </h3>
                        <h3 className="doctype">word.doc </h3>
                    </div>
                </div>
            </div>
            <div className="line">
            </div>
            <div className="form">
                <h4 className="TaskView-subtitle2">Откликнуться</h4>
                <div className="описание">
                        <span>Описание</span>
                        <textarea
                            className="бордерописание">
                        </textarea>
                    <span>Срок</span>
                    <div className="viewcategory2">
                    <input
                    className="сроктехт"
                        
                        type="text"
                        
                        />
                        <select className="месяцах" name="month">
                            <option>В месяцах</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                        </select>
                    </div>
                    <span>Денги</span>
                    <div className="viewcategory3">
                        <input className="сроктехт1"
                        type="text"
                        />
                        <select className="месяцах1" name="month">
                            <option> Sum</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                        </select>
                    </div>
                </div>
            </div>
            <h4 className="Отправить">Отправить</h4>
        </div>
    );
};
export default TasksView;
