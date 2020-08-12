const mongoose = require('mongoose');

module.exports = mongoose => {
    const CampaignMain = mongoose.model(
        "campaign",
        mongoose.Schema(
            {
                name: String,
                dateEnd: Date,
                location: { country: String, city: String },
                creator: { type: mongoose.Schema.ObjectId, ref: "profile" },
                participants: [
                    { type: mongoose.Schema.ObjectId, ref: "profile" }
                ],
                backers: [
                    { type: mongoose.Schema.ObjectId, ref: "profile" }
                ],
                goal: Number,
                currency: String,
                pledged: Number,
                category: String
            },
            { timestamps: true }
        )
    );

    return CampaignMain;
}