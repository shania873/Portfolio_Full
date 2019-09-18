<template>
  <div>
    <App v-if="user" />
    <LoginForm v-else :errorMessage="errorMessage" @submit="login" />
  </div>
</template>

<script>
import { login } from "../authentication";
import App from "./App";
import LoginForm from "./LoginForm";

export default {
  data() {
    return {
      user: null,
      errorMessage: ""
    };
  },

  methods: {
    login({ email, password }) {
      this.user = login(email, password);
      this.errorMessage = this.user ? "" : "L'authentification à échouée, essayez encore";
    }
  },

  components: { App, LoginForm }
};
</script>