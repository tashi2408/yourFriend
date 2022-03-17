const mongoose = require('mongoose');

const therapistSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add a name'],
        },
        email: {
            type: String,
            required: [true, 'Please add an email'],
            unique: true,
        },
        picture: {
            type: String,
        },
        allAvailabeSlots: {
            type: [Date]
        },
        profession: {
            type: String
        },
        rating: {
            type: Number
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Therapist', therapistSchema);
