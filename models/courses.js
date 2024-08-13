const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
        adminName: {
            type: String,
            required: true
        },
        adminEmail: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true
        },
        classCode: {
            type: Number,
            required: true
        }, 
        className: {
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
        },
        members: [String]
    },
    {
        timestamps: true,
        usePushEach: true
    }
)

module.exports = mongoose.model('Courses', courseSchema);