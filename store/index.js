export const state = () => ({
  category: 'nez',
  baseFolder: ''
})

export const mutations = {
  setCategory (state, category) {
    state.category = category
  },
  setBaseFolder(state, folder) {
    state.baseFolder = folder
  }
}

export const actions = {
  async nuxtServerInit ({commit }, { isDev }) {
    let baseFolder = '/'

    // if(!isDev) {
    //   baseFolder = '/manolo/'
    // }
    commit('setBaseFolder', baseFolder)
  }
}

