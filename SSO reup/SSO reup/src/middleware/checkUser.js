



const isLogin = (req, res, next) => {
    // console.log("check pathnreq.pathname", req.path)
    if (req.isAuthenticated()) {
        if (req.path === '/login') {
            res.redirect("/");
        }
        next();
    } else {
        if (req.path === '/login') {
            next();
        } else
            res.redirect("/login")
    }
}


module.exports = { isLogin }