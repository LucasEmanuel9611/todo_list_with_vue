import Vuex from "vuex";

const store = new Vuex.Store({
  state: {
    cards: [
      { nome: "card1", id: 0 },
      { nome: "card2", id: 1 },
      { nome: "card3", id: 2 },
    ],
  },
  mutations: {
    create(state, name) {
      state.cards.push({nome: name, id: state.cards.length})
    },
  },
  getters: {
    getCards: (state) => state.cards,
  },
});

export default store;
