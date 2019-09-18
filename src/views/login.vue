<template>
    <transition>
        <div>
            <div id="login">
            <div class="login-page">
              <div class="form">
                  <form class="register-form">
                    <h1>Login</h1>
                    <input type="text" name="username" v-model="input.username" placeholder="Utilisateur" />
                    <input type="password" name="password" v-model="input.password" placeholder="Mot de passe" />
                    <p class="msg-error" v-html="error"></p>
                    <button type="button" v-on:click="login()">Connexion</button>                
                  </form>
                  <!-- <p>Si vous n'avez pas les identifiants, faites clic droit + inspecter et allez dans la console, un message vous attend :)</p> -->
              </div>
            </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                },
                error:""

            }
        
        },
        methods: {
            login() {
             
                if(this.input.username != "" && this.input.password != "") {
                   
                    if(this.input.username == this.$parent.$parent.mockAccount.username && this.input.password == this.$parent.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "PortfolioPrivee" });
                    } else {
                        this.error = "L'utilisateur ou le mot de passe est incorrect.";
                     
                    }
                } else {
                
                    this.error = "Vous devez remplir un e-mail et un mot de passe !";
                  
                }
            }
        },

        mounted(){  
        }

    }
</script>

<style scoped>
  
</style>