<template>
  <div class="my-card">
    <h2>{{msg}}</h2>
    <div class="edit-area">
        <p>editar</p>
        <p>excluir</p>
    </div>
  </div>
</template>

<script>

export default {
  name: "CCard",
  props:{
      msg: String
  }
 
};
</script>

<style src="./styles.scss" lang="scss" scoped />
