const mongoose = require('mongoose');

module.exports = mongoose => {
    const CampaignUpdate = mongoose.model(
        "update",
        mongoose.Schema(
            {
                author: { type: mongoose.Schema.ObjectId, ref: "profile" },
                campaign: { type: mongoose.Schema.ObjectId, ref: "campaign" },
                text: String,
                //media?
            },
            { timestamps: true }
        )
    );

    return CampaignUpdate;
}