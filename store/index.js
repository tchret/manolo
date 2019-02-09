export const state = () => ({
  backgroundColor: "#000000"
})

export const mutations = {
  setBackgroundColor (state, hex) {
    state.backgroundColor = hex
  }
}

