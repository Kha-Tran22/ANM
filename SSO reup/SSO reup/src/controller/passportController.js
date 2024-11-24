import passport from 'passport';
import LocalStrategy from 'passport-local';
import loginRegisterService from '../service/loginRegisterService'

const configPassport = () => {

    passport.use(new LocalStrategy({
        passReqToCallBack: true
    },
        async (req, username, password, done) => {
            const rawData = {
                valueLogin: username,
                password: password
            }
    
            let res = await loginRegisterService.handleUserLogin(rawData);
    
            console.log(res.EM)
            if (res && +res.EC === 0) {
                return done(null, res.DT);
            } else {
                return done(null, false, req.flash('message:', res.EM ));
            }
        }
    ))
}

const handleLogout = (req, res, next) => {
    req.session.destroy(function (err) {
        req.logout();
        res.redirect('/');
    });
}

module.exports = { configPassport, handleLogout }