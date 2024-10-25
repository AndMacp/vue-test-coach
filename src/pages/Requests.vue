<template>
  <base-card class="hello-coach">
    <p>Hello, {{ currentCoach.firstName }} {{ currentCoach.lastName }}</p>
    <base-spinner v-if="isLoading"></base-spinner>
  </base-card>
  <div v-for="request in requests" :key="request">
    <base-card class="requests">
      <p><strong>Email: </strong>{{ request.email }}</p>
      <p><strong>Message: </strong>{{ request.message }}</p>
    </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentCoach: {},
      requests: [],
      isLoading: false,
    };
  },
  methods: {
    async test() {
      this.isLoading = true;
      const coachId = await this.$store.getters['requests/getUserId'];
      this.requests = await this.$store.getters['requests/getRequests'].filter(
        (coach) => coach.id === coachId
      );
      await this.$store.dispatch('requests/getRequests', coachId);

      this.requests = this.$store.getters['requests/getRequests'];

      this.currentCoach = await this.$store.getters['coaches/getCoaches'].find(
        (coach) => coach.id === coachId
      );
      this.isLoading = false;
    },
  },
  created() {
    this.test();
  },
};
</script>

<style scoped>
.hello-coach {
  text-align: center;
  font-family: 'Audiowide', cursive;
  font-size: 1.5em; /* Make it larger */
  color: #444444;
  font-weight: bold; /* Make it bold */
  text-transform: uppercase; /* Make text uppercase */
  letter-spacing: 2px; /* Add spacing between letters */
}

.requests {
  font-family: 'Audiowide';
  font-size: 1.5em; /* Make it larger */
  color: #444444;

  letter-spacing: 1px; /* Add spacing between letters */
}
</style>
