import express from "express";
import homeController from '../controller/homeController';
import apiController from '../controller/apiController';
import loginController from '../controller/loginController'
import passport from 'passport';
import checkUser from '../middleware/checkUser';
import passController from '../controller/passportController';

const router = express.Router();

/**
 * 
 * @param {*} app : express app
 */

const initWebRoutes = (app) => {
    //path, handler
    router.get("/", checkUser.isLogin, homeController.handleHelloWord);
    router.get("/user", homeController.handleUserPage);
    router.post("/users/create-user", homeController.handleCreateNewUser);
    router.post("/delete-user/:id", homeController.handleDelteUser)
    router.get("/update-user/:id", homeController.getUpdateUserPage);
    router.post("/user/update-user", homeController.handleUpdateUser);

    //rest api
    //GET - R, POST- C, PUT - U, DELETE - D
    router.get("/api/test-api", apiController.testApi);

    router.get("/login", checkUser.isLogin, loginController.getLoginPage);

    router.post('/login', function(req, res, next) {
        passport.authenticate('local', function(error, user, info) {
            if(error) {
                return res.status(500).json(error);
            }
            if(!user) {
                return res.status(401).json(info.message);
            }

            req.login(user, function(err) {
                if(err) return next(err);
                return res.status(200).json({...user, redirectURL: req.body.serviceURL});
            });
            
        })(req, res, next);
    }); 

    router.post("/logout", passController.handleLogout);

    router.post('/verify-token', loginController.verifySSOToken);

    router.get('/change-password', loginController.getResetPassword);

    router.post('/send-otp', loginController.sendOTP);
    router.post('/change-password', loginController.changePassword);

    router.post('/home', loginController.goHome);

    router.post('/introduction', loginController.goIntroduction);

    router.post('/source', loginController.goSource);

    // router.get("/signup", loginController.getSignupPage);
    
    return app.use("/", router);
}

export default initWebRoutes;