const homePath = 'projects'

export const state = () => ({
  styles: {
    homeAppBarHeight: 56
  },
  loggedIn: {
    homePath: {
      name: homePath
    },
    rememberPath: {
      name: homePath,
      params: {}
    },
    redirectPaths: [
      'index',
      'signup',
      'login'
    ]
  },
  project: {
    current: null,
    list: []
  },
  user: {
    current: null
  },
  auth: {
    token: null,
    expires: 0,
    payload: {}
  },
  toast: {
    msg: null,
    color: 'error',
    timeout: 4000
  }
})

export const getters = {

}

export const mutations = {
  setProjectList (state, payload) {
    state.project.list = payload
  },
  setCurrentProject (state, payload) {
    state.project.current = payload
  },
  setCurrentUser (state, payload) {
    state.user.current = payload
  },
  setAuthToken (state, payload) {
    state.auth.token = payload
  },
  setAuthExpires (state, payload) {
    state.auth.expires = payload
  },
  setAuthPayload (state, payload) {
    state.auth.payload = payload
  },
  setToast (state, payload) {
    state.toast = payload
  },
  setRememberPath (state, payload) {
    state.loggedIn.rememberPath = payload
  }
}

export const actions = {
  getProjectList ({ commit }, projects) {
    projects = projects || []
    commit('setProjectList', projects)
  },
  getCurrentProject ({ state, commit }, params) {
    let currentProject = null
    if (params && params.id) {
      const id = Number(params.id)
      currentProject = state.project.list.find(project => project.id === id) || null
    }
    commit('setCurrentProject', currentProject)
  },
  getCurrentUser ({ commit }, user) {
    commit('setCurrentUser', user)
  },
  getAuthToken ({ commit }, token) {
    commit('setAuthToken', token)
  },
  getAuthExpires ({ commit }, expires) {
    expires = expires || 0
    commit('setAuthExpires', expires)
  },
  getAuthPayload ({ commit }, jwtPayload) {
    jwtPayload = jwtPayload || {}
    commit('setAuthPayload', jwtPayload)
  },
  getToast ({ commit }, { msg, color, timeout }) {
    color = color || 'error'
    timeout = timeout || 4000
    commit('setToast', { msg, color, timeout })
  },
  // ログイン前ユーザーがアクセスしたルートを記憶する
  getRememberPath ({ state, commit }, { name, params }) {
    if (state.loggedIn.redirectPaths.include(name)) {
      name = state.loggedIn.homePath.name
    }
    params = params || {}
    commit('setRememberPath', { name, params })
  }
}
