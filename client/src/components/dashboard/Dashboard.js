import React,{Fragment,useEffect} from 'react'
import {Link} from "react-router-dom"
import PropTypes from 'prop-types'
import {connect} from "react-redux"
import {deleteAccount, getCurrentProfile} from "../../actions/profile"
import Spinner from "../layout/Spinner";
import DashboardActions from "./Dashboardactions";
import Education from "./Education"
import Experience from "./Experience"
const Dashboard = ({getCurrentProfile,deleteAccount,auth:{user},profile:{profile,loading}}) => {
   useEffect(()=>{
       getCurrentProfile();
   },[getCurrentProfile]);
    
    return loading && profile == null ? <Spinner /> : <Fragment>
    <h1 className="large text-primary">Dashboard</h1>
    <p className="lead">
       
    </p>
    {profile!==null ? <Fragment>
        <DashboardActions/>
        <Experience experience={profile.experience}/>
        <Education education={profile.education}/>
        <div className="my-2">
            <button className="btn btn-danger" onClick={()=>deleteAccount()}>
                <i className="fas fa-user-minus"></i> Delete My Account
            </button>
        </div>

    </Fragment> : <Fragment>You have not yet setup your profile ,please add some information <br></br>
    <Link to ="/create-profile" className="btn btn-primary my-1">
Create Profile
    </Link>
    </Fragment>}
    </Fragment>
};


Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps=state =>({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps,{getCurrentProfile, deleteAccount})(Dashboard)
