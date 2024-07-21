import express from "express"; 
import { getUsers, Login, Register, Logout } from "../controllers/Users.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
const router = express.Router();

router.get('/users', getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.post('/token', refreshToken);
router.delete('/logout', Logout);

export default router;
