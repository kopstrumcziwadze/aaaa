const mongoose = require('mongoose');

module.exports = mongoose => {
    const CampaignStory = mongoose.model(
        "story",
        mongoose.Schema(
            {
                author: { type: mongoose.Schema.ObjectId, ref: "profile" },
                campaign: { type: mongoose.Schema.ObjectId, ref: "campaign" },
                description: String,
                //media?
                milestones: [
                    { amount: Number, description: String }
                ]
            },
            { timestamps: true }
        )
    );

    return CampaignStory;
}