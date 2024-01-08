import {Router, Request, Response} from 'express';

const userRouter =  Router();

userRouter.get('/users', (req:Request,res:Response) => {
    res.json({
        "message":"user route"
    })
});

export default userRouter;