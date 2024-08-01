import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: "." });
});

app.get('/contact-me', (req, res) => {
    res.sendFile('contact-me.html', { root: "." });
});

app.get('/about', (req, res) => {
    res.sendFile('about.html', { root: "." });
});

app.get('*', (req, res) => { //* This will catch all the requests that are not handled by the routes above
    res.sendFile('404.html', { root: "." });
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running');
});
