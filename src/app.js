import app from './models/server';

const port = process.env.PORT || 8081;

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});