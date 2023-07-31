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
                <v-text-field variant="solo-filled" label="Email" prepend-icon="mdi-email" outlined></v-text-field>
                <v-text-field variant="solo-filled" label="Password" outlined prepend-icon="mdi-lock" type="password">
                  <v-icon icon="$vuetify">Email</v-icon>
                </v-text-field>
              </v-card-text>
              <v-card-actions class="w-100 justify-space-around">
                <v-btn class="w-75" color="primary" variant="elevated" @click="redirectToTimeIn">
                  SIGN IN
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
    redirectToTimeIn() {
      this.$router.push({name: 'timein'});
    },
  },
};
</script>

<style>
html, body {
  overflow-y: hidden;
}
</style>
