import * as express from "express";
import { createSession, getSessionBySesid } from "../../db/models/session";
import { createUser, getUsersByEmailAndPassword, getUsersById } from "../../db/models/user";
const router = express.Router();

router.post("/auth/register", async (req, res) => {

    const { email, password } = req.body;
    console.log(1);
    const { id }: any = await createUser(email, password);

    console.log(2);
    const { sesid }: any = await createSession(id);

    res.cookie("sesid", sesid);

    res.send({
        success: true
    });
});

router.post("/auth/login", async (req, res) => {
    const { email, password } = req.body;

    const { id }: any = await getUsersByEmailAndPassword(email, password);

    const { sesid }: any = await createSession(id);

    res.cookie("sesid", sesid);

    res.send({
        success: true
    });
});

router.post("/auth/logout", async (req, res) => {

    const { sesid }: any = req.cookies;

    if (!sesid) return res.send({
        success: false,
        error: {
            type: "UNAUTHORIZATION_UNLOGINING"
        }
    });

    res.clearCookie("sesid");

    res.send({
        success: true
    });
});

export const authRouter = router;