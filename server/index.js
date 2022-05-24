const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const path = require('path');

const routes = require("./src/routes");

const port = process.env.PORT || 8080;

app.use(cors()); 

app.use(cookieParser());

app.use(express.json());

app.use(routes);

app.use("/files",express.static(path.resolve(__dirname,"uploads","images"))
)

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});