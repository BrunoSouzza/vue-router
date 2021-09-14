import Vue from 'vue';
import Router from 'vue-router';

import Inicio from './components/Inicio';
import Produto from './components/produto/Produto';
import Usuario from './components/usuario/Usuario';
import UsuarioLista from './components/usuario/UsuarioLista';
import UsuarioEditar from './components/usuario/UsuarioEditar';
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'rotaInicio',
      path: '/',
      component: Inicio,
    },
    {
      path: '/usuario',
      component: Usuario,
      children: [
        {
          path: '',
          component: UsuarioLista,
        },
        {
          path: ':id',
          component: UsuarioDetalhe,
          props: true,
        },
        {
          path: ':id/editar',
          component: UsuarioEditar,
          name: 'rotaEditar',
          props: true,
        },
      ],
    },
    {
      path: '/produto/:id',
      component: Produto,
      props: true,
    },
  ],
});
