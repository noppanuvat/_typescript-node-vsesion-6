import * as bodyParser from "body-parser"
import * as compression from "compression"
import * as cookieParser from "cookie-parser"
import * as dotenv from "dotenv"
import * as errorHandler from "errorhandler"
import * as express from "express"
import * as favicon from "serve-favicon"
import * as session from "express-session"
import * as expressValidator from "express-validator"
import * as logger from "morgan"
import * as path from "path"

dotenv.config()

const app = express()

import * as testController from "./controllers/testController"

const sess: any = {
  cookie: {
    secure: false
  },
  resave: true,
  saveUninitialized: true,
  secret: "AbCdEfGhIjKlmN"
}

app.set("port", process.env.PORT || 3000)
app.set("views", path.join(__dirname, "../views"))
app.set("view engine", "pug")
app.use(compression())
//  app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
if (app.get("env") === "production") {
  app.set("trust proxy", 1)
  sess.cookie.secure = true
}
app.use(session(sess))
app.use(expressValidator())
app.use(express.static(path.join(__dirname, "public"), { maxAge: 31557600000 }))

app.get("/", testController.getApi)

app.use(errorHandler())

app.listen(app.get("port"), () => {
  console.info(("  App is running at http://localhost:%d in %s mode"), app.get("port"), app.get("env"))
  console.info("  Press CTRL-C to stop\n")
})

module.exports = app
