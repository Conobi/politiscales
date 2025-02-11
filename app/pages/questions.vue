<script lang="ts" setup>
const { t } = useI18n()
const urlSerializer = useSerializer()
const currentQuestionIndex = ref(0)
const currentQuestion = computed(() =>
  t(`questions.${questionsIds.value[currentQuestionIndex.value]}`)
)
const currentQuestionId = computed(() => {
  return questionsIds.value[currentQuestionIndex.value]
})

const answers = ref<{ [key: string]: number }>({})

const questionsIds = computed(() => {
  return Object.keys(questionsWeights)
})

const prevQuestion = () => {
  if (currentQuestionIndex.value > 0) {
    currentQuestionIndex.value--
  }
}

const quizResults = computed(() => {
  const scores = Object.keys(axes).reduce((acc, axis) => {
    acc[axis] = { val: 0, sum: 0 }
    return acc
  }, {} as Record<string, { val: number; sum: number }>)

  Object.entries(answers.value).forEach(([questionId, answerValue]) => {
    if (answerValue > 0) {
      questionsWeights[questionId].valuesYes.forEach((a) => {
        scores[a.axis].val += answerValue * a.value
        scores[a.axis].sum += Math.max(a.value, 0)
      })
    } else {
      questionsWeights[questionId].valuesNo.forEach((a) => {
        scores[a.axis].val -= answerValue * a.value
        scores[a.axis].sum += Math.max(a.value, 0)
      })
    }
  })

  let finalStr = ''

  // Return a Record<string, number> with the axis as key and the score as value
  // const axisScore = Object.entries(scores).reduce((acc, [axis, score]) => {
  //   acc[axis] = (score.val / score.sum) * 100
  //   return acc
  // }, {} as Record<string, number>)

  Object.entries(scores).forEach(([axis, score]) => {
    // Get the index of the axis in the axes array
    const axisIndex = Object.keys(axes).indexOf(axis)
    finalStr += urlSerializer.encode(axisIndex, (score.val / score.sum) * 100)
  })
  return finalStr
})

const deserializedStr = (str: string) => {
  const result = []
  for (let i = 0; i < str.length; i += 2) {
    const chunk = str.slice(i, i + 2)
    const { axis: axisIndex, score } = urlSerializer.decode(chunk)
    const axis = Object.keys(axes)[axisIndex]
    result.push({ axis, score })
  }
  return result
}

const nextQuestion = (mult: number) => {
  answers.value[currentQuestionId.value] = mult
  currentQuestionIndex.value++
}
</script>

<template>
  <i18n-t
    keypath="question_x_of_n"
    scope="global"
    tag="span"
    class="text-2xl my-4"
  >
    <template v-slot:x>
      <span>{{ currentQuestionIndex + 1 }}</span>
    </template>
    <template v-slot:n>
      {{ questionsIds.length }}
    </template>
  </i18n-t>
  <h2 class="text-2xl my-4 min-h-[3lh]">
    {{ currentQuestion }}
  </h2>
  <div class="flex flex-col gap-4 mt-16 max-w-[256px] m-auto">
    <UButton color="neutral" size="xl" @click="nextQuestion(1)">
      {{ $t('strong_agree') }}
    </UButton>
    <UButton color="neutral" size="xl" @click="nextQuestion(2 / 3)">
      {{ $t('agree') }}
    </UButton>
    <UButton color="neutral" size="xl" @click="nextQuestion(0)">
      {{ $t('neutral') }}
    </UButton>
    <UButton color="neutral" size="xl" @click="nextQuestion(-2 / 3)">
      {{ $t('disagree') }}
    </UButton>
    <UButton color="neutral" size="xl" @click="nextQuestion(-1)">
      {{ $t('strong_disagree') }}
    </UButton>

    <UButton
      color="neutral"
      size="xl"
      @click="prevQuestion"
      v-if="currentQuestionIndex > 0"
    >
      {{ $t('prev_question') }}
    </UButton>
    <UButton color="neutral" size="xl" to="/" v-if="currentQuestionIndex === 0">
      {{ $t('back_home') }}
    </UButton>
    <p>{{ quizResults }}</p>
    <p>{{ deserializedStr(quizResults) }}</p>
  </div>
</template>

<style></style>
