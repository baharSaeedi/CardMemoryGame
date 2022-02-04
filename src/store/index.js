import { createStore } from "vuex";

export default createStore({
  state: {
    cards: [
      {
        id: 1,
        name: "aurelia",
        image: "aurelia.svg",
        isFlipped: false,
        order: Math.floor(Math.random() * 12),
      },
      {
        id: 2,
        name: "aurelia",
        image: "aurelia.svg",
        isFlipped: false,
        order: Math.floor(Math.random() * 12),
      },
      {
        id: 3,
        name: "angular",
        image: "angular.svg",
        isFlipped: false,
        order: Math.floor(Math.random() * 12),
      },
      {
        id: 4,
        name: "angular",
        image: "angular.svg",
        isFlipped: false,
        order: Math.floor(Math.random() * 12),
      },
      {
        id: 5,
        name: "ember",
        image: "ember.svg",
        isFlipped: false,
        order: Math.floor(Math.random() * 12),
      },
      {
        id: 6,
        name: "ember",
        image: "ember.svg",
        isFlipped: false,
        order: Math.floor(Math.random() * 12),
      },
      {
        id: 7,
        name: "vue",
        image: "vue.svg",
        isFlipped: false,
        order: Math.floor(Math.random() * 12),
      },
      {
        id: 8,
        name: "vue",
        image: "vue.svg",
        isFlipped: false,
        order: Math.floor(Math.random() * 12),
      },
      {
        id: 9,
        name: "backbone",
        image: "backbone.svg",
        isFlipped: false,
        order: Math.floor(Math.random() * 12),
      },
      {
        id: 10,
        name: "backbone",
        image: "backbone.svg",
        isFlipped: false,
        order: Math.floor(Math.random() * 12),
      },
      {
        id: 11,
        name: "react",
        image: "react.svg",
        isFlipped: false,
        order: Math.floor(Math.random() * 12),
      },
      {
        id: 12,
        name: "react",
        image: "react.svg",
        isFlipped: false,
        order: Math.floor(Math.random() * 12),
      },
    ],
    flipedCard: [],
    trueFlip: [],
  },
  mutations: {
    flipCard(state, id) {
      let isFlipped = false;
      state.cards.map((card) => {
        if (card.id === id && state.flipedCard.length < 2) {
          if (
            !state.trueFlip.find((trueCard) => {
              return trueCard.id === card.id;
            })
          ) {
            card.isFlipped = true;
            state.flipedCard.push(card);
            isFlipped = true;
          }
        }
      });
      setTimeout(function () {
        if (isFlipped && state.flipedCard.length == 2) {
          if (state.flipedCard[0].name === state.flipedCard[1].name) {
            state.trueFlip.push(...state.flipedCard);
            state.flipedCard = [];
            if (state.trueFlip.length == 12) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "You Won!",
                showConfirmButton: false,
                timer: 2000,
              });
            }
          } else {
            state.cards.map((card) => {
              if (
                card.id === state.flipedCard[0].id ||
                card.id === state.flipedCard[1].id
              ) {
                card.isFlipped = false;
              }
            });
            state.flipedCard = [];
          }
        }
      }, 2000);
    },
  },
});
