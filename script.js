const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");

const nextBtn = document.getElementById("nextBtn");
const copyBtn = document.getElementById("copyBtn");

// YES Button
yesBtn.addEventListener("click", () => {
    page1.classList.remove("active");
    page2.classList.add("active");
});

// NO Button moves randomly
noBtn.addEventListener("mouseover", () => {

    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 80);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

});

// Continue
nextBtn.addEventListener("click", () => {

    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const food = document.getElementById("food").value;
    const place = document.getElementById("place").value;

    document.getElementById("showDate").innerText = date || "Not Selected";
    document.getElementById("showTime").innerText = time || "Not Selected";
    document.getElementById("showFood").innerText = food || "Not Selected";
    document.getElementById("showPlace").innerText = place || "Not Selected";

    page2.classList.remove("active");
    page3.classList.add("active");

});

// Copy Plan
copyBtn.addEventListener("click", () => {

const text =
`❤️ Our Date ❤️

📅 Date : ${document.getElementById("showDate").innerText}

🕒 Time : ${document.getElementById("showTime").innerText}

🍕 Food : ${document.getElementById("showFood").innerText}

📍 Place : ${document.getElementById("showPlace").innerText}

Can't wait ❤️`;

navigator.clipboard.writeText(text);

copyBtn.innerText = "Copied ✅";

setTimeout(() => {
copyBtn.innerText = "Copy Plan 📋";
},2000);

});

// Floating Hearts
const hearts = document.querySelector(".hearts");

setInterval(() => {

const heart = document.createElement("span");

heart.innerHTML = "💖";

heart.style.left = Math.random()*100 + "%";

heart.style.animationDuration =
(Math.random()*3+3)+"s";

heart.style.fontSize =
(Math.random()*20+20)+"px";

hearts.appendChild(heart);

setTimeout(()=>{
heart.remove();
},6000);

},400);
