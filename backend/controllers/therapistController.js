const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const Therapist = require('../models/therapistModel');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID);

// @desc    Register new user
// @route   POST /api/therapist/google
// @access  Public
const googleLogin = asyncHandler(async (req, res) => {
    const { token } = req.body;
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID,
    });
    console.log(ticket.getPayload());
    const { name, email, picture, jti } = ticket.getPayload();

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(jti, salt);

    // Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        picture,
    });

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, picture, nextAvailableDate, profession, rating } = req.body;

    if (!name || !email) {
        res.status(400);
        throw new Error('Please add all fields');
    }

    // Check if user exists
    //const userExists = await User.findOne({ email });

    // if (userExists) {
    //     res.status(400);
    //     throw new Error('User already exists');
    // }



    // Create user
    const therapist = await Therapist.create(
        req.body

    );


    res.status(201).json(therapist

    );

});

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Check for user email
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });
    } else {
        res.status(401);
        throw new Error('Invalid credentials');
    }
});

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
    const therapist = await Therapist.findById(req.params.id);
    res.status(200).json(therapist);
});

// @desc    Get All users
// @route   GET /api/users
// @access  Private
const getAllTherapist = asyncHandler(async (req, res) => {

    const users = await Therapist.find();
    res.status(200).json(users);


});

// @desc    UPDATE user data
// @route   PUT /api/users/:id
// @access  Private
const updateUser = asyncHandler(async (req, res) => {
    if (req.body.password) {
        // Hash password
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    const user = await User.findById(req.params.id);
    if (!user) {
        res.status(400);
        throw new Error('User not found');
    }
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(200).json(updatedUser);
});

// @desc    UPDATE user data
// @route   PUT /api/users/:id
// @access  Private
const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        res.status(400);
        throw new Error('User not found');
    }
    await user.remove();
    res.status(200).json({ message: 'User deleted' });
});

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

module.exports = {
    registerUser,
    loginUser,
    getMe,
    googleLogin,
    getAllTherapist,
    updateUser,
    deleteUser,
};
