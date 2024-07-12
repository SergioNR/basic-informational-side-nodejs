import axios from "axios";

axios.get("http://localhost:3000").then((res) => {
    console.log(res.data);
});