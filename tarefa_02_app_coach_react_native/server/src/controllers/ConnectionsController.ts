import {Request, Response} from "express";
import db from "../database/conection";

export default class ConnectionsControler {

    async index(request :Request, response: Response){
        const totalConnections = await db("connections").count("* as total")

        return response.json(totalConnections)
    }

     async create(request :Request, response: Response){

        const {coach_id} = request.body;

        await db("connections").insert({
            coach_id
        });
     
        return response.status(201).send();
    }
}