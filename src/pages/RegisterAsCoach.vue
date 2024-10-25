<template>
  <div class="register-container">
    <h1 class="register-as-coach">Register as a Coach!</h1>
    <base-card>
      <form @submit.prevent="submitForm" class="register-form">
        <div class="form-group">
          <label for="firstName">First Name</label>
          <input type="text" id="firstName" v-model="newCoach.firstName" />
        </div>
        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input type="text" id="lastName" v-model="newCoach.lastName" />
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <textarea
            id="description"
            rows="5"
            v-model="newCoach.description"
          ></textarea>
        </div>
        <div class="form-group">
          <label for="hourlyRate">Hourly Rate</label>
          <input type="number" id="hourlyRate" v-model="newCoach.rate" />
        </div>
        <div class="form-group">
          <label>Areas of Expertise</label>
          <div class="checkbox-group">
            <label
              ><input
                type="checkbox"
                value="Frontend"
                v-model="newCoach.areas"
              />
              Frontend Development</label
            >
            <label
              ><input
                type="checkbox"
                value="Backend"
                v-model="newCoach.areas"
              />
              Backend Development</label
            >
            <label
              ><input type="checkbox" value="Career" v-model="newCoach.areas" />
              Career Advisory</label
            >
          </div>
          <div class="form-group">
            <label for="email">Email Address</label>
            <input type="text" id="email" v-model="newCoach.email" />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="newCoach.password" />
          </div>
          <div
            class="form-group"
            :class="{
              'wrong-password': newCoach.password !== repeatPassword,
            }"
          >
            <label for="password">Repeat Password</label>
            <input
              type="password"
              id="repeatPassword"
              v-model="repeatPassword"
            />
          </div>
        </div>
        <button type="submit" class="submit-button">Register</button>
      </form>
    </base-card>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
export default {
  data() {
    return {
      newCoach: {
        id: uuidv4(),
        firstName: '',
        lastName: '',
        description: '',
        rate: null,
        areas: [],
        email: '',
        password: '',
      },
      repeatPassword: '',
    };
  },

  methods: {
    submitForm() {
      if (this.newCoach.password === this.repeatPassword) {
        this.$store.dispatch('coaches/pushCoach', this.newCoach);
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
.register-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.register-as-coach {
  font-family: 'ADLaM Display', sans-serif;
  font-size: 2.2em;
  color: #444444;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 20px; /* Adjusted spacing below the title */
  text-align: center;
}

.register-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 500px; /* Make the form wider */
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

.checkbox-group {
  display: flex;
  flex-direction: row; /* Ensure checkboxes line horizontally */
  justify-content: flex-start; /* Align items to the left */
  align-items: center; /* Center items vertically */
  gap: 15px; /* Space between the checkbox and label */
  margin-bottom: 30px; /* Increased space below the checkboxes */
}

.checkbox-group label {
  display: flex;
  align-items: center; /* Keeps label text aligned with the checkbox */
  margin-right: 20px; /* Space between each label */
}

.submit-button {
  padding: 12px 20px;
  background-color: #adff2f; /* Green-yellow background */
  color: #444444;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.2em;
  text-transform: uppercase;
  font-weight: bold;
  transition: background-color 0.3s ease;
  margin-top: 20px; /* Added space above the button */
}

.submit-button:hover {
  background-color: #355604; /* Dark green on hover */
}
</style>
