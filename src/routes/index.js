import express from "express";
const router = express.Router();

router.get('/', (req, res) => {
    return res.send('Henlo the software house task 👨🏻‍💻🏠');
});

module.exports = router;