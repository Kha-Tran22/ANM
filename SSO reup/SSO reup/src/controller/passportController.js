import passport from 'passport';
import LocalStrategy from 'passport-local';
import loginRegisterService from '../service/loginRegisterService'

const configPassport = () => {
    passport.use(new LocalStrategy(async function verify(username, password, cb) {
        const rawData = {
            valueLogin: username,
            password: password
        }

        let res = await loginRegisterService.handleUserLogin(rawData);
        if (res && +res.EC === 0) {
            return cb(null, res.DT);
        } else {
            return cb(null, false, { message: res.EM });
        }

        console.log(">>> Check username: ", username, "password: ", password)
        // db.get('SELECT * FROM users WHERE username = ?', [ username ], function(err, row) {
        //   if (err) { return cb(err); }
        //   if (!row) { return cb(null, false, { message: 'Incorrect username or password.' }); }

        //   crypto.pbkdf2(password, row.salt, 310000, 32, 'sha256', function(err, hashedPassword) {
        //     if (err) { return cb(err); }
        //     if (!crypto.timingSafeEqual(row.hashed_password, hashedPassword)) {
        //       return cb(null, false, { message: 'Incorrect username or password.' });
        //     }
        //     return cb(null, row);
        //   });
        // });
    }));
}

const handleLogout = (req, res, next) => {
    req.session.destroy(function (err) {
        req.logout();
        res.redirect('/');
    });
}

module.exports = { configPassport, handleLogout }