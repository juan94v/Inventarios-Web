<template>
  <div>
     <ul class="collection" v-for="articulo in articulos" :key="articulo.idarticulo">
        <li class="collection-item avatar" v-on:click="hola(articulo)">
          <i class="material-icons circle red"></i>
          <span class="title">{{articulo.nomarticulo}}</span>
          <p>Cantidad: {{articulo.cantidad}} <br>
             Descripcion: {{articulo.descripcion}}
          </p>
          <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
        </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      articulos: []
    }
  },
  methods:
  {
    hola(articulo)
    {
      console.log(articulo)
      this.addArticulo(articulo);
    },
    consultar()
    {
      this.$http.get('articulos').then(respuesta=>{return respuesta.json()})
            .then(respuestaJson=>{
                if (respuestaJson.resp=='excelente') {
                  this.articulos = respuestaJson.result;
                  
                  if(this.articulos.length == 0)
                  {
                    // toastr.clear();
                    // toastr.info("No hay articulos");
                    this.articulos = '';
                  }

                }
          }).catch(error=>{
                // toastr.clear();
                // toastr.warning("Ups! algo anduvo mal. . .")
                console.log(error);
            });
    },
    ...mapActions(['addArticulo'])
  },
  created()
  {
    this.consultar();
     $(document).ready(function(){
        $('.tabs').tabs();
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
