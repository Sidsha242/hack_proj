const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');   //to keep user logind after refresh as express is statless


require('dotenv').config();


const app = express();

const bcrypt = require('bcrypt');
const saltRounds = 10;

const jwt = require('jsonwebtoken')  //instance of pacakge...every single api request has the webtoken 



app.use(express.json())
app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
        credentials: true
    })
);

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({

    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24,   //24 hours 
    },
})
);


const db = mysql.createConnection({

    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,

});



app.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;   //receiving value from back


    bcrypt.hash(password, saltRounds, (err, hash) => {

        if (err) {
            console.log(err);
        }
        db.query(
            "INSERT INTO login_system_users (username, password) VALUES (?,?)",
            [username, hash],
            (err, result) => {
                if (!err) {
                    res.send("SignUp successful");
                }
                else if (err.code === 'ER_DUP_ENTRY') {
                    res.send("Username already taken");
                    // console.log(err);
                }
            }
        );
    });
})


app.get("/login", (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user })
    }
    else {
        res.send({ loggedIn: false })
    }
})


app.get("/role", (req, res) => {
    res.send({ user: req.session.user });
})



app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;   //receiving value from back

    db.query(
        "SELECT * FROM login_system_users WHERE username = ?;",
        username,
        (err, result) => {
            if (err) {
                res.send({ err: err });
                console.log("error");
            }
            if (result.length > 0) {
                bcrypt.compare(password, result[0].password, (error, response) => {   //result returns array
                    if (response) {
                        const id = result[0].id
                        const token = jwt.sign({ id }, process.env.SECRET, {
                            expiresIn: 300,
                        })
                        req.session.user = result;
                        // const isAdmin = 0;

                        res.json({ auth: true, token: token, result: result, message: "Login Successful" });   //user is autheraized therefore creaying token
                    }
                    else {
                        res.json({ auth: false, message: "wrong username/password combination" });
                    }
                })
                console.log("found");
            }
            else {
                res.json({ auth: false, message: "no user exists" });
            }
        }
    );

});



const verifyJWT = (req, res, next) => {
    const token = req.headers["x-access-token"]

    if (!token) {
        res.send("No token");
    }
    else {
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (err) {
                res.json({ auth: false, message: "Failed to auth" })
            }
            else {
                req.userId = decoded.id;
                next();
            }
        })
    }
}


app.get('/isUserAuth', verifyJWT, (req, res) => {    //verifyJWT is a middleware which checks if the user is authenticated or not ...we will apply this middle ware to every request

    res.send("User Authenticated");
    console.log(req.body.username);

})



app.listen(3001, () => {
    console.log("server running");
});