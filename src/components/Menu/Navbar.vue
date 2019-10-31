<template>
  <div>
    <div>
      <ul class="tabs tabs-fixed-width tab-demo z-depth-1">
        <li class="tab"><a v-on:click="Articulos" href="#test1">Articulos</a></li>
        <li class="tab"><a v-on:click="Lector" href="#test1">Lector</a></li>
        <li class="tab"><a v-on:click="Historial" href="#test1">Historial  <small v-if="countArticulos > 0" >{{countArticulos}}</small></a></li>
      </ul>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  methods:
  {
    Articulos()
    {
      this.$router.push({name: 'articulos'});
    },
    Lector()
    {
      this.$router.push({name: 'lector'})
    },
    Perfil()
    {
      this.$router.push({name: 'perfil'})
    },
    Historial()
    {
      this.$router.push({name: 'historial'})
    },
  },
  computed:
  {
    countArticulos()
    {
        return this.$store.getters.getArticulo.length;  
      }
  },
  created()
  {
     $(document).ready(function(){
        $('.tabs').tabs();
      });
  },
  mounted()
  {
    this.Articulos();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
