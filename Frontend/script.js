window.onload = function () {

    // accessing canvas 
    const canvas = document.getElementById("analytics-canvas");
    const ctx = canvas.getContext("2d");

    // Sample expense data
    const expenses = [1200, 1800, 1500, 2200, 2600, 2100, 3000];

    // Labels
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

    let currentPoint = 0;

    // Draw graph function
    function drawGraph() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Axis
        ctx.beginPath();
        ctx.moveTo(40, 10);
        ctx.lineTo(40, 180);
        ctx.lineTo(380, 180);
        ctx.strokeStyle = "#333";
        ctx.stroke();

        // Graph line
        ctx.beginPath();
        ctx.strokeStyle = "#00e699";
        ctx.lineWidth = 3;

        for (let i = 0; i <= currentPoint; i++) {

            let x = 40 + (i * 50);
            let y = 180 - (expenses[i] / 20);

            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }

            // Point
            ctx.fillStyle = "#00e699";
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, Math.PI * 2);
            ctx.fill();

            // Month Label
            ctx.fillStyle = "#000";
            ctx.font = "12px Arial";
            ctx.fillText(months[i], x - 10, 195);
        }

        ctx.stroke();
    }

    // Animate graph
    function animateGraph() {

        if (currentPoint < expenses.length - 1) {
            currentPoint++;
            drawGraph();
            setTimeout(animateGraph, 400);
        }
    }

    drawGraph();
    animateGraph();
};
//chat
const chatLink = document.getElementById("chatLink");

chatLink.addEventListener("click", (e) => {
    e.preventDefault();
    alert("💬💬Chat feature is coming soon!!!");
});

//Get started  & login
const getStartedBtn = document.getElementById("getStartedBtn")
const loginBtn = document.getElementById("loginBtn");
const loginOverlay = document.getElementById("loginOverlay");
const closeBtn = document.getElementById("closeBtn");

getStartedBtn.addEventListener("click", () => {
    loginOverlay.style.display = "flex";
});

loginBtn.addEventListener("click", () => {
    loginOverlay.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    loginOverlay.style.display = "none";
});

document.querySelector(".login-submit").addEventListener("click", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    try {
        const response = await fetch("http://localhost:5010/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });
        const data = await response.json();
        if (data.success) {
            window.location.href = "/Frontend/dashboard.html";
        } else {
            alert(data.message);
        }
    } catch (error) {
        alert("Unable to connect to server.");
        console.log(error);
    }
});