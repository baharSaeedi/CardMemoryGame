<template>
  <section className="memory-game">
    <Card
      v-for="card in cards"
      :card="card"
      :key="card.id"
      @flipCard="flipCard"
    ></Card>
  </section>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import Card from "./Card.vue";
export default {
  setup() {
    const store = useStore();

    return {
      cards: computed(() => store.state.cards),
      flipCard: (id) => store.commit("flipCard", id),
    };
  },
  components: {
    Card,
  },
};
</script>
