<template>
	<div>
		<ul class="collection" v-for="articulo in articulos">
			<li class="collection-item">{{articulo.nomarticulo}}</li>
	    </ul>
	    <div>
	    	{{countArticulos}}
	    </div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		mounted()
		{
			
		},
		computed:{
			articulos(){
				return this.$store.getters.getArticulo;
			},
			countArticulos(){
				return this.$store.getters.getArticulo.length;	
			}
		}
	};
</script>