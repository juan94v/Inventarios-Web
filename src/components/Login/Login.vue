<template>
 	
 	<div class="container" id="container_login" >
 		
 		<!-- <div v-bind:class="loader">
 			<div class="col s12 center" style="margin-top:80px;" id="contenedor_login">
        <div class="preloader-wrapper big active center">
            <div class="spinner-layer spinner-blue-only">
              <div class="circle-clipper left">
                <div class="circle"></div>
              </div><div class="gap-patch">
                <div class="circle"></div>
              </div><div class="circle-clipper right">
                <div class="circle"></div>
              </div>
            </div>
        </div>
      </div>
    </div> -->
    <div v-bind:class="result"  style="margin-top:10%;" id="result_login">
      <div class="col s6 center offset-s3">
        <img src="static/img/Logo.png" style="border-radius:16px;" class="responsive-img center" alt="">
      </div>
    	<div class="col s6 center offset-s3">
        <img src="static/img/logo.png" style="border-radius:16px;" class="responsive-img center" alt="">
      </div>
      <div class="col s12 center">
      	<h4 style="">Inventario FIME</h4>
      </div>
  	  <div class='input-field col s11   result_login' style="margin-top:10%;margin-left:1%;">
        <i class="material-icons prefix">account_circle</i>
        <input class='validate lage' type="text" name='numuser' v-model="usuario.email" style="color:black !important;"  id='numuser'/>
        <label for='numuser' class="active" style="color:black !important;">Usuario</label>
      </div>
      <div class='input-field col s11   result_login' style="margin-top:10%;margin-left:1%;">      
        <i class="material-icons prefix ">lock</i>
        <input class='validate' type='password' style="color:black !important;" v-model="usuario.password"  name='password'  id='password'/>
        <label for='password' class="active" style="color:black !important;">Password</label>
      </div>
      <div class="col s12 result_login center" style="margin-top:10%;">    
        <button type='submit' name='btn_login' v-on:click.prevent="iniciar_sesion" class='button'><b>Entrar</b></button>    
      </div>
        
    </div>
    <button data-target="modal_sesion" id="Modal_Button_Sesion" class="btn modal-trigger hide">Modal Sesion</button>
	</div>
			   
</template>

<script>
  export default {
    data(){
      return {
        usuario: {
          email: '',
          password: ''
        },
        result: ''
      }
    },
     methods:
        {
            iniciar_sesion()
            {
              if(!this.usuario.email)
              {
                M.toast({html:'Usuario vacio',displayLength:2000});
                $('#numuser').focus();

                return
              }
              if(!this.usuario.password)
              {
                M.toast({html:'password vacio',displayLength:2000});
                $('#password').focus();

                return
              }
              this.entrando = true;
              // console.log(this.usuario.password);
              // console.log(md5(this.usuario.password));
              this.$http.post('login', {
                usuario:
                {
                  email:this.usuario.email,
                  password:this.usuario.password
                }
              }).then(respuesta => {return respuesta.json();}).
              then(respuestaJson=>{
                {
                  if (respuestaJson.res == true)
                  {
                    console.log("Bienvenido")
                    this.$router.push({name: 'articulos'});
                    M.toast({html:'Bienvenido',displayLength:2000});
                  }
                  if(respuestaJson.res == false)
                  {
                    console.log(respuestaJson.res)
                    M.toast({html:'Usuario o Contraseña incorrecta',displayLength:2000});
                  }
                }
              }).catch(function(error) {
                  console.log(error);
              });
            },
            valida()
            {
              
            }
        } 
  };
</script>

<style>
  .button {
    position: absolute;
    height: 42px;
    left: 65px;
    right: 60px;
    bottom: 27px;

    background: #FF473A;
    mix-blend-mode: normal;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
</style>