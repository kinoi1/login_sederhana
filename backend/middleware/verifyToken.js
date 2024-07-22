import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if(token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decode) => {
        if(err) return res.sendStatus(403);
        res.email = decode.email;
        next();
    })
    // if (authHeader) {
    //     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    //         if (err) return res.sendStatus(403);
    //         req.user = user;
    //         next();
    //     });
    // } else {
    //     res.sendStatus(401);
    // }
}