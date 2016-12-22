import * as express from 'express';
const router = express.Router();

const SERVER_UPTIME: any = new Date();

router.get('/', (req, res) => {
    res.json({uptime: (new Date() as any) - SERVER_UPTIME});
});

export default router;
