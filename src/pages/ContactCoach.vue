<template>
  <base-card>
    <h2>{{ coach.firstName }} {{ coach.lastName }}</h2>
    <h3>${{ coach.rate }}/hour</h3>
    <div class="areas">
      <span
        class="area"
        v-for="area in coach.areas"
        :key="area"
        :class="{
          frontend: area === 'Frontend',
          backend: area === 'Backend',
          career: area === 'Career',
        }"
        >{{ area }}</span
      >
    </div>
    <base-card>{{ coach.description }}</base-card>
  </base-card>
  <h1 class="text">Interested? Reach out now!</h1>
  <base-card>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="email">Email Address</label>
        <input type="text" id="email" v-model="contactForm.email" />
      </div>
      <div class="form-group">
        <label for="Message">Message</label>
        <textarea
          id="Message"
          rows="5"
          v-model="contactForm.message"
        ></textarea>
      </div>
      <button type="submit" class="submit-button">Contact</button>
    </form>
  </base-card>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      contactForm: {
        email: '',
        message: '',
        id: null,
      },
      coach: [],
    };
  },

  methods: {
    findCoach() {
      this.coach = this.$store.getters['coaches/getCoaches'].find(
        (coachId) => coachId.id === this.id
      );
      return this.coach;
    },

    submitForm() {
      this.contactForm.id = this.coach.id;
      this.$store.dispatch('requests/setRequests', this.contactForm);
      this.$router.replace('/allCoaches');
    },
  },

  mounted() {
    return this.findCoach();
  },
};
</script>

<style scoped>
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

.areas {
  display: flex;
  gap: 10px;
  flex-wrap: wrap; /* Allow areas to wrap if there's not enough space */
  margin-top: 10px;
}

.area {
  background-color: #f0f0f0; /* Light gray background for the box */
  padding: 5px 10px;
  border-radius: 5px; /* Rounded corners */
  color: #333; /* Dark text color */
  font-size: 0.9em;
  font-weight: bold;
  border: 1px solid #ddd; /* Light border for better contrast */
}

.frontend {
  background-color: aqua; /* Frontend specific background */
}

.backend {
  background-color: lightgreen; /* Backend specific background */
}

.career {
  background-color: rgb(225, 225, 38); /* Career specific background */
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
