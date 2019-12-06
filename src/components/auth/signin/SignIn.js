import React from 'react';
import '../styles/styles.css';

function SignIn() {
  return (
    <div className="container">
    <div className="wrapper">
    <form className="form-signin">       
      <h2 className="form-signin-heading">Войти</h2>
      <input type="text" className="form-control" name="username" placeholder="Почта или никнейм" required autofocus />
        <br />
       <input type="text" className="form-control" name="password" placeholder="Пароль" required autofocus />
       <br />
       <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
        <label className="form-check-label" for="defaultCheck1">
            Запомнить меня
        </label>
        </div>
        <br />
      <button className="btn btn-success btn-block" type="submit">Войти</button>
      <br />  
      <p className="align-center"><a className="auth-urls" href="#">Восстановить пароль</a></p>
      <p className="align-center">Нет учётной записи? <a className="auth-urls" href="#">Зарегистрируйтесь</a></p>
    </form>
    </div>
    </div>
  );
}

export default SignIn;
