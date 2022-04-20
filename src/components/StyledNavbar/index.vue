<template>
  <header class="navbar my-navbar">
    <h1>Todo List</h1>
    <div class="router-area">
     
      <router-link class="nav-link" to="/">Home </router-link>
      <router-link class="nav-link" to="/create">Create </router-link>
    </div>
  </header>
</template>

<script>

export default {
  name: "StyledNavbar",
 
};
</script>

<style src="./styles.scss" lang="scss" scoped />
