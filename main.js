import { app } from "./firebase.js";

const status = document.getElementById("status");
const btn = document.getElementById("testBtn");

status.innerText = "✅ Firebase เชื่อมต่อแล้ว";

btn.addEventListener("click", () => {
    alert("ปุ่มทำงาน แต่หน้าเว็บไม่รี");
});
