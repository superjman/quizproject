const { Router } = require('express');
const router = Router();

const quizController = require('../controllers/quizController');
const answersController = require('../controllers/submittedAnswersController');

router.get('/quiz', quizController.getQuiz)
router.get('/quiz/:id', quizController.getQuizById)
router.post('/quiz/add', quizController.createQuiz)

router.get('/answers', answersController.getAnswer)
router.get('/answers/:id', answersController.getAnswerById)
router.post('/answers/add', answersController.submitAnswer)

module.exports = router