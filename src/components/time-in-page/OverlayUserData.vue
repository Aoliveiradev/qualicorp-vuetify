<template>
  <v-app>
    <v-main>
      <v-container fluid="1" class="bg-blue-degrade flex-column align-center fill-height">
        <v-row class="fill-height">
          <v-col cols="12" sm="12" md="12" class="d-flex ma-0 pa-0 flex-column justify-center align-center">
            <v-container>
              <v-row justify="space-around">
                <v-card width="400">
                  <v-img
                      height="200"
                      src="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg"
                      cover
                      class="text-white"
                  >
                    <v-toolbar
                        color="rgba(0, 0, 0, 0)"
                        theme="dark"
                    >
                      <div class="mx-5">
                        <strong>{{name}}</strong>
                      </div>
                    </v-toolbar>
                  </v-img>

                  <v-card-text>
                    <div class="font-weight-bold ms-1 mb-2">
                      Today
                    </div>

                    <v-timeline density="compact" align="start">
                      <v-timeline-item
                          v-for="timeIns in timeIns"
                          :key="timeIns.time"
                          :dot-color="timeIns.color"
                          size="x-small"
                      >
                        <div class="mb-4">
                          {{ timeIns.date }}
                          <div class="font-weight-normal my-5">
                            <strong>Initial:</strong> {{ timeIns.initialTime }} <strong>Finish:</strong>
                            {{ timeIns.finishTime }}
                          </div>
                        </div>
                      </v-timeline-item>
                    </v-timeline>
                  </v-card-text>
                </v-card>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'OverlayUserData',
  data: () => ({
    name: "Allan Oliveira",
    timeIns: [
      {
        date: '01/01/2023',
        initialTime: '09:12',
        finishTime: '12:00',
        color: 'deep-purple-lighten-1',
      },
      {
        date: '01/01/2023',
        initialTime: '12:00',
        finishTime: '18:00',
        color: 'green',
      },

    ],
  }),
}
</script>

<style>
.font-color {
  color: white;
}

.bg-blue-degrade {
  background: linear-gradient(to bottom right, #c0d6ef, #0296D8);
}

</style>
