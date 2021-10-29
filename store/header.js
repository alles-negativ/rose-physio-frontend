// header store initialisation
export const state = () => ({
    title: ''
  })
  
export const mutations = {
    setTitle(state, title) {
        state.title = title
    }
}

export const getters = {
    getTitle: (state) => state.title
}