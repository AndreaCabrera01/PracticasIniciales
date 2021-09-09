import React from 'react';
import './login.css'; 

function login() {
    return (
     <div className = "principal" align="center">
      <form class="form-signin">
     <center> <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
         <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
    </svg></center>
    <br></br>
        <h1 class="h3 mb-3 font-weight-normal">Iniciar Sesión</h1>
        <label for="inputUser" class="sr-only">Carnet</label>
        <input type="text" id="inputUser" class="form-control" placeholder="Carnet" required autofocus></input>
        <br></br>
        <label for="inputPassword" class="sr-only">Contraseña</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Contraseña" required></input>
        <br></br>
        <br></br>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Ingresar</button>
       
      </form>
      <br></br>
      <button class="btn btn-lg btn-sec btn-block" type="submit">Registrarse</button>
      <br></br>
      <p class="mt-5 mb-3 text-muted"> Andrea María Cabrera Rosito - 202010918</p>
      </div>
    );
  }
  

  export default login;