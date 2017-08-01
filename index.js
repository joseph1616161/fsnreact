const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
	res.send({ "last name": "there" });
});

app.listen(PORT, () => {
	console.log("SERVER STARTED AT PORT 3000!");
});
