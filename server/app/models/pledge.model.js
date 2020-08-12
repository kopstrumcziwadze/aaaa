const mongoose = require('mongoose');

module.exports = mongoose => {
    const CampaignPledge = mongoose.model(
        "pledge",
        mongoose.Schema(
            {
                campaign: { type: mongoose.Schema.ObjectId, ref: "campaign" },
                pledgeAmount: Number,
                pledgeMinimum: Number,
                pledgeDescription: String,
                estimatedDelivery: Date,
                pledgeBackers: [
                    { type: mongoose.Schema.ObjectId, ref: "profile" }
                ]
            }
        )
    );

    return CampaignPledge;
}