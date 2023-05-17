const Notification = require('../Model/notification');

exports.notification = async (req, res, next) => {
    try{
        const message = `${req.body.username} has started following you`;
        const recipient = `${req.body.id}`;
        const notification = new Notification({message, recipient});
        const savedNotification = await notification.save();
        console.log(savedNotification);
    }
    catch(error){
        console.log(error);
        res.status(500).json({ msg: "Internal server Error" });
        return;
    }
};