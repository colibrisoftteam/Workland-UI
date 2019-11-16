import React from 'react';
import '../styles/styles.css';

function SignUp() {
  return (
    <div className="container">
    <div className="wrapper">
    <form className="form-signin">       
      <h2 className="form-signin-heading">Регистрация</h2>
      <input type="text" className="form-control" name="email" placeholder="Email Address" required autofocus />
        <br />
      <button className="btn btn-success btn-block" type="submit">Отправить</button>
      <br />  
      <p className="align-center">Уже зарегистрированы? <a href="#">Войти</a></p> 
    </form>
    </div>
    </div>
  );
}

export default SignUp;
