const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ForumSchema = new Schema({
        creatorName: {
            type: String,
            required: true
        },
        creatorEmail: {
            type: String,
            required: true
        },
        desc: {
            type: String
        },
        imgLink: {
            type: String
        }
    },
    {
        timestamps: true,
        usePushEach: true
    }
)

module.exports = mongoose.model('Forum', ForumSchema);