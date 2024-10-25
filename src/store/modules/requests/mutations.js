export default {
  setRequests(state, data) {
    state.requests = [];
    for (const key in data) {
      if (state.loggedInUser === data[key].id);
      state.requests.push({
        email: data[key].email,
        message: data[key].message,
      });
    }
  },

  setLoggedInUser(state, data) {
    state.loggedInUser = data;
  },
};
