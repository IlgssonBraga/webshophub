import {Router} from 'express';
import userRouter from './user/userRoutes'

const routes =  Router();

routes.use(userRouter);

export default routes;