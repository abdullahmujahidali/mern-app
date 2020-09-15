import axios from "axios";
import { setAlert } from "./alert";
import {
    GET_PROFILE,
    PROFILE_ERROR,
    UPDATE_PROFILE,
    ACCOUNT_DELETED,
    CLEAR_PROFILE,
    GET_PROFILES,
    GET_REPOS
} from "./types";

//get current user profile

export const getCurrentProfile = () => async dispatch => {
    try {
        const res = await axios.get("/api/profile/me")
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        });
    }
}
//get all profiles

export const getProfiles = () => async dispatch => {
    dispatch({type:CLEAR_PROFILE});
    try {
        const res = await axios.get("/api/profile")
        dispatch({
            type: GET_PROFILES,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        });
    }
}

//get profile by id

export const getProfileById= userId => async dispatch => {
    try {
        const res = await axios.get(`/api/profile/user/${userId}`)
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        });
    }
}

//get github repos

export const getGithubRepos = username => async dispatch => {
    try {
        const res = await axios.get(`/api/profile/github/${username}`);
        dispatch({
            type: GET_REPOS,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        });
    }
}


//create or update profile

export const createProfile = (FormData, history, edit = false) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const res = await axios.post("/api/profile", FormData, config);
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
        dispatch(setAlert(edit ? "Profile Updated" :  "Profile Created","success"))
        if (!edit) {
            history.push("/dashboard");
        }

    } catch (error) {
        const errors = error.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
        }
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        });
    }
}

//add experience

export const addExperience=(FormData,history) => async dispatch =>{
    try {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const res = await axios.put("/api/profile/experience", FormData, config);
        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        });
        dispatch(setAlert("Experience Added","success"))
        
            history.push("/dashboard");
        
    } catch (error) {
        const errors = error.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
        }
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        });
    }
}

//add education

export const addEducation=(FormData,history)=> async dispatch =>{
    try {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const res = await axios.put("/api/profile/education", FormData, config);
        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        });
        dispatch(setAlert("Education Added","success"))
        
            history.push("/dashboard");
        
    } catch (error) {
        const errors = error.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
        }
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        });
    }
}

//delete experience

export const deleteExperience=id=>async dispatch =>{
    try {
        const res = await axios.delete(`/profile/experience/${id}`);
        dispatch({
            type:UPDATE_PROFILE,
            payload:res.data
        });
        dispatch(setAlert("Experience Removed","success"))
   
    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        });
    }
}
//delete education
export const deleteEducation=id=>async dispatch =>{
    try {
        const res = await axios.delete(`/profile/education/${id}`);
        dispatch({
            type:UPDATE_PROFILE,
            payload:res.data
        });
        dispatch(setAlert("Education Removed","success"))
   
    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        });
    }
}

//delete account and profile
export const deleteAccount=()=>async dispatch =>{
    if(window.confirm("Are you sure? This can't be undone!")){
        try {
             await axios.delete("/api/profile")
            dispatch({
                type:CLEAR_PROFILE
            });
            dispatch({
                type:ACCOUNT_DELETED
            });
            dispatch(setAlert("Your account has been deleted"))
       
        } catch (error) {
            dispatch({
                type: PROFILE_ERROR,
                payload: { msg: error.response.statusText, status: error.response.status }
            });

        }
    
    }
   }