<template>
  <div class="usuario">
      Usuario
      <hr>
      <button sucesso @click="voltarInicio">Voltar</button>
      <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    voltarInicio() {
      this.$router.push('/');
      //this.$router.push({ path: '/' });
    },
  },
};
</script>

<style>
</style>
