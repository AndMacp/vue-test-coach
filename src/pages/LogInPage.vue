<template>
  <base-card>
    <h1 class="text">CoachFinder</h1>
    <form @submit.prevent="logIn">
      <div class="form-group">
        <label
          >Email Address
          <input type="email" id="email" v-model="email" />
        </label>
      </div>
      <div class="form-group" :class="{ 'wrong-password': correctPass }">
        <label
          >Password
          <input type="password" id="password" v-model="password" />
        </label>
      </div>
      <base-button type="submit" class="submit-button">Log In</base-button>
    </form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      coach: null,
      email: '',
      password: '',
      correctPass: false,
    };
  },

  methods: {
    logIn() {
      if (this.email === '' || this.password === '') {
        return;
      }

      this.coach = this.$store.getters['coaches/getCoaches'].find(
        (coachId) => coachId.email === this.email
      );

      if (!this.coach) return;

      if (this.coach.password !== this.password) this.correctPass = true;
      if (this.coach.password === this.password) {
        this.correctPass = false;
        this.$store.dispatch('coaches/isAuthorized', this.coach.id);
        this.$store.dispatch('requests/setLoggedInUser', this.coach.id);
        this.$store.dispatch('authorized');
        this.$router.replace('/allCoaches');
      }
    },
  },
};
</script>

<style scoped>
.wrong-password {
  display: flex;
  color: red;
  flex-direction: column;
  margin-bottom: 15px; /* Added to increase spacing between form groups */
}

.text {
  font-family: 'Audiowide', cursive;
  font-size: 1.5em; /* Make it larger */
  color: #444444;
  font-weight: bold; /* Make it bold */
  text-transform: uppercase; /* Make text uppercase */
  letter-spacing: 2px; /* Add spacing between letters */

  margin-bottom: 1rem;
  text-align: center;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px; /* Added to increase spacing between form groups */
}

.form-group label {
  font-family: 'Audiowide', cursive;
  font-weight: bold;
  margin-bottom: 5px; /* Space below label for clarity */
}

.form-group input,
.form-group textarea {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1em;
  width: 100%;
  box-sizing: border-box;
  background-color: #f9f9f9;
}
</style>
