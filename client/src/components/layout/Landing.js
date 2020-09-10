import React from 'react'
import {Link} from "react-router-dom"
export const Landing = () => {
    return (
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="x-large">Developer Connexion</h1>
                    <p className="lead">
                        Create a developer profile/portfolio, share posts and get help from
                        other developers
          </p>
                    <div className="buttons">
                        <Link to="/register" className="btn btn-danger">Sign Up</Link>
                        <Link to="/login" className="btn btn-dark">Login</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Landing;
