export default {
  addRequest(state, payload) {
    state.requests.push(payload);
  },
  setRequests(state, payload) {
    state.requests = payload;
  },
  setFetchTimeStamp(state) {
    state.lastFetch = new Date().getTime(); // time snapshot in ms
  }
};
