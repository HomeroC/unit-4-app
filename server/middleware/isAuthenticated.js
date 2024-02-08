require("dotenv").config();
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

module.exports = {
    //retrieve the JWT from the requests Authorization header
  isAuthenticated: (req, res, next) => {
    const headerToken = req.get("Authorization");
        
    // IF there is no headerToken, then we will console log an error and send 401 status
    if (!headerToken) {
      console.log("ERROR IN auth middleware");
      res.sendStatus(401);
    }
    
    let token;
    // We will verify the token. we will check if the headerToken and SECRET key if they match up
    try {
      token = jwt.verify(headerToken, SECRET);
    } catch (err) {
      err.statusCode = 500;
      throw err;
    }
    //IF the token verification is successful but no token is returned, then throw error
    if (!token) {
      const error = new Error("Not authenticated.");
      error.statusCode = 401;
      throw error;
    }
    // if token is verified and everything else is good, then go to the next middleware function
    next();
  },
};
