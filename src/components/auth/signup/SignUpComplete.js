import React from 'react';
import '../styles/styles.css';

function SignUpComplete() {
  return (
    <div className="container">
    <div className="wrapper">
    <form className="form-signin">       
      <h2 className="form-signin-heading">Регистрация</h2>
      <input type="text" className="form-control" name="username" placeholder="Никнейм" required autofocus />
        <br />
       <input type="text" className="form-control" name="password" placeholder="Пароль" required autofocus />
       <br />
       <input type="text" className="form-control" name="password" placeholder="Подтвердить пароль" required autofocus />
       <br />
      <button className="btn btn-success btn-block" type="submit">Присоединиться</button>
      <br />  
      <p>Регистрируясь, вы подтверждаете, что принимаете <a href="#">Условия использования</a> и <a href="#">Политику конфиденциальности</a></p> 
    </form>
    </div>
    </div>
  );
}

export default SignUpComplete;
