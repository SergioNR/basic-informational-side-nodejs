import axios from "axios";


axios.request({
    mode: "no-cors",
    method: "POST",
    url: "http://localhost:3000/about.html?name=John&age=25",
    data: {
        name: "John Doe",
        age: 25,
    },
}).then((res) => {
    console.log(res.data);
});