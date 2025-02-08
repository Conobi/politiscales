<template>
  <canvas ref="canvas" width="512" height="256"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

interface Axis {
  left: number
  right: number
  names: [string, string]
}

interface Props {
  axes: Axis[]
}

const props = defineProps<Props>()
const canvas = ref<HTMLCanvasElement | null>(null)
const sprite = new Image()

const drawCanvas = () => {
  const ctx = canvas.value?.getContext('2d')
  if (!ctx) return

  ctx.clearRect(0, 0, canvas.value!.width, canvas.value!.height)

  // Draw the sprite image
  ctx.drawImage(sprite, 0, 0, 512, 256)

  // Draw axis values
  ctx.font = '16px Arial'
  ctx.fillStyle = 'black'
  props.axes.forEach((axis, index) => {
    const leftPercentage = (axis.left * 100).toFixed(0)
    const rightPercentage = (axis.right * 100).toFixed(0)
    const yPosition = 20 + index * 20

    ctx.fillText(`${axis.names[0]}: ${leftPercentage}%`, 10, yPosition)
    ctx.fillText(`${axis.names[1]}: ${rightPercentage}%`, 266, yPosition)
  })
}

onMounted(() => {
  sprite.src = '/images/flag_sprites.png'
  sprite.onload = () => {
    drawCanvas()
  }
})

watch(() => props.axes, drawCanvas, { deep: true })
</script>

<style scoped>
canvas {
  border: 1px solid black;
}
</style>
