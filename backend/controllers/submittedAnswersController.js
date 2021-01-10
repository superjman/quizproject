const { submittedAnswersModel, sequelize } = require('../models');

const getAnswer = async (req, res) => {
    try {
        const answerSubmitted = await submittedAnswersModel.findAll()
        return res.json(answerSubmitted) 
    } catch (err){
        console.log(err)
        return res.status(500).json(err)
    }
}

const getAnswerById = async (req, res) => {
    const testid = req.params.id
    try {
        const answerSubmitted = await sequelize.query('CALL testResult(:param1)', 
        {
            replacements: { param1: testid }
        })
        return res.json(answerSubmitted) 
    } catch (err){
        console.log(err)
        return res.status(500).json(err)
    }
}

const submitAnswer = async (req, res) => {
    const { answer, testid, questionid} = req.body
    try {
        const answerSubmitted = await submittedAnswersModel.create({  
            answer, 
            testid, 
            questionid 
        })
        return res.json(answerSubmitted)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
}

module.exports = {
    getAnswer,
    submitAnswer,
    getAnswerById
}