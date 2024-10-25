<template>
  <header>
    <h1 class="find-coach" @click="goToStart">CoachFinder</h1>
    <nav class="nav-items">
      <h2>
        <router-link to="allCoaches" class="button-link"
          >All Coaches</router-link
        >
      </h2>

      <h2 v-if="!isLoggedIn">
        <router-link to="authorize" class="button-link">Log In</router-link>
      </h2>
      <h2 v-else>
        <router-link to="requests" class="button-link">Requests</router-link>
      </h2>
      <h2 v-if="isLoggedIn">
        <router-link @click="logout" to="allCoaches" class="button-link"
          >Log Out</router-link
        >
      </h2>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters['getState'];
    },
  },
  methods: {
    goToStart() {
      this.$router.push('/allCoaches');
    },
    logout() {
      this.$store.dispatch('notAuthorized');
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between; /* distribute space between nav and Find a Coach */
  align-items: center; /* aligns items vertically */
  width: 100%; /* ensures header takes full width */
  background-color: #adff2f; /* green-yellow color */
  margin: 0; /* removes default margin */
  padding: 0; /* removes default padding */
}

nav {
  display: flex;
  justify-content: flex-end; /* aligns nav items to the right */
  flex-grow: 1; /* makes nav take up all available space */
}

h1 {
  margin: 0 10px; /* Adjust this to control spacing between items */
  padding: 20px; /* adds some padding for better appearance */
}

h2 {
  margin: 0 30px; /* Adjust this to control spacing between items */
  padding: 10px; /* adds some padding for better appearance */
}

/* Find a Coach specific styling */
.find-coach {
  cursor: pointer;
  font-family: 'Audiowide', cursive;
  font-size: 1.5em; /* Make it larger */
  color: #444444;
  font-weight: bold; /* Make it bold */
  text-transform: uppercase; /* Make text uppercase */
  letter-spacing: 2px; /* Add spacing between letters */
}

/* Styling for navigation items */
.nav-items {
  font-family: 'Audiowide', cursive;
  font-size: 0.8em; /* Slightly smaller text */
  color: #444444;
  font-weight: bold; /* Make it bold */
  text-transform: uppercase; /* Make text uppercase */
  letter-spacing: 2px; /* Add spacing between letters */
}

/* Style for button-like router-links */
.button-link {
  display: inline-block;
  color: #444444;
  padding: 10px 20px; /* Padding to make it look like a button */
  border-radius: 5px; /* Rounded corners */
  text-decoration: none; /* Remove underline */
  font-size: 1em;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease; /* Smooth hover transition */
}

.button-link:hover {
  color: #fc21f1;
}
</style>
