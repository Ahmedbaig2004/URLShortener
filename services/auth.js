
var jwt = require('jsonwebtoken');

function setUser(user) {
    const data = {
        user:user._id,
        email:user.email
    }
    return jwt.sign(data,process.env.SECRET);

}

function getUser(id) {
    if(!id) return null;
    try {
        return jwt.verify(id,process.env.SECRET);
    } catch (error) {
        return null
    }
    

}

module.exports = { setUser, getUser };
