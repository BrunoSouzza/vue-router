<template>
  <div class="usuario-detalhe">
      <h3>Usuário Detalhe</h3>
      <hr>
      <p>Parametro: <strong>{{ id }}</strong></p>   
      <!-- <router-link 
        tag="button"
        primario 
        :to="`/usuario/${id}/editar`">
        Editar
      </router-link> -->
      <router-link
        tag="button"
        primario 
        :to="{ name: 'rotaEditar', params: { id }, query: { completo: true, lingua: 'pt-br'} }"
      >
        Editar
      </router-link>
  </div>
</template>

<script>
export default {
  props: ['id'],
};
</script>

<style>
</style>
