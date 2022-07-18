//registration
const db = require("../database/db");
exports.userRegistration = (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const centre = req.body.centre;
    const password = req.body.password;

    db.query(
        "INSERT INTO registration(username,email,centre,password) VALUES(?,?,?,?)", [username, email, centre, password],
        (err, result) => {
            console.log(err);
            res.send(result);
        }
    );
};

//login
exports.userLogin = (req, res) => {
    db.query(
        "SELECT * from registration WHERE email = ? and password = ?", [req.body.email, req.body.password],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                {
                    console.log("Done");
                    res.send(result);
                }
            }
        }
    );
};

// userUpdateProfile
exports.userUpdateDetails = (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const centre = req.body.centre;
    const course = req.body.course;
    const contact = req.body.contact;
    const linkedin = req.body.linkedin;
    const address = req.body.address;
    const state = req.body.state;
    const occupation = req.body.occupation;
    const currentwork = req.bosy.currentwork;
    const courseyear = req.body.courseyear;
    const pic = req.body.pic;
    db.query(
        "INSERT INTO alumniupdate(firstname, lastname, centre, course, contact, linkedin, address, state, occupation, currentwork, courseyear, pic) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)" [
            (firstname,
                lastname,
                centre,
                course,
                contact,
                linkedin,
                address,
                state,
                occupation,
                currentwork,
                courseyear,
                pic)
        ],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
};