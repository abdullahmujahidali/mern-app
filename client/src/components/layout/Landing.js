import React from 'react'
import {Link, Redirect} from "react-router-dom"
import {connect } from "react-redux";
import PropTypes from "prop-types";
export const Landing = ({isAuthenticated}) => {
    if(isAuthenticated){
      return  <Redirect to ="/dashboard"/>
    }
    return (
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="x-large">Developer Connexion</h1>
                    <p className="lead">
                        Create your profile now and share your thoughts with us 
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
Landing.propTypes={
    isAuthenticated: PropTypes.bool,

}

const mapStateToProps= state=>({
    isAuthenticated: state.auth.isAuthenticated,

})

export default connect(mapStateToProps)(Landing);
