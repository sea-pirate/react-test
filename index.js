const express = require("express");
const app = express();


app.use(express.static("./public"));
// react files:
app.use(express.static(path.resolve(__dirname, './dist'))); // /build


const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>console.log("server up."));