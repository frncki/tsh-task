import 'dotenv/config';
import express from 'express';

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    return res.send('Hello express 🚂');
});

app.listen(process.env.PORT, () =>
    console.log(`App listening on http://localhost:${process.env.PORT}`),
);