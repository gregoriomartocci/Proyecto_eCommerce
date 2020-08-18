// ************ Route System require and use() ************
const mainRouter = require("./routes/main"); // Rutas main
const productsRouter = require("./routes/products"); // Rutas main
const usersRouter = require("./routes/users"); // Rutas Users
const dashboardRouter = require("./routes/dashboard"); // Dashboard
const cartRouter = require("./routes/cart");

// ************ Require's ************
const createError = require("http-errors");
const cookieParser = require("cookie-parser");
const express = require("express");
const logger = require("morgan");
const path = require("path");
var Validator = require( 'validator.js' );
const methodOverride = require("method-override"); // Para poder usar los métodos PUT y DELETE
//const logMiddleware = require('./middlewares/user-logs')
const cookieAuthMiddleware = require('./middlewares/cookieAuthMiddleware')
const setDataPerfilMiddleware = require('./middlewares/setDataPerfilMiddlewares')
const footerDataMiddleware = require('./middlewares/footerDataMiddleware')
const session = require('express-session')
// ************ express() - (don't touch) ************
const app = express();

// ************ Middlewares - (don't touch) ************
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "../public"))); // Necesario para los archivos estáticos en el folder /public
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride("_method")); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
//app.use(logMiddleware) LUCAS - Se comento para no estar borrando siempre que commiteo
app.use(session({secret: "frase secreta" , resave: false, saveUninitialized: true}))
app.use(cookieAuthMiddleware)
app.use(setDataPerfilMiddleware)
app.use(footerDataMiddleware)


// ************ Template Engine - (don't touch) ************
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); // Define la ubicación de la carpeta de las Vistas

app.use("/", mainRouter);
app.use("/users", usersRouter);
app.use("/product", productsRouter);
app.use("/cart", cartRouter);
app.use("/dashboard", dashboardRouter);

// ************ DON'T TOUCH FROM HERE ************
// ************ catch 404 and forward to error handler ************
//app.use((req, res, next) => next(createError(404)));

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// ************ exports app - dont'touch ************
module.exports = app;
