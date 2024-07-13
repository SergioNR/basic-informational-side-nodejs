import axios from "axios";




axios.request({
    mode: "no-cors",
    method: "POST",
    url: "/about.html",
    baseURL: "http://localhost:3000/",
    data: {
        name: "John Doe",
        age: 25,
    },
}).then((res) => {
    window.document.body.innerHTML = res.data; //* This will render the response in the browser
});