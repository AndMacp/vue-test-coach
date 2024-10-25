export default {
  async setRequests(context, data) {
    const res = fetch(
      `https://coachfindertest-26368-default-rtdb.europe-west1.firebasedatabase.app/requests/${data.id}.json`,
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application-json' },
      }
    );

    if (!res.ok) return;
    context.commit('setRequests', data);
  },

  async getRequests(context, id) {
    const res = await fetch(
      `https://coachfindertest-26368-default-rtdb.europe-west1.firebasedatabase.app/requests/${id}.json`
    );

    const data = await res.json();

    context.commit('setRequests', data);
  },

  setLoggedInUser(context, data) {
    context.commit('setLoggedInUser', data);
  },
};
