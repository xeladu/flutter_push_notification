const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

const messaging = admin.messaging();

exports.notifySubscribers = functions.https.onCall(async (data, _) => {

    try {
        const multiCastMessage = {
            notification: {
                title: data.messageTitle,
                body: data.messageBody
            },
            tokens: data.targetDevices
        }

        await messaging.sendMulticast(multiCastMessage);

        return true;

    } catch (ex) {
        return ex;
    }
});
