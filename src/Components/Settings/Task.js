import React from 'react';
import './Task.css';

const Task = () => {
    return (
        <div className="TaskView-setting">
            <div className="task-form">
                <h3 className="Task-title">Напишите заголок вашего задания</h3>

                <input className="vashezadaniya"
                    type="text"
                    placeholder=" Создать веб сайт..."
                />
            </div>
            <div className="form">
                <h4 className="TaskView-subtitle2">Опишите ваше задание</h4>
                <div className="taskописание">
                    <span>напишите техническое задание вашего проекта</span>
                    <textarea className="task-text" placeholder="Опишите ваш проект..." >
                    </textarea>

                </div>
            </div>
            <h4 className="taskОтправить">Файлы</h4>
            <div className="dashed">
                <div className="faylinfo">
                    <div className={"addfayl"}>
                        <button type="button">Добавить файлы</button>
                    </div>
                    <h3 className="textfayl">Преташите файл для загрузки.Можеть быть полезно для описание задание</h3>
                </div>
            </div>
            <div className="skill">
                <h4 className="taskОтправить">Cкиллы</h4>
                <select className="skillinfo" name="month">
                    <option className="ability">Backend development : php</option>
                </select>
            </div>

            <h4 className="taskОтправить">Бюджет</h4>
            <div className="usd">
                <select className="USD" name="usd">
                    <option className="ability">USD</option>
                </select>
                <input className="quantity"
                    type="text"
                    placeholder="100"
                />
            </div>

            <h4 className="taskОтправить">Время</h4>
            <div className="время">
                <div className="data">
                    <h4 className="months">3 месяца</h4>
                    <h4 className="days">5 дней</h4>
                    <h4 className="hours">10 часов</h4>
                    <h4 className="minutes">10 минут</h4>
                </div>
            </div>
            <div className="timeline">
            </div>
            <div className="dateline">
                <h4>
                    0
            </h4>
                <h3>
                    3 месяца
            </h3>
                <h5>
                    6 месяцев
            </h5>
            </div>
            <div className="главнойопубликовать">
                <h4 className="опубликовать">Опубликовать проект</h4>
            </div>
        </div>
    );
};
export default Task;
