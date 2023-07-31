<template>
  <v-app>
    <v-main>
      <v-container :fluid="true" class="d-flex w-100 h-100 pa-0 fill-height">
        <v-row class="fill-height">
          <v-col cols="12" md="12" class="d-flex py-10 justify-center align-center pa-15 flex-column">
            <img src="public/team.png" width="500" alt="Logo"/>
            <h1 class="mb-4">SIGN IN</h1>
            <v-card class="w-100" :flat="true">
              <v-card-text>
                <v-text-field v-model="email" variant="solo-filled" label="Email" prepend-icon="mdi-email"
                              outlined></v-text-field>
                <v-text-field v-model="password" variant="solo-filled" label="Password" outlined prepend-icon="mdi-lock"
                              type="password">
                  <v-icon icon="$vuetify">Email</v-icon>
                </v-text-field>
              </v-card-text>
              <v-card-actions class="w-100 justify-space-around">
                <v-btn class="w-75" color="primary" variant="elevated" @click="login">
                  SIGN IN
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <template>
      <div class="text-center ma-2">
        <v-snackbar
            timeout="5000"
            v-model="snackbar"
            :color="snackbarColor"
        >

          {{ text }}

          <template v-slot:actions>
            <v-btn
                color="white"
                variant="text"
                @click="snackbar = false"
            >
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </div>
    </template>
  </v-app>
</template>

<script>
export default {
  name: 'OverlaySignInForm',
  data() {
    return {
      email: '',
      password: '',
      snackbar: false,
      text: '',
      snackbarColor: 'error',
    };
  },
  methods: {
    async login() {
      this.snackbar = false;
      try {
        const response = await this.$axios.post(`/users/${this.email}/${this.password}`);
        const token = response.data.token;
        localStorage.setItem('qualicorpToken', token);
        this.$router.push({name: 'TimeIn'});
      } catch (error) {
        console.error('Erro ao fazer login:', error);
        this.showSnackbar('Erro ao fazer login. Verifique o email e a senha.', 'error');

      }
    },

    showSnackbar(text, color) {
      this.text = text;
      this.snackbarColor = color;
      this.snackbar = true;
    },
  },
};
</script>

<style>
html, body {
  overflow-y: hidden;
}
</style>
