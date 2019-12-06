import React from 'react';
import '../styles/styles.css';

function SignUpVer() {
  return (
    <div className="container">
    <div className="wrapper">
    <form className="form-signin">       
      <p className="form-signin-heading">Мы отправили вам письмо с кодом. Пожалуйста, проверьте вашу почту.</p>
      <div className="row">
      <div className="col-md-6">
      <input type="text" className="form-control" name="text" required autofocus />
      </div>
      <div className="col-md-6">
      <input type="text" className="form-control" name="text" required autofocus />
      </div>
      </div>  
      <br />
      <button className="btn btn-success btn-block" type="submit">Отправить</button>
      <br />  
      <p className="align-center">
        <a className="auth-urls" href="#">Отправить письмо обратно</a>
      </p>
    </form>
    </div>
    </div>
  );
}

export default SignUpVer;
