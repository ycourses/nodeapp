/*jshint esversion: 6 */
import express, { request } from "express";
import bodyParser from "body-parser";
import { env } from "./env";
export default class Application {
    constructor() {
            this.prepareServer();
        }
        /**
         * prepare this express server
         */
    prepareServer() {
            this.express = express();
            this.express.use(
                bodyParser.urlencoded({
                    extended: true,
                })
            );
        }
        /**
         * Run the application
         */
    run() {
        this.express.get("/", (request, response) => {
            response.send("wellcome to express app ");
        });
        this.express.listen(process.env.PORT, function() {
            console.log("server is ready ...😜 @ http://localhost:3000/");
        });
    }
}