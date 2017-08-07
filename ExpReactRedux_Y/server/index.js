import express from 'express';
import path from 'path';

let app = express();

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
});

app.listen(4000, () => console.log('Listening to localhost:4000'));