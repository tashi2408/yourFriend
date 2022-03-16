

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




// @desc    Get All users
// @route   GET /api/users
// @access  Private
const getAllTherapist = asyncHandler(async (req, res) => {

    const users = await Therapist.find();
    res.status(200).json(users);


});




module.exports = {
    registerUser,

    getAllTherapist,

};
