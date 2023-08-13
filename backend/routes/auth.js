const express = require('express')
const User = require('../models/User')
const router = express.Router()
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const fetchuser = require('../middleware/fetchUser')


const JWT_SECRET = "ekuri53j";

// Route 1: Create a User using: POST "/api/auth/createUser". NO login required SIGN UP
router.post('/createUser', [
    body('name', 'Enter a valid name').isLength({ min: 2 }),
    body('gender', 'please select your gender'),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 8 characters').isLength({ min: 8 }),
    body('occupation', 'What do you do?').isLength({ min: 2 }),
], async (req, res) => {
    let success = false
    // If there are errors return Bad req and the errors
    const errors = validationResult(req);

    // Checking if user is empty or not
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }

    // Check weather the user with the same email exists already
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: 'sorry the user with this email already exist' })
        }

        //hashing password
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        user = await User.create({
            name: req.body.name,
            gender: req.body.gender,
            password: secPass,
            email: req.body.email,
            occupation: req.body.occupation
        });

        const data = {
            user: {
                id: user.id
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET);
        success = true
        res.json({ success, authToken })

    } catch (err) {
        console.log(err.message)
        res.status(500).send('Internal Server Error')
    }
})


// Route 2: login a User using: POST "/api/auth/login". Doesn't require Login
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists()
], async (req, res) => {
    let success = false
    // Checking if user is empty or not
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            success = false
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            success = false
            return res.status(400).json({ success, error: "Please try to login with correct credentials" });
        }

        const data = {
            user: {
                id: user.id
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET);

        success = true

        res.json({ success, authToken })

    } catch (err) {
        console.log(err.message)
        res.status(500).send('Internal Server Error')
    }
})

// Route 3: Get logged in user details using post. LOGIN REQUIRED

router.post('/getuser',fetchuser, async (req, res) => {

    try {
        const userID = req.user.id
        const user = await User.findById(userID).select("-password")
        res.send(user)

    } catch (err) {
        console.log(err.message)
        res.status(500).send('Internal Server Error')
    }
})


module.exports = router