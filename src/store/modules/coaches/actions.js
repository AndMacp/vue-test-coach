export default {
  async pushCoach(context, coachData) {
    console.log(coachData.id);

    const res = await fetch(
      `https://coachfindertest-26368-default-rtdb.europe-west1.firebasedatabase.app/allCoaches/${coachData.id}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(coachData),
        headers: { 'Content-Type': 'application/json' },
      }
    );

    if (!res.ok) return;
    context.commit('addNewCoach', coachData);
  },

  async setAllCoaches(context) {
    const res = await fetch(
      'https://coachfindertest-26368-default-rtdb.europe-west1.firebasedatabase.app/allCoaches.json'
    );
    const data = await res.json();

    context.commit('addCoachesFromFirebase', data);
  },

  isAuthorized(context, id) {
    context.commit('loggedIn', id);
  },
};
