<template>
  <v-app>
    <v-main>
      <v-container :fluid="true" class="pa-0 ma-0 flex-fill overflow-y-hidden overflow-x-hidden">
        <v-row no-gutters class="flex-fill ">
          <v-col cols="12" md="6">
            <OverlayUserData @newTimeEntry="handleNewTimeEntry" />
          </v-col>
          <v-col cols="12" md="6">
            <OverlayUserHistory :key="historyKey" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import OverlayUserData from "@/components/time-in-page/OverlayUserData.vue";
import OverlayUserHistory from "@/components/time-in-page/OverlayUserHistory.vue";
import { ref, reactive } from "vue";

export default {
  name: 'TimeIn',
  components: { OverlayUserData, OverlayUserHistory },
  setup() {
    const historyKey = ref(0);

    function handleNewTimeEntry() {
      historyKey.value += 1;
    }

    return {
      historyKey,
      handleNewTimeEntry,
    };
  },
};
</script>

