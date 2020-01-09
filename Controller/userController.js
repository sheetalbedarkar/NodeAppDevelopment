class abc {
    helloWorld = ((req, res) => {
        let name = req.params.name
        res.send(`Hello World ${name}`)
    })
}
module.exports = new abc;