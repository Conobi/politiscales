export const useQuestionsState = () => {
  return useState('questions_state', () => {
    return {
      answers: {} as { [key: string]: number },
      currentQuestionIndex: 0
    }
  })
}
