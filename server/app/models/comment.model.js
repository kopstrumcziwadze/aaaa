const mongoose = require('mongoose');

module.exports = mongoose => {
    const CampaignComment = mongoose.model(
        "comment",
        mongoose.Schema(
            {
                text: String,
                author: { type: mongoose.Schema.ObjectId, ref: "profile" },
                campaign: { type: mongoose.Schema.ObjectId, ref: "campaign" },
                repliedTo: this,
                commentType: Number, //1 = OP; 2 = reply; 3 = campaign organizators
                intendation: Number, // increase with each new reply
            },
            { timestamps: true }
        )
    );

    return CampaignComment;
}