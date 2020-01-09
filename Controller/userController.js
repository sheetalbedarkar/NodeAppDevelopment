class abc {
    helloWorld = (req, res) => {
        let result = {
            "name": req.body.name
        }
        res.send(`Hello World ${result.name}`)
    }
}
module.exports = new abc;