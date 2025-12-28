import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";

export const firebaseConfig = {
    apiKey: "AIzaSyA4nwk8ZPeVvoLOR4UyPLP-yVUyhlinEN8",
    authDomain: "blackpophun.firebaseapp.com",
    databaseURL: "https://blackpophun-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "blackpophun",
    storageBucket: "blackpophun.firebasestorage.app",
    messagingSenderId: "735578888290",
    appId: "1:735578888290:web:b68c60a5bdba76880ed93b",
    measurementId: "G-LBD7BZD8EJ"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
