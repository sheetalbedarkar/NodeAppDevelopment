class abc {
    helloWorld = ((req, res) => {
        let name = req.query.name
        res.send(`Hello World ${name}`)
    })
}
module.exports = new abc;