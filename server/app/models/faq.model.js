const mongoose = require('mongoose');

module.exports = mongoose => {
    const CampaignFaq = mongoose.model(
        "faq",
        mongoose.Schema(
            {
                campaign: { type: mongoose.Schema.ObjectId, ref: "campaign" },
                question: String,
                answer: String
            }
        )
    );

    return CampaignFaq;
}