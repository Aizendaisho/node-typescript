import {Router} from 'express';
import { homeGet,homeDelete,homeId,homePost,homePut } from '../controllers/home';

const router = Router()

router.get('/home',homeGet)

router.post('/home',homePost)

router.put('/home',homePut)

router.delete('/home',homeDelete)

router.put('/home/:id',homeId)




export default router