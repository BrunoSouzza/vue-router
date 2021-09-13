<template>
  <div class="produto">
      Produto
      <hr>
      <h6>Parametro: <strong>{{ id }}</strong></h6>
  </div>
</template>

<script>
export default {
  props: ['id'],
  //   data() {
  //     return {
  //       id: 0, //this.$route.params.id,
  //     };
  //   },
  //Somente quando a navegação entre o mesmo componente mas o parametro é outro, ex: '/usuario/1' e 'usuario/2'
  // sem o watch, ao sair do usuario/1 e tentar ir direto para usuario/2, valor não é alterado.
  //   watch: {
  //     $route(to) {
  //       this.id = to.params.id;
  //     },
  //   },
};
</script>

<style>
</style>
