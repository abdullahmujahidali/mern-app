import React from "react";

const Register = () =>{
 return(
    <div class="profile-grid my-1">
    <div class="profile-top bg-primary p-2">
          <img
            class="round-img my-1"
            src="//www.gravatar.com/avatar/a31yrKHuMszGZLqEbwv52pXCw5fwvfJDZt7?s=200&r=pg&d=mm"
            alt=""
          />
          <h1 class="large">Abdullah Mujahid Ali</h1>
          <p class="lead">Developer at deSwot</p>
          <p>Lahore, PK</p>
          <div class="icons my-1">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i class="fas fa-globe fa-2x"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-twitter fa-2x"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-facebook fa-2x"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-linkedin fa-2x"></i>
            </a>
             <a href="#" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-youtube fa-2x"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-instagram fa-2x"></i>
            </a>
          </div>
        </div>
    </div>
 )
}

export default Register;