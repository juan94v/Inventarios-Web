<template>
	<div>
		<div class="row" style="margin-top: 20px;">
			<div class="col s12">
				<a class="waves-effect waves-light btn" v-on:click="lector">Abrir camara  <i class="material-icons">camera_alt</i></a>
			</div>
		</div>

		<div v-if="articulo.nomarticulo">
			<div class="row">
			   	<div class="col s12">
			        <div class="input-field col s12">
			          <i class="material-icons prefix">mode_edit</i>
			          <input autofocus id="cantidad" placeholder="Ingrese nueva cantidad" type="number" class="validate" v-model="articulo.cantidad">
			          <label for="cantidad">Cantidad</label>
			        </div>
			   	</div> 
	  		</div>

	  		<div class="row">
	  			<div class="col s3 left-align">
	  				<p>Nombre:</p>
	  			</div>
	  			<div class="col s5">
	  				<p>{{articulo.nomarticulo}}</p>
	  			</div>
	  		</div>

	  		<div class="row">
	  			<div class="col s13 left-align">
	  				<p>descripcion</p>
	  			</div>
	  			<div class="col s5">
	  				<p>{{articulo.descripcion}}</p> 
	  			</div>
	  		</div>


	  		<div class="row">
	  			<div class="col s12 ">
					<a class="waves-effect waves-light btn" v-on:click="modificar">Modificar</a>
				</div>
	  		</div>
		</div>

		<div v-if="!articulo.nomarticulo" class="row">
  			<div class="col s13 left-align">
  				<p>Codigo de barras Leido</p>
  			</div>
  			<div class="col s5">
  				<p>{{barcode}}</p> 
  			</div>
  		</div>
	</div>
</template>

<script>
	import { mapActions } from 'vuex';

	export default {
		data(){
			return {
				articulo: {
					nomarticulo: '',
					descripcion: '',
					cantidad: '',
					barcode: ''
				},
				barcode: ''
			}
		},
		methods:
				{
					modificar()
					{
						console.log(this.articulo.cantidad)
						this.$http.put('articulos/barcode/'+ this.articulo.barcode, {
							articulo: this.articulo
						}).then(respuesta => {return respuesta.json();}).
						then(respuestaJson=>{
							if(respuestaJson.res == true)
							{
								M.toast({html:'Cantidad modificada',displayLength:2000});
							}
							else
							{
								M.toast({html:'Sucedio un problema',displayLength:2000});
							}
						});
					},
					prueba()
					{
						console.log("Estoy en focus")
						
					},
					lector()
					{
						var that = this;
						console.log("entrando a Lector...");
						cordova.plugins.barcodeScanner.scan(
					    function (result) {
					    	console.log("dentro de la function")
					     	that.articulo.barcode = result.text
					     	that.barcode = result.text

					     	that.$http.get('articulos/barcode/'+ result.text).
							    then(respuesta=>{return respuesta.json();}).
							    then(respuestaJson=>{
							        if (respuestaJson.resp=='excelente') {
							        	that.articulo = respuestaJson.result[0];
							        	M.toast({html:'Articulo encontrado',displayLength:2000});
							        	this.$refs.articulo.cantidad.focus();
							        }else{
							        	console.log("error en else");
							        	that.articulo.nomarticulo = '';
							        	that.articulo.descripcion = '';
							        	that.articulo.cantidad = '';
							        	that.articulo.barcode = '';
							        	M.toast({html:'Vuelva a intentar',displayLength:2000});
							        }})
							       .catch(error=>{
							            console.log(error);
							        });

					     	console.log("articulo.barcode" + that.articulo.barcode)
					     	console.log("result.text" + result.text)
					         
					          
					      },
					      function (error) {
					          alert("Scanning failed: " + error);
					      }
					   );
						console.log("saliendo de Lector...");
					},
					...mapActions(['addArticulo'])
				}
	};
</script>

<style>
	
</style>