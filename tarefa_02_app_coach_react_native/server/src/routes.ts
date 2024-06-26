import express from "express";
import ClassesControler from "./controllers/ClassesController";
import ConnectionsController from "./controllers/ConnectionsController";


const routes = express.Router();

const classesController = new ClassesControler();
const connectionsController = new ConnectionsController();

//CLASSES
routes.get("/classes", classesController.index)
routes.post("/classes", classesController.create)

//CONECTIONS
routes.get("/connections", connectionsController.index)
routes.post("/connections", connectionsController.create)


export default routes;