const express = require('express');

const app = express();
app.use(express.json());

const port = 7777;

app.get('/api', (req, res) => {
    res.send('hello, api!');
});

app.get('/api/hello', (req, res) => {
    res.json({
        hello: 'world!',
    });
});

app.listen(port, () => {
    console.log(`Express running port ${port}`);
});

