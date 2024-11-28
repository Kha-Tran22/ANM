
import { v4 as uuidv4 } from 'uuid';
import loginRegisterService from '../service/loginRegisterService';
import { createJWT } from '../middleware/JWTAction';
import 'dotenv/config';


const getLoginPage = (req, res) => {

    const serviceURL = req.query.serviceURL; 
    return res.render("login.ejs", {
        redirectURL: serviceURL
    })
}

const verifySSOToken = async (req, res) => {
    try {
    //return jwt, refresh token
    const ssoToken = req.body.ssoToken;

    //check ssoToken
    if (req.user && req.user.code && req.user.code === ssoToken){
        const refreshToken= uuidv4();

        //update user
        await loginRegisterService.updateUserRefreshToken(req.user.email, refreshToken);

        //create access token
        let payload = { 
            email: req.user.email,
            groupWithRoles: req.user.groupWithRoles,
            username: req.user.username,
        }

        let token = createJWT(payload);

        // set cookies
        res.cookie('access_token', token, {
            maxAge: 15 * 60 * 1000,    // 15 minute
            httpOnly: true, // Chi sever co the doc duoc
            domain: process.env.COOKIE_DOMAIN,
            path: "/"
        })

        res.cookie('refresh_token', refreshToken, {
            maxAge: 60 * 60 * 1000,    // 60 minute
            httpOnly: true, // Chi sever co the doc duoc
            domain: process.env.COOKIE_DOMAIN,
            path: "/"
        })

        const resData = {
            access_token: token,
            refresh_token: refreshToken,
            email: req.user.email,
            groupWithRoles: req.user.groupWithRoles,
            username: req.user.username,
        }
        //destroy session 
        req.session.destroy(function (err) {
            req.logout();
        });

        return res.status(200).json({
            EM: 'ok',
            EC: 0,
            DT: resData
        })
    } else {
        return res.status(401).json({
            EM: 'not match ssotoken',
            EC: 1,
            DT: ''
        })
    }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            EM: 'something wrong in the server...',
            EC: -1,
            DT: ''
        })
    }
    
}

module.exports = {getLoginPage, verifySSOToken};