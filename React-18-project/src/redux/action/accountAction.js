
import axios from "../../customize/axios";


export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_FAILED = "USER_LOGIN_FAILED";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";

export const USER_LOGOUT_REQUEST = "USER_LOGOUT_REQUEST";
export const USER_LOGOUT_FAILED = "USER_LOGOUT_FAILED";
export const USER_LOGOUT_SUCCESS = "USER_LOGOUT_SUCCESS";



const handleApiRequest = async (url, method, data = {}) => {
    try {
        const res = await axios({ url, method, data });
        if (res && +res.EC === 0) return res.DT;
        throw new Error(res.EM || "Unexpected error");
    } catch (error) {
        console.error("API error:", error);
        throw error;
    }
};

export const doLogin = (ssoToken) => async (dispatch) => {
    dispatch({ type: USER_LOGIN_REQUEST });
    try {
        const user = await handleApiRequest(
            process.env.REACT_APP_BACKEND_SSO_VERIFY_TOKEN,
            "POST",
            { ssoToken }
        );
        dispatch({ type: USER_LOGIN_SUCCESS, user });
    } catch (error) {
        dispatch({ type: USER_LOGIN_FAILED, error: error.message });
    }
};

export const doGetAccount = () => async (dispatch) => {
    dispatch({ type: USER_LOGIN_REQUEST });
    try {
        const user = await handleApiRequest(
            process.env.REACT_APP_BACKEND_SSO_GET_ACCOUNT,
            "GET"
        );
        dispatch({ type: USER_LOGIN_SUCCESS, user });
    } catch (error) {
        dispatch({ type: USER_LOGIN_FAILED, error: error.message });
    }
};

export const doLogout = () => async (dispatch) => {
    dispatch({ type: USER_LOGOUT_REQUEST });
    try {
        await handleApiRequest(
            process.env.REACT_APP_BACKEND_SSO_LOGOUT,
            "POST"
        );
        dispatch({ type: USER_LOGOUT_SUCCESS });
        localStorage.removeItem("ssoToken"); // Clear token if stored
        window.location.href = "/";
    } catch (error) {
        dispatch({ type: USER_LOGOUT_FAILED, error: error.message });
    }
};

// export const doLogin = (ssoToken) => {
//     return async (dispatch, getState) => {
//         dispatch({type: USER_LOGIN_REQUEST})
//         axios.post(process.env.REACT_APP_BACKEND_SSO_VERIFY_TOKEN, { ssoToken }, /*{withCredentials: true}*/ ).then(res => {
//             if (res && +res.EC === 0){
//                 //success
//                 // navigate('/');
//                 dispatch({type: USER_LOGIN_SUCCESS, user: res.DT});
//             } else {
//                 //failed
//                 // setMessage(res.EM)
//                 dispatch({type: USER_LOGIN_FAILED, error: res.EM})
//             }
//         }).catch(err => {
//             dispatch({type: USER_LOGIN_FAILED, error: "something wrong."})
//             console.log(">>> error: ", err);
//         }) 
//     }
// }


// export const doGetAccount = () => {
//     return async (dispatch, getState) => {
//         dispatch({type: USER_LOGIN_REQUEST})
//         axios.get(process.env.REACT_APP_BACKEND_SSO_GET_ACCOUNT, /*{withCredentials: true}*/ ).then(res => {
//             if (res && +res.EC === 0){
//                 //success
//                 // navigate('/');
//                 dispatch({type: USER_LOGIN_SUCCESS, user: res.DT})
                
//             } else {
//                 //failed
//                 // setMessage(res.EM)
//                 dispatch({type: USER_LOGIN_FAILED, error: res.EM})
//             }
//         }).catch(err => {
//             dispatch({type: USER_LOGIN_FAILED, error: "something wrong."})
//             console.log(">>> error: ", err);
//         }) 
//     }
// }

// export const doLogout = (ssoTken) => {
//     return async (dispatch, getState) => {
//         dispatch({type: USER_LOGOUT_REQUEST})               // abc truyen cho du tham so (khong dung)
//         axios.post(process.env.REACT_APP_BACKEND_SSO_LOGOUT,{abc: "abc"}, /*{withCredentials: true}*/ ).then(res => {
//             if (res && +res.EC === 0){
//                 //success
//                 // navigate('/');
//                 dispatch({type: USER_LOGOUT_SUCCESS, user: res.DT})
//                 window.location.href = '/';
//             } else {
//                 //failed
//                 // setMessage(res.EM)
//                 dispatch({type: USER_LOGOUT_FAILED })
//             }
//         }).catch(err => {
//             dispatch({type: USER_LOGOUT_FAILED, error: "something wrong."})
//             console.log(">>> error: ", err);
//         }) 
//     }
// }