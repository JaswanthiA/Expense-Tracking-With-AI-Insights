import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Expense Tracker Backend is Running");
});
app.post("/login", (req, res) => {

    const { email, password } = req.body;
    const defaultEmail = "anemjaswanthi@gmail.com";
    const defaultPassword = "12345";
    const defaultDisplay = "Jaswanthi"

    console.log("Login Attempt");
    console.log("Email:", email);

    if (email === defaultEmail && password === defaultPassword) {
        console.log("Login Successful");
        res.json({
            success: true,
            message: "Login Successful"
        });
    } else {
        console.log("Invalid Credentials");
        res.json({
            success: false,
            message: "Invalid Email or Password"
        });
    }
});


app.listen(5010, () => {
    console.log("Server is running on port 5010");
});
