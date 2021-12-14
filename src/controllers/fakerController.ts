import {fakerService} from "../services/fakerService";
import { Request, Response, NextFunction } from 'express';

const getProducts = (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = fakerService();
        console.log(data);
        return res.json(data);
    } catch (error) {
        next(error);
    }
}

export {getProducts};