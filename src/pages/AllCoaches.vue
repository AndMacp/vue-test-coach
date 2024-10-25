<template>
  <base-card>
    <h1 class="find-your-coach-title">Find Your Coach</h1>
    <div class="checkbox-group">
      <label class="checkbox-label">
        <input
          type="checkbox"
          value="frontend"
          v-model="allAreas.frontend"
        />Frontend
      </label>
      <label class="checkbox-label">
        <input type="checkbox" value="backend" v-model="allAreas.backend" />
        Backend
      </label>
      <label class="checkbox-label">
        <input type="checkbox" value="career" v-model="allAreas.career" />
        Career
      </label>
    </div>
  </base-card>
  <base-card>
    <div class="button-group">
      <base-button @click="refreshFilters">Refresh</base-button>
      <base-button to="/register">Register as Coach</base-button>
    </div>
    <base-spinner v-if="isLoading"></base-spinner>
    <ul v-for="coach in coaches" :key="coach.id">
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
          <base-button
            :to="contactCoach(coach.id)"
            class="contact"
            :color="'Lightgreen'"
            >Contact</base-button
          >
          <base-button :color="'Yellow'" @click="viewDetails(coach.id)"
            >View Details</base-button
          >
        </div>
        <base-card v-if="coach.id === coachId">
          <p>{{ coach.description }}</p>
        </base-card>
      </base-card>
    </ul>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      allAreas: { frontend: true, backend: true, career: true },
      viewCoachDetails: false,
      coachId: null,
      isLoading: false,
      coaches: [],
    };
  },

  methods: {
    async showCoaches() {
      const filteredCoaches = await this.$store.getters[
        'coaches/getCoaches'
      ].filter(
        (coach) =>
          (coach.areas.includes('Frontend') && this.allAreas.frontend) ||
          (coach.areas.includes('Backend') && this.allAreas.backend) ||
          (coach.areas.includes('Career') && this.allAreas.career)
      );
      this.coaches = filteredCoaches;
      this.isLoading = false;
    },

    contactCoach(id) {
      return `/contactCoach/${id}`;
    },

    refreshFilters() {
      this.allAreas.frontend = true;
      this.allAreas.backend = true;
      this.allAreas.career = true;
    },

    viewDetails(id) {
      this.coachId = this.coachId === id ? null : id;
    },
  },

  async created() {
    this.isLoading = true;
    await this.$store.dispatch('coaches/setAllCoaches');
    this.showCoaches();
  },
};
</script>

<style scoped>
.contact {
  margin-left: auto;
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

.button-group {
  display: flex;
  justify-content: space-evenly; /* This positions the buttons on opposite sides */
  padding: 20px; /* Add some padding inside the button group */
}

.find-your-coach-title {
  font-size: 1.8em;
  margin-bottom: 1rem;
  text-align: center;
}

.checkbox-group {
  display: flex;
  gap: 15px; /* Add space between checkboxes */
}

.checkbox-label {
  font-size: 1em;
  display: flex;
  align-items: center;
  gap: 3px; /* Add space between label text and checkbox */
  cursor: pointer;
}
</style>
