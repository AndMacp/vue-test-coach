export default {
  addNewCoach(state, coachData) {
    state.allCoaches.push(coachData); // Add new coach to allCoaches array
  },

  addCoachesFromFirebase(state, data) {
    for (const key in data) {
      const coachExists = state.allCoaches.some((coach) => coach.id === key);

      if (!coachExists) {
        state.allCoaches.push(data[key]);
      }
    }
  },

  loggedIn(state, coachId) {
    state.allCoaches.find((coach) => {
      if (coach.id === coachId) coach.loggedIn = !coach.loggedIn;
    });
  },
};
