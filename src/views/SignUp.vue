<template>
  <v-app>
    <v-main>
      <v-container :fluid="true" class="pa-0 ma-0 flex-fill overflow-y-hidden overflow-x-hidden">
        <v-row no-gutters class="flex-fill ">
          <v-col cols="12" md="6">
            <OverlaySignInForm />
          </v-col>
          <v-col cols="12" md="6">
            <OverlaySignUpForm />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import OverlaySignInForm from "@/components/sign-up-page/OverlaySigninForm.vue";
import OverlaySignUpForm from "@/components/sign-up-page/OverlaySignUpForm.vue";
  name = 'SignUp'
</script>

