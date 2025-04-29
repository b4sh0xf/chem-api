const express = require('express')
const port    = process.env.PORT = 3000
const app     = require('./app')

app.listen(port, () => {
  console.log(`[+] running on http://localhost:${port}`)
})

app.get('/health', (req, res) => {
    res.status(200).json({
        status: "200 ok"
    })
})

app.get("/whoami", (req, res) => {
    res.status(200).json({
        name: "b4sh 🚀",
        age: 18 + " =)",
        role: "offsec student 👩‍💻",
        why: "i like chemistry and im learning about js development to understand some vulns better 😎"
    })
})