const functions = require("firebase-functions");
const admin = require("firebase-admin");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

admin.initializeApp();

exports.sendToDiscord = functions.database
  .ref("/lovepage_answers/{id}")
  .onCreate(async (snap) => {

    const data = snap.val();

    const hookSnap = await admin.database()
      .ref("config/discord/webhook")
      .once("value");

    if (!hookSnap.exists()) return null;

    const webhook = hookSnap.val();
    const stubborn = data.answer.includes("ดื้อ");

    await fetch(webhook, {
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body:JSON.stringify({
        username:"LovePage 💖",
        embeds:[{
          title:"มีคนตอบ LovePage",
          description:data.answer,
          color: stubborn ? 0xff4d6d : 0xff9edb,
          footer:{ text:new Date(data.time).toLocaleString("th-TH") }
        }]
      })
    });

    return null;
  });
