const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let imageElement = document.getElementById('image');

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
  imageElement.classList.remove('hide');
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  imageElement.src = question.img;
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')

    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.remove('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is 2 + 2?',
   img: './images/1_steph_curry.jpg'
  },
  {
    question: 'Who is the best YouTuber?',
    img: './images/2_captain_america.jpg'
  },
  {
    question: 'Is web development fun?',
   img: './images/3_face_masks.png'
  },
  {
    question: 'What is 4 * 2?',
    img: './images/4_blue_darter.jfif'
  },
  {
    question: 'What is 4 * 2?',
    img: './images/5_kobe_bryant.jpg'
  },
  {
    question: 'What is 2 + 2?',
   img: './images/6_big_time_rush.jpg'
  },
  {
    question: 'Who is the best YouTuber?',
    img: './images/7_basketball.jpg'
  },
  {
    question: 'Is web development fun?',
   img: './images/8_coach_washington.png'
  },
  {
    question: 'What is 4 * 2?',
    img: './images/9_drake.jfif'
  },
  {
    question: 'What is 4 * 2?',
    img: './images/10_groot.jfif'
  },
  {
    question: 'What is 2 + 2?',
   img: './images/11_baby_yoda.jpg'
  },
  {
    question: 'Who is the best YouTuber?',
    img: './images/12_heinz.jfif'
  },
  {
    question: 'Is web development fun?',
   img: './images/13_covid.jpg'
  },
  {
    question: 'What is 4 * 2?',
    img: './images/14_pandemic.jpg'
  },
  {
    question: 'What is 4 * 2?',
    img: './images/15_spiderman.jpg'
  },
  {
    question: 'What is 2 + 2?',
   img: './images/16_superman.jpg'
  },
  {
    question: 'Who is the best YouTuber?',
    img: './images/17_cell_phones.jpg'
  },
  {
    question: 'Is web development fun?',
   img: './images/18_wftv.JPG'
  },
  {
    question: 'What is 4 * 2?',
    img: './images/19_giannis.jpg'
  },
  {
    question: 'What is 4 * 2?',
    img: './images/20_tom_brady.jpg'
  },
  {
    question: 'What is 2 + 2?',
   img: './images/21_ucf.jpg'
  },
  {
    question: 'Who is the best YouTuber?',
    img: './images/22_iron_man.jpg'
  },
  {
    question: 'Is web development fun?',
   img: './images/23_batman.jpg'
  },
  {
    question: 'What is 4 * 2?',
    img: './images/24_wonder_woman.jpg'
  },
  {
    question: 'What is 4 * 2?',
    img: './images/25_disney.jpg'
  },
  {
    question: 'What is 2 + 2?',
   img: './images/26_nickelodeon.jpg'
  },
  {
    question: 'Who is the best YouTuber?',
    img: './images/27_espn.JPG'
  },
  {
    question: 'Is web development fun?',
   img: './images/28_homecoming.png'
  },
  {
    question: 'What is 4 * 2?',
    img: './images/29_the_simpsons.jpg'
  },
  {
    question: 'What is 4 * 2?',
    img: './images/30_playstation.jpg'
  },
  {
    question: 'What is 2 + 2?',
   img: './images/31_nintendo.jpg'
  },
  {
    question: 'Who is the best YouTuber?',
    img: './images/32_pokemon.jpg'
  },
  {
    question: 'Is web development fun?',
   img: './images/33_fortnite.png'
  },
  {
    question: 'What is 4 * 2?',
    img: './images/34_chiefs.jpg'
  },
  {
    question: 'What is 4 * 2?',
    img: './images/35_seahawks.jpeg'
  },
  {
    question: 'What is 2 + 2?',
   img: './images/36_wolves.png'
  },
  {
    question: 'Who is the best YouTuber?',
    img: './images/37_loki.jpg'
  },
  {
    question: 'Is web development fun?',
   img: './images/38_wandavision.jpeg'
  },
  {
    question: 'What is 4 * 2?',
    img: './images/39_tfatws.jfif'
  },
  {
    question: 'What is 4 * 2?',
    img: './images/40_stranger_things.jpg'
  },
  {
    question: 'What is 2 + 2?',
   img: './images/41_twd.JPG'
  },
  {
    question: 'Who is the best YouTuber?',
    img: './images/42_ayaotd.jfif'
  },
  {
    question: 'Is web development fun?',
   img: './images/43_harrypotter.jpg'
  },
  {
    question: 'What is 4 * 2?',
    img: './images/44_ioa.jpeg'
  },
  {
    question: 'What is 4 * 2?',
    img: './images/45_newsies.jfif'
  },
  {
    question: 'What is 2 + 2?',
   img: './images/46_wotw.jpg'
  },
  {
    question: 'Who is the best YouTuber?',
    img: './images/47_themazerunner.jpeg'
  },
  {
    question: 'Is web development fun?',
   img: './images/48_supermario.jpg'
  },
  {
    question: 'What is 4 * 2?',
    img: './images/49_mj.jpg'
  },
  {
    question: 'What is 4 * 2?',
    img: './images/50_spongebob.jpg'
  }
]