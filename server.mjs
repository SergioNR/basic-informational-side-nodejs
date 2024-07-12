import * as http from 'node:http';


const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    const reqUrl = new URL(req.url, `http://${req.headers.host}`); //* the first argument (req.url) is the "url" portion of the axios request (index.mjs), the second argument is the "baseURL" that will only be used if the "url" portion of the request is a relative path instead of a full path (eg: /about.html instead of http://localhost:3000/about.html) -- using the URL class will allow us to easily extract the contents of the request



    // console.log(reqUrl); //* This will return the FULL url of the request, including queryparams

    console.log(reqUrl.pathname); //* This will return the url portion of the request, ignoring all the query params

    
    res.end(`hello world - END`)

})

server.listen(process.env.PORT || 3000, () => {
    console.log('Server is running')
});

/*
1- understand the request url
2- see what the url portion of the request is, ignoring all the query params
3- route the request to deliver the desired content
*/