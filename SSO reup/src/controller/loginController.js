const getLoginPage = (req, res) => {
    //validate, redis
    const serviceURL = req.query.serviceURL;
    console.log(">>> check serviceURL: ", serviceURL)
    return res.render("login.ejs")
}

module.exports = {getLoginPage}