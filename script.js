"use strict";
function clock() {
    let days = ["Monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
    let months = ["january", "february", "March", "april", "june", "july", "august", "september", "october", "november", "december"];
    let hrs = document.getElementById("hour");
    let minutes = document.getElementById("minutes");
    let second = document.getElementById("second");
    let ampm = document.getElementById("ampm");
    let day = document.getElementById("dd");
    let date = document.getElementById("ddmmyy");
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let dy = time.getDay();
    let dd = time.getDate();
    let mm = time.getMonth();
    let yy = time.getFullYear();
    // Hours
    if (h > 12) {
        h = h - 12;
    }
    else if (h == 0) {
        h = 12;
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    hrs.innerHTML = h;
    // Minutes
    minutes.innerHTML = m;
    // Second
    second.innerHTML = s;
    //ampm
    let period = h <= 12 ? "PM" : "AM";
    ampm.innerHTML = period;
    // date
    date.innerHTML = months[mm] + "-" + dd + "-" + yy;
    // day
    day.innerHTML = days[dy];
}
setInterval(clock, 1000);
