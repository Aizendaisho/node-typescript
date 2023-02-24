import {Router} from 'express';
import {
  homeGet,
  homeDelete,
  homeId,
  homePost,
  homePut,
} from "../controllers/item.controller";

const router = Router()

router.get('/home',homeGet)

router.post('/home',homePost)

router.put("/home/:id", homePut);

router.delete("/home/:id", homeDelete);

router.get("/home/:id", homeId);




export default router