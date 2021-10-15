const app = require("express")()
const axios = require("axios")

app.get('/', function (req, resp) {

    console.log("hostname in incoming request " + req.hostname)
    axios.get(`https://${req.hostname}`).then((res) => {
        resp.send(res.data)
    })
});

app.listen(8080, () => {
    console.log("proxy is listening on 8080")
})

// config your internet to use http proxy 127.0.0.1:8080, see what happen
// try send some through http 