// header store initialisation
export const state = () => ({
    title: '',
    text: ''
  })
  
export const mutations = {
    setTitle(state, title) {
        state.title = title
    },
    setText(state, text) {
        state.text = text
    }
}

export const getters = {
    getTitle: (state) => state.title,
    getText: (state) => state.text
}