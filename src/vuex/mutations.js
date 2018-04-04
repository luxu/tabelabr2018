export default {

  'set-times' (state, times) {
    state.times = times
  },
  update (state, time) {
    let index = state.times.findIndex(element => time.id === element.id)
    if (index !== -1) {
      state.times[index] = time
    }
  },
  'show-time-list' (state) {
    state.view = 'tabela'
  },
  'show-time-novojogo' (state) {
    state.view = 'novojogo'
  },
  'show-time-zona' (state) {
    state.view = 'zona'
  }
}
