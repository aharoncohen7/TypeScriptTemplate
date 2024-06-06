import {Request, Response, Router} from 'express'
import UserService from '../services/UserService'
import { Mapper } from '../helpers/Mapper'
const router = Router()

// CRUD : all users, signle user, create user, update user
router.get('/',async (req : Request, res: Response)=>{
    console.log("tytryrty");
    
    try{
        const all = UserService.getAllUsers()
        res.send(all)
    }
    catch(err){
        res.status(400).send(err)
    }
})

router.post('/',async (req : Request, res: Response)=>{
   
    
    try{
        let newBody = Mapper<CreateNewUserRequest>(new CreateNewUserRequest(),req.body)

        res.send(UserService.createUser(newBody))
    }
    catch(err){
        res.status(400).send(err)
    }
})



export default router