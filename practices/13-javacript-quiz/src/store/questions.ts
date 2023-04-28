import { create } from 'zustand'
import { type Question } from './types.d'
import confetti from 'canvas-confetti'
import { persist, devtools } from 'zustand/middleware'
import { getAllQuestions } from '../services/questions'

interface State {
  questions: Question[]
  currentQuestion: number
  fetchQuestions: (limit: number) => Promise<void>
  selectAnswer: (questionId: number, answerIndex: number) => void
  goNextQuestion: () => void
  goPreviousQuestion: () => void
  reset: () => void
}

// const logger = (config) => (set, get, api) => {
//   return config(
//     (...args) => {
//       console.log('   applying', args)
//       set(...args)
//       console.log('   new state', get())
//     },
//     get,
//     api
//   )
// }

export const useQuestionsStore = create<State>()(devtools(persist((set, get) => {
  return {
    questions: [],
    currentQuestion: 0,

    fetchQuestions: async (limit: number) => {
      const json = await getAllQuestions()

      const questions = json.sort(() => Math.random() - 0.5).slice(0, limit)

      set({ questions }, false, 'FETCH_QUESTIONS')
    },

    selectAnswer: (questionId: number, answerIndex: number) => {
      const { questions } = get()

      // usar el structuredClone para clonar el objeto
      const newQuestions = structuredClone(questions)

      // encontramos el indice de la pregunta
      const questionIndex = newQuestions.findIndex((q: Question) => q.id === questionId)

      // obtenemos la información de la pregunta
      const questionInfo = newQuestions[questionIndex]

      // averiguamos si el usuario ha seleccionado la respuesta correcta
      const isCorrectUserAnswer = questionInfo.correctAnswer === answerIndex

      if (isCorrectUserAnswer) confetti()

      // cambiar esta informacion con la copia de la pregunta
      newQuestions[questionIndex] = {
        ...questionInfo,
        isCorrectUserAnswer,
        userSelectedAnswer: answerIndex
      }

      // actualizamos el estado
      set({ questions: newQuestions }, false, 'SELECT_ANSWER')
    },

    goNextQuestion: () => {
      const { currentQuestion, questions } = get()
      const nextQuestion = currentQuestion + 1

      if (nextQuestion < questions.length) {
        set({ currentQuestion: nextQuestion }, false, 'GO_NEXT_QUESTION')
      }
    },

    goPreviousQuestion: () => {
      const { currentQuestion } = get()
      const previousQuestion = currentQuestion - 1

      if (previousQuestion >= 0) {
        set({ currentQuestion: previousQuestion }, false, 'GO_PREVIOUS_QUESTION')
      }
    },

    reset: () => {
      set({ currentQuestion: 0, questions: [] }, false, 'RESET')
    }
  }
}, { name: 'questions' })))
