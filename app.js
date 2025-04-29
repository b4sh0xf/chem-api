const mongoose = require('mongoose')
const Element  = require('./register')
const express  = require('express')
const app      = express()

mongoose.connect('mongodb://localhost:27017/', {})
    .then(() => console.log('[+] mongo online'))
    .catch(err => console.error(err))
    
app.use(express.json())

app.post('/element/new', async (req, res) => {

    if (!req.body.elementname || !req.body.eletroconf || !req.body.group || !req.body.period || !req.body.elementtype || !req.body.description || !req.body.curiosity || !req.body.atomicnumber || !req.body.molarmass || !req.body.interestingreactions) {
        return res.status(400).json({ error: '[!] element name, eletronic configuration, group, period, element type, description, curiosity, atomic number, molar mass and interesting reactions are required' })
    }

    if (!req.body || typeof req.body !== 'object' || Array.isArray(req.body)) {
        return res.status(400).json({ error: "[!] only accepts json" }) 
    }

    const { elementname, eletroconf, group, period, elementtype, description, curiosity, atomicnumber, molarmass, interestingreactions } = req.body

    try {
    
        const elementExists = await Element.findOne({ elementname })

        if (elementExists) {
            return res.status(400).json({ error: '[!] element already exists' })
        }

        const element = new Element({
            elementname,
            eletroconf,
            group,
            period,
            elementtype,
            description,
            curiosity,
            atomicnumber,
            molarmass,
            interestingreactions
        })

        await element.save()
        return res.status(200).json({ message: '[+] element registered' })


    } catch {
        return res.status(500).json({ error: '[!] internal server error' })
    }

})

app.get("/element/:elementname", async (req, res) => {

    if (typeof req.params.elementname !== 'string') {
        return res.status(400).json({ error: "[!] element name must be a string" }) 
    }

    if (!req.params.elementname) {
        return res.status(400).json({ error: '[!] element name is required, in english' })
    }

    const { elementname } = req.params

    try {
        const element = await Element.findOne({ elementname })
        if (!element) {
            return res.status(404).json({ error: '[!] element not found' })
        } else {
            return res.status(200).json({
                elementname: element.elementname,
                eletroconf: element.eletroconf,
                group: element.group,
                period: element.period,
                elementtype: element.elementtype,
                description: element.description,
                curiosity: element.curiosity,
                atomicnumber: element.atomicnumber,
                molarmass: element.molarmass,
                interestingreactions: element.interestingreactions
            })
        }

    } catch {
        return res.status(500).json({ error: '[!] internal server error' })
    }

})


module.exports = app