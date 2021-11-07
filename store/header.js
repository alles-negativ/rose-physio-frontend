// header store initialisation
export const state = () => ({
    title: '',
    text: '',
    sitetitle: ''
  })
  
export const mutations = {
    setTitle(state, title) {
        state.title = title
    },
    setText(state, text) {
        state.text = text
    },
    setSitetitle(state, sitetitle) {
        state.sitetitle = sitetitle
    }
}

export const getters = {
    getTitle: (state) => state.title,
    getText: (state) => state.text,
    getSitetitle: (state) => state.sitetitle
}