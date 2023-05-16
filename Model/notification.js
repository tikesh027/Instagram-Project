const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotificationSchema = new Schema({
    user: {
        type: mongoose.Types.ObjectId,
        require: true
    },
    recipient: {
        type: ObjectId,
        require: true
    },
    url: {
        type: String,
        require: true
    },
    text: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    isRead: {
        type: Boolean,
        require: true
    }
});

const Notification = mongoose.model('Notification', NotificationSchema);
module.exports = Notification;