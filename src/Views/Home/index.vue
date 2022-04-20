<template>
  <div class="home-area">
    <div
      class="list-cards"
      v-for="card in cards"
      :key="card.id"
      :value="card.id"
    >
      <Card :msg="card.nome" />
    </div>
  </div>
</template>

<script>
import Card from "../../components/StyledCard";
import {  computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "MyHome",
  components: {
    Card,
  },
  setup() {
    const store = useStore();
    const cards = computed(() => store.getters.getCards);

    return {
      cards,
    };
  },
};
</script>

<style src="./styles.scss" lang="scss" scoped />
