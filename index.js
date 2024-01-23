const express = require("express");
const morgan = require("morgan");
const path = require("path")
require('ejs')

const app = express();

const HomeRoutes = require('./src/routes/home')
const UserRoutes = require('./src/routes/users')

//settingg
app.set('case sensitive routing', true)
app.set('appName', 'Express course')
app.set('port', 3000)
app.set('view engine', 'ejs')
app.set('views',path.join(__dirname, './src/views'))

//Middlewares
app.use(express.json());
app.use(morgan("dev"));

app.use(HomeRoutes)
app.use(UserRoutes)

//Brindar ruta estática
app.use("/public",express.static(path.join(__dirname, './src/public')))
app.use("/uploads",express.static(path.join(__dirname, './src/uploads')))

app.listen(app.get('port'));
console.log(`Server ${app.get('appName')} on port ${app.get('port')}`);
