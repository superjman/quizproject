const { quizModel } = require('../models');

const getQuiz = async (req, res) => {
    try {
        const quiz = await quizModel.findAll()
        return res.json(quiz) 
    } catch (err){
        console.log(err)
        return res.status(500).json(err)
    }
}

const getQuizById = async (req, res) => {
    const testid = req.params.id
    try {
        const quiz = await quizModel.findAll({
            where: { testid }
        })
        return res.json(quiz) 
    } catch (err){
        console.log(err)
        return res.status(500).json(err)
    }
}

const createQuiz = async (req, res) => {
    const { question, option1, option2, option3, option4, answer, testid, questionid} = req.body
    try {
        const quiz = await quizModel.create({ 
            question, 
            option1, 
            option2, 
            option3, 
            option4, 
            answer, 
            testid, 
            questionid 
        })
        return res.json(quiz)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
}

module.exports = {
    getQuiz,
    createQuiz,
    getQuizById
}