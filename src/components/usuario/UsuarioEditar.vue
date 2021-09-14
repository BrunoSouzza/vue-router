<template>
  <div class="usuario-editar">
      <h3>Usuário Editar</h3>
      <hr>
      <p>Params: <strong>{{ id }}</strong></p>
      <hr>
      Quers:
      <p>Completo: <strong>{{$route.query.completo}}</strong> | Lingua: <strong>{{$route.query.lingua}}</strong></p>
  </div>
</template>

<script>
export default {
  props: ['id'],
};
</script>

<style>
</style>
