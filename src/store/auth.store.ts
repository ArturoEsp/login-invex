import { createStore } from "vuex";

export type Props = {
  token?: string;
  tokenId?: string;

}

export default createStore<Props>({
  state() {
    return { token: '', tokenId: '' }
  },
  mutations: {
    setData(prev, payload: Props) {
      prev.token = payload.token;
      prev.tokenId = payload.tokenId;
    },
    clean(prev) {
      prev.token = '';
      prev.tokenId = '';
    }
  }
});