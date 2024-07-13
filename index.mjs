import axios from "axios";



// ABOUT.HTML REQUEST
axios.request({
    mode: "no-cors",
    method: "POST",
    url: "/about.html",
    baseURL: "http://localhost:3000/",
    data: {
    },
}).then((res) => {
    console.log(res.data); //* This will log the response to the console

});

// CONTACT-ME.HTML REQUEST

axios.request({
    mode: "no-cors",
    method: "POST",
    url: "/contact-me.html",
    baseURL: "http://localhost:3000/",
    data: {
    },
}).then((res) => {
    console.log(res.data); //* This will log the response to the console

});

// INDEX.HTML REQUEST

axios.request({
    mode: "no-cors",
    method: "POST",
    url: "/index.html",
    baseURL: "http://localhost:3000/",
    data: {
    },
}).then((res) => {
    console.log(res.data); //* This will log the response to the console

});



