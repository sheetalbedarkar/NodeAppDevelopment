class abc {
    helloWorld = ((req, res) => {
        let result = req.query.result
        res.send(result)
    })
}
module.exports = new abc;