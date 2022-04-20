<template>
  <div class="my-container">
    <h1>Todo List</h1>
    <form class="form" @submit="createCard">
      <div class="form-group">
        <input class="form form-input" placeholder="name" />
        <hr />
        <button class="btn btn-success">Concluir</button>
      </div>
    </form>
  </div>
</template>

<script>
// import { useStore } from "vuex";
// import { computed } from "vue";
export default {
  name: "CreatePage",
  setup() {
    // const store = useStore();
  },
  methods: {
    createCard() {
      this.store.mutations.createCard
    },
  },
};
</script>

<style src="./styles.scss" lang="scss" scoped />
