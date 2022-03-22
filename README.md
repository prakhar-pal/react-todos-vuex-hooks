# How to connect Vuex to React components ?

## Use a package like react-vuex
  Similar to how there's `react-redux` for `redux`, for `vuex` there's `react-vuex` and it has similar API to that of `react-redux` but with some additions, like
  `mapGettersToProps` and `mapCommitToProps`. Fans of `react-redux` will find themeselves at home. It works and it's well tested but it's not the prettiest solution. Importing `connect` then creating a container component is a bit tedious when we can instead use hooks.

## Use a custom hook
  This repository contains a custom hook called `useVuex` in `src/components/hooks` folder, this hook returns a vuex store's `dispatch` and `commit` functions as well as current `state` and `getters`. Additionally we can also provide `stateSelector` and `getterSelector` functions which allows us to subscribe to subset of state and getters. No need to use higher order components!

# How to run this project?
  Please refer to DEVELOPMENT.md file.

&copy; MIT
