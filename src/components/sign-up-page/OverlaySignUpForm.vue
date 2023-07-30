<template>
  <v-app>
    <v-main>
      <v-container fluid="1" class="d-flex w-100 h-100 pa-0 fill-height">
        <v-row class="fill-height">
          <v-col cols="12" md="12" class="d-flex py-10 justify-center align-center pa-15 flex-column">
            <img src="public/team.png" width="300" alt="Logo" />
            <h1 class="mb-4">CREATE ACCOUNT</h1>
            <v-card class="w-100" flat>
              <v-card-text>
                <v-text-field variant="solo-filled" label="First Name" prepend-icon="mdi-account" outlined></v-text-field>
                <v-text-field variant="solo-filled" label="Last Name" prepend-icon="mdi-account" outlined></v-text-field>
                <v-text-field variant="solo-filled" label="Email" prepend-icon="mdi-email" outlined></v-text-field>
                <v-text-field variant="solo-filled" label="Password" outlined prepend-icon="mdi-lock" type="password"><v-icon icon="$vuetify">Email</v-icon></v-text-field>
              </v-card-text>
              <v-card-actions class="w-100 justify-space-around">
                <v-btn class="w-33" color="primary" variant="elevated" @click="redirectToSignIn">
                  BACK
                </v-btn>
                <v-btn class="w-33" color="primary" variant="elevated" @click="redirectToSignIn">
                  SIGN UP
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'OverlaySignInForm',
  methods: {
    redirectToSignIn() {
      this.$router.push({name: 'Home'}
      );
    },
  },
};
</script>

<style>
html, body {
  overflow-y: hidden;
}
</style>
