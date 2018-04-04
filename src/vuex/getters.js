export default {
  timesLibertadores: state => state.times.slice(0, 6),
  timesRebaixados: state => state.times.slice(16, 20)
}
