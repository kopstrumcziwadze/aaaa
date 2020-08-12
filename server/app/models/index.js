const dbConfig = require("../../config/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.campaign = require("./campaign.model")(mongoose);
db.comment = require("./comment.model")(mongoose);
db.faq = require("./faq.model")(mongoose);
db.pledge = require("./pledge.model")(mongoose);
db.profile = require("./profile.model")(mongoose);
db.story = require("./story.model")(mongoose);
db.update = require("./update.model")(mongoose);

module.exports = db;