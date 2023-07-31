<template>
  <v-app>
    <v-main>
      <v-container :fluid="true" class="bg-blue-degrade flex-column align-center fill-height">
        <v-row class="fill-height">
          <v-col cols="12" sm="12" md="12" class="d-flex ma-0 pa-0 flex-column justify-center align-center">
            <p class="text-h2 my-5 font-weight-bold font-color">Welcome Back!</p>
            <p class="text-h6 font-weight-light font-color">If you already have account please sign in from here</p>
            <v-btn class="my-15 w-33" color="primary" @click="redirectToSignIn">SIGN IN</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'OverlaySignUpForm',
  methods: {
    redirectToSignIn() {
      this.$router.push({name: 'Home'}
      );
    },
  },
};
</script>

<style>
.font-color {
  color: white;
}
.bg-blue-degrade {
  background: linear-gradient(to bottom right, #c0d6ef, #0296D8);
}

</style>
