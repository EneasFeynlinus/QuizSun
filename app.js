
const finalScoreContainer = document.querySelector('.final-score-container')
const quizForm = document.querySelector('.quiz-form')
const correctAnswers = ['A', 'D', 'B', 'C']

let score = 0

const getUserAnswers = () => {
    let userAnswers = []

    correctAnswers.forEach((_, index) => {
        const userAnswer = quizForm[`inputQuestion${index + 1}`].value
        userAnswers.push(userAnswer)

    })

    return userAnswers

}

const calculateUserScore = userAnswers => {

    userAnswers.forEach((userAnswer, index) => {

        const isUserAnswerCorrect = userAnswer === correctAnswers[index]

        if (isUserAnswerCorrect) {
            score += 25
        }
    })
}

const showFinalScore = () => {
    scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
    finalScoreContainer.classList.remove('d-none')
}

const animateFinalScore = () => {
    let counter = 0

    const timer = setInterval(() => {
        if (counter === score) {
            clearInterval(timer)
        }
        finalScoreContainer.querySelector('span').textContent = `${counter++}%`

    }, 30)
}

quizForm.addEventListener('submit', event => {
    event.preventDefault()

    const userAnswers = getUserAnswers()

    calculateUserScore(userAnswers)

    showFinalScore()

    animateFinalScore()
})
