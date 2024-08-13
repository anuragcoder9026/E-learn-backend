const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const browseSchema = new Schema({
        Name: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true
        },
        fieldName: {
            type: String,
            required: true
        },
        classLevel: {
            type: String,
            required: true
        }
    }
)

module.exports = mongoose.model('Browse', browseSchema);