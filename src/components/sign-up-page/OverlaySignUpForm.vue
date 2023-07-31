<template>
  <v-app>
    <v-main>
      <v-container :fluid="true" class="d-flex w-100 h-100 pa-0 fill-height">
        <v-row class="fill-height">
          <v-col cols="12" md="12" class="d-flex py-10 justify-center align-center pa-15 flex-column">
            <img src="public/team.png" width="300" alt="Logo"/>
            <h1 class="mb-4">CREATE ACCOUNT</h1>
            <v-card class="w-100" :flat="true">
              <v-card-text>
                <v-text-field v-model="firstName" variant="solo-filled" label="First Name" prepend-icon="mdi-account"
                              outlined></v-text-field>
                <v-text-field v-model="lastName" variant="solo-filled" label="Last Name" prepend-icon="mdi-account"
                              outlined></v-text-field>
                <v-text-field v-model="email" variant="solo-filled" label="Email" prepend-icon="mdi-email"
                              outlined></v-text-field>
                <v-text-field v-model="password" variant="solo-filled" label="Password" outlined prepend-icon="mdi-lock"
                              type="password"></v-text-field>

              </v-card-text>
              <v-card-actions class="w-100 justify-space-around">
                <v-btn class="w-33" color="primary" variant="elevated" @click="redirectToSignIn">
                  BACK
                </v-btn>
                <v-btn class="w-33" color="primary" variant="elevated" @click="signUp">
                  SIGN UP
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
  name: 'OverlaySignUpForm',
  methods: {
    redirectToSignIn() {
      this.$router.push({name: 'SignIn'});
    },
    async signUp() {
      this.snackbar = false;

      try {
        const response = await this.$axios.post('/users', {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
        });

        console.log('Usuário cadastrado com sucesso:', response.data);
        if (response) {
          setTimeout(() => {
            this.redirectToSignIn();
          }, 6000)
        }
      } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);

        if (error.response && error.response.data && error.response.data.error) {
          if (error.response.data.missingFields) {
            this.text = `Campos obrigatórios não preenchidos: ${error.response.data.missingFields.join(', ')}`;
          } else {
            this.text = error.response.data.error;
          }
        } else {
          this.text = 'Erro ao cadastrar usuário.';
        }

        this.snackbar = true;
      }
    },
  },

  data() {
    return {
      snackbar: false,
      text: `Usuario Criado com Sucesso`,
      snackbarColor: 'error',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };
  },
};
</script>

<style>
html, body {
  overflow-y: hidden;
}
</style>
