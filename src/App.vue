<template>
  <v-app id="app">
	<link rel="stylesheet" href="https://use.typekit.net/qtj3yru.css">
	<link href="https://fonts.googleapis.com/css2?family=Sarabun:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="https://use.typekit.net/qtj3yru.css">
	<link rel="stylesheet" href="https://use.typekit.net/qtj3yru.css">
	<link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>

<style>
	@import './styles/fonts.css';
</style>