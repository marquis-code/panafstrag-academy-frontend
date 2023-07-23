
export const namespaced = true

export const state = () => ({
  auth: null,
  isLoggedIn: false,
  events: [],
  members: [],
  newsRoom: [],
  publications: [],
  products: []

})

export const mutations = {
  setAuthUser: (state, item) => {
    state.auth = item
    if (state.auth !== null) {
      state.isLoggedIn = true
    }
  },
  resetState: (state) => {
    state.auth = null
    state.isLoggedIn = false
    state.events = []
    state.members = []
    state.newsRoom = []
    state.publications = []
    state.products = []
  },
  setProducts: (state, item) => {
    state.products = item
  },
  setPublications: (state, item) => {
    state.publications = item
  },
  setNewsRoom: (state, item) => {
    state.newsRoom = item
  },
  setMembers: (state, item) => {
    state.members = item
  },
  setEvents: (state, item) => {
    state.events = item
  }
}

export const getters = {
  getProducts: (state) => {
    return state.products
  }
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    if (req.session.user) {
      commit('user', req.session.user)
    }
  }
}
