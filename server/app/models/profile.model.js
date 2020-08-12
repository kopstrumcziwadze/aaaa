const mongoose = require('mongoose');

module.exports = mongoose => {
    const UserProfile = mongoose.model(
        "profile",
        mongoose.Schema(
            {
                accountName: String
            },
            { timestamps: true }
        )
    );

    return UserProfile;
}