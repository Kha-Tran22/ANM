
import session from "express-session"
import Sequelize from "sequelize";
import passport from "passport";



const configSession = (app) => {
    // initalize sequelize with session store
    const SequelizeStore = require("connect-session-sequelize")(session.Store);

    // create database, ensure 'sqlite3' in your package.json
    const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        logging: false,
        define: {
            freezeTableName: true
        },
        timezone: '+07:00',
    });

    // configure express

    var myStore = new SequelizeStore({
        db: sequelize,
    });
    app.use(
        session({
            secret: "keyboard cat",
            store: myStore,
            resave: false, // we support the touch methodexpiration: 24 * 60 * 60 * 1000 so per the express-session docs this should be set to false
            proxy: true, // if you do SSL outside of node.
            saveUninitialized: false,
            expiration: 300 * 1000,
            cookie: { expires: 300 * 1000 }
        })
    );
    // continue as normal
    myStore.sync();

    app.use(passport.authenticate('session'));

    //mã hoá: chuyển định dạng format
    passport.serializeUser(function (user, cb) {
        console.log(">>> check before: ", user)
        process.nextTick(function () {
            cb(null, user);
        });
    });

    //giải mã: đọc thông tin format
    passport.deserializeUser(function (user, cb) {
        process.nextTick(function () {
            return cb(null, user);
        });
    });
}

export default configSession; 