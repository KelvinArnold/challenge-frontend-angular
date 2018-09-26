
import channels from './../../../../service/json/grade-canais.json';

const actions = {
  GET_CHANNELS({commit}) {
    return new Promise(() => {
      setTimeout(() => {
        commit('SET_CHANNELS', { channels });
      }, 2000);
    })
  }
}
// Export
export default actions;