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

    // Get Started button
    const getStartedBtn = document.querySelector(".hero-actions .btn-primary");

    getStartedBtn.addEventListener("click", function () {
        alert("Expense Tracker Dashboard Coming Soon!");
    });

};