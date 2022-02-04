<template>
  <div
    class="memory-card"
    :class="card.isFlipped ? 'flip' : ''"
    :style="{ order: card.order }"
    @click="$emit('flipCard', card.id)"
  >
    <img
      className="front-face"
      :src="`/src/assets/images/${card.image}`"
      alt="Card"
    />
    <img
      className="back-face"
      src="../assets/images/js-badge.svg"
      alt="JS Badge"
    />
  </div>
</template>

<script>
export default {
  props: ["card"],
  emits: ["flipCard"],
};
</script>
