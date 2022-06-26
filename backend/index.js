const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const express = require('express')
var cors = require ('cors');
const app = express();
const db = require('./models');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded())


app.get('/getSteps', async (req, res) => {
    const steps = await db.Step.findAll({
        order: ['ordre']
    })
    res.status(200).json(steps)
})

app.post('/createStep', (req ,res) => {
    console.log(req);
    db.Step.create(req.body);
    res.status(200).json(req.body);
})

app.delete('/deleteSteps', (req ,res) => {
    db.Step.destroy({
        where: {id: {[Op.notIn]: req.body}}
    });
    res.status(200).json(req.body)
})

app.put('/editStep', async (req ,res) => {
    await db.Step.update(
        {
            ordre: req.body.ordre,
            title: req.body.title,
            description: req.body.description,
            url: req.body.url,
        },
        {
          where: { id: req.body.id },
        }
    );
    res.status(200).json(req.body)
})

app.listen(8080, () => {
    console.log('Serveur running on port 8080')
})