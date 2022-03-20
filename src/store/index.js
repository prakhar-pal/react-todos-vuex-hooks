import Vue from 'vue';
import Vuex from 'vuex';
import { actionTypes } from '../actions';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    isIncrementing: false,
    todos: [],
    visibilityFilter: 'SHOW_ALL',
  },
  getters: {
    countGratherThan2: (state/* , getters */) => state.count > 2,
  },
  mutations: {
    increment(state, payload=1) {
      // eslint-disable-next-line no-param-reassign, no-plusplus
      state.count+=payload;
    },
    decrement(state, payload=-1) {
      // eslint-disable-next-line no-param-reassign, no-plusplus
      state.count-=payload;
    },
    incrementStart(state) {
      // eslint-disable-next-line no-param-reassign
      state.isIncrementing = true;
    },
    incrementStop(state) {
      // eslint-disable-next-line no-param-reassign
      state.isIncrementing = false;
    },
    addTodo(state, payload) {
      // eslint-disable-next-line no-param-reassign
      state.todos = [
        ...state.todos,
        {
          id: payload.id,
          text: payload.text,
          completed: false,
        },
      ];
    },
    toggleTodo(state, payload) {
      // eslint-disable-next-line no-param-reassign
      state.todos = state.todos.map((todo) => ((todo.id === payload.id)
        ? { ...todo, completed: !todo.completed }
        : todo));
    },
    setVisibilityFilter(state, payload) {
      // eslint-disable-next-line no-param-reassign
      state.visibilityFilter = payload.filter;
    },
  },
  actions: {
    incrementAsync(context) {
      context.commit('incrementStart');
      return new Promise((resolve) => {
        setTimeout(() => {
          context.commit('increment');
          resolve();
        }, 500);
      }).then(() => context.commit('incrementStop'));
    },
    ADD_TODO({ commit }, payload) {
      commit('addTodo', payload);
    },
    TOGGLE_TODO({ commit }, payload) {
      commit('toggleTodo', payload);
    },
    SET_VISIBILITY_FILTER({ commit }, payload) {
      commit('setVisibilityFilter', payload);
    },
    [actionTypes.INCREMENT]: ({ commit }, payload) => {
      commit("increment", payload);
    },
    [actionTypes.DECREMENT]: ({ commit }, payload) => {
      commit("decrement", payload);
    }
  },
});

export default store;
