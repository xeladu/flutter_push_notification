const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

const messaging = admin.messaging();

exports.notifySubscribers = functions.https.onCall(async (data, _) => {
    try {
        await messaging.sendToDevice(data.targetDevices, {
            notification: {
                title: data.messageTitle,
                body: data.messageBody
            },
            data: {
                key1: value1,
                key2: {
                    innerKey1: innerValue1,
                    innerKey2: innerValue2
                }
            }
        });

        return true;
    } catch (ex) {
        return false;
    }
});
