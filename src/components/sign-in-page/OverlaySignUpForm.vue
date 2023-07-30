<template>
  <v-app>
    <v-main>
      <v-container fluid="1" class="bg-blue-degrade flex-column align-center fill-height">
        <v-row class="fill-height">
          <v-col cols="12" sm="12" md="12" class="d-flex ma-0 pa-0 flex-column justify-center align-center">
            <p class="text-h1 my-5 font-weight-bold font-color">Welcome !</p>
            <p class="text-h5 font-weight-light font-color">You don't have an account?</p>
            <p class="text-h6 font-weight-light font-color">Please sign up from here</p>
            <v-btn class="my-15 w-50" color="primary" @click="redirectToSignUp">Sign Up</v-btn>
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
    redirectToSignUp() {
      this.$router.push({name: 'SignUp'}
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
