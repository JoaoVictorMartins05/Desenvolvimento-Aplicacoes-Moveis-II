import {Request, Response} from "express";
import db from "../database/conection";
import convertHourToMinutes from "../utils/convertHourToMinutes";

interface scheduleItem {
    week_day: number;
    from: string;
    to: string;
}

export default class ClassesControler {

    async index(request :Request, response: Response){
        const filters = request.query;

        if(!filters.week_day || !filters.subject || !filters.time){
            return response.status(400).json({
                error: "Missing filters to search classes."
            })
        }

        const week_day = filters.week_day as string;
        const subject = filters.subject as string;
        const time = filters.time as string;

        const timeInMinutes = convertHourToMinutes(time)

        const classes = await db("classes")
        .whereExists(function(){
            this.select("class_schedule.*")
            .from("class_schedule")
            .whereRaw('`class_schedule`. `class_id` = `classes`.`id`')
            .whereRaw('`class_schedule`. `week_day` = ??', [Number(week_day)])
            .whereRaw('`class_schedule`. `from` <= ??', [timeInMinutes])
            .whereRaw('`class_schedule`. `to` > ??', [timeInMinutes])
        })
        .where("classes.subject", "=", subject)
        .join("coaches", "classes.coach_id", "=", "coaches.id")
        .join("class_schedule", "classes.id", "=", "class_schedule.class_id")
        .select(["classes.*", "coaches.*", "class_schedule.*"])

        const groupedCoaches = [];
        let currentCoachId = null;
        let currentCoach: any = {};
        let currentCoachSchedules = [];

        for (const row of classes) {
          const coachId = row.coach_id;

          if (coachId !== currentCoachId) {
            if (currentCoachId) {
              groupedCoaches.push({
                id: currentCoachId,
                ...currentCoach,
                schedule: currentCoachSchedules,
              });
            }

            currentCoachId = coachId;
            currentCoach = { ...row };
            currentCoachSchedules = [];
          }

          currentCoachSchedules.push({
            week_day: row.week_day,
            from: row.from,
            to: row.to,
          });
        }

        if (currentCoachId) {
          groupedCoaches.push({
            id: currentCoachId,
            ...currentCoach,
            schedule: currentCoachSchedules,
          });
        }

        return response.json(groupedCoaches);
    }

     async create(request :Request, response: Response){
        console.log("acessou a rota post classes")
        console.log(request.body)

        const {name, avatar, whatsapp, bio, subject, cost, schedule} = request.body;

        const trx = await db.transaction();

        try{
            const insertedCoachesIds = await trx("coaches").insert({
                name,
                avatar,
                whatsapp,
                bio
            })
        
            const coach_id = insertedCoachesIds[0]
        
            const insertedClassesIds = await trx("classes").insert({
                subject,
                cost,
                coach_id
            })
        
            const class_id = insertedClassesIds[0]
        
            const classSchedule = schedule.map((scheduleItem: scheduleItem) => {
                return {
                    class_id,
                    week_day: scheduleItem.week_day,
                    from: convertHourToMinutes(scheduleItem.from),
                    to: convertHourToMinutes(scheduleItem.to),
                }
            })
        
            await trx("class_schedule").insert(classSchedule);
            
            await trx.commit();
            
            return response.status(201).send();

        }catch(err){
            await trx.rollback();

            return response.status(400).json({
                error: "Unexpected erro while creating ne class"
            })
        }
    }
}

