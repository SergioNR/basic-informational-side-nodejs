import * as http from 'node:http';
import * as fs from 'node:fs';


const server = http.createServer((req, res) => {
    
    

    const reqUrl = new URL(req.url, `http://${req.headers.host}`); //* the first argument (req.url) is the "url" portion of the axios request (index.mjs), the second argument is the "baseURL" that will only be used if the "url" portion of the request is a relative path instead of a full path (eg: /about.html instead of http://localhost:3000/about.html) -- using the URL class will allow us to easily extract the contents of the request

    // res.write('this is coming from the res.write() portion'); //* res.write will write the string to the response

    // console.log(reqUrl); //* This will return the FULL url of the request, including queryparams

    // console.log(reqUrl.pathname); //* This will return the url portion of the request, ignoring all the query params

    // TODO Might make more sense to check if the resource exists rather than check page by page? (eg: about.html, contact.html, etc)

    if (reqUrl.pathname === '/about.html') { 
        res.writeHead(200, {
            'Content-Type': 'text/plain',
        }); //* Status 200 because the resource DOES exist

        // res.write('this is the about page'); //* Does not provide much use here -- commenting it out

        fs.readFile('about.html', 'utf8', (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            else {
            res.end(data);
            };
        });
    }
    else if (reqUrl.pathname === '/contact-me.html') {
        res.writeHead(200, {
            'Content-Type': 'text/plain',
        }); //* Status 200 because the resource DOES exist

        // res.write('this is the contact page'); //* Does not provide much use here -- commenting it out
            fs.readFile('contact-me.html', 'utf8', (err, data) => {
                if (err) {
                    console.log(err);
                    return;
                }
                else {
                res.end(data);
                };
            });

    }
    else if (reqUrl.pathname === '/index.html') {
        res.writeHead(200, {
            'Content-Type': 'text/plain',
        }); //* Status 200 because the resource DOES exist

        // res.write('this is the index page'); //* Does not provide much use here -- commenting it out

        fs.readFile('index.html', 'utf8', (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            else {
            res.end(data);
            };
        });
    }

    else {
        res.writeHead(404, {
            'Content-Type': 'text/plain',
        }); //* Status 404 because the resource DOES NOT exist

        // res.write('this is the 404 page'); //* Does not provide much use here -- commenting it out
            
        fs.readFile('404.html', 'utf8', (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            else {
            res.end(data);
            };
        });
    }

})

server.listen(process.env.PORT || 3000, () => {
    console.log('Server is running')
});

/*
1- understand the request url -- DONE
2- see what the url portion of the request is, ignoring all the query params -- DONE
3- create the logic to route the request -- DONE
4- deliver the desired content -- DONE
- Read file contents from the file system using the node module  -- DONE
- Send the file contents as the response  -- DONE
- how to make it display in the browser rather than plain text 
5- Need to add the logic to deliver a 404 status and page if the requested url is not available  -- DONE

*/