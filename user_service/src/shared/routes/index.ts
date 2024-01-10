import {Router} from 'express';
import userRouter from './user/userRoutes'

const routes =  Router();

routes.use(userRouter);

routes.get('/',(req, res) => {
    res.json({
        "message":"teste"
    })
})

export default routes;