<template>
  <v-app>
    <v-main>
      <v-container :fluid="true" class="pa-0 ma-0 flex-fill overflow-y-hidden overflow-x-hidden">
        <v-row no-gutters class="flex-fill ">
          <v-col cols="12" md="6">
            <OverlayUserData />
          </v-col>
          <v-col cols="12" md="6">
            <OverlayUserHistory />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import OverlayUserData from "@/components/time-in-page/OverlayUserData.vue";
import OverlayUserHistory from "@/components/time-in-page/OverlayUserHistory.vue";
export default {
  name: 'Timein',
};
</script>

