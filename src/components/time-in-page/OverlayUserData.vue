<template>
  <v-app>
    <v-main>
      <v-container :fluid="true" class="bg-blue-degrade flex-column align-center fill-height">
        <v-row class="fill-height">
          <v-col cols="12" sm="12" md="12" class="d-flex ma-0 pa-0 flex-column justify-center align-center">
            <v-container>
              <v-row justify="space-around">
                <v-card width="400">
                  <v-img
                      height="200"
                      src="https://uepb.edu.br/wp-content/uploads/2019/09/201909Registro-de-Ponto-Eletr%C3%B4nico-1-1.png"
                      cover
                      class="text-white"
                  >
                    <v-toolbar
                        color="rgba(0, 0, 0, 0)"
                        theme="dark"
                    >
                      <div class="mx-5 text-black">
                        <strong>{{ name }}</strong>
                      </div>
                    </v-toolbar>
                  </v-img>

                  <v-card-text>
                    <div class="font-weight-bold ms-1 mb-2">
                      Data e Hora Atual
                    </div>

                    <v-row justify="space-around">
                      <v-col cols="6">
                        <label class="font-weight-bold">Entry Time</label>
                        <v-text-field
                            v-model="entryTime"
                            outlined
                        ></v-text-field>
                      </v-col>

                      <v-col cols="6">
                        <label class="font-weight-bold">Exit Time</label>
                        <v-text-field
                            v-model="exitTime"
                            outlined
                        ></v-text-field>
                      </v-col>
                    </v-row>

                    <v-btn @click="getDateAndHour" color="primary">
                      Registrar Ponto
                    </v-btn>

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
import axios from "axios";

export default {
  name: 'OverlayUserData',
  data: () => ({
    name: 'Allan Oliveira',
    entryTime: "",
    exitTime: "",
  }),

  methods: {
    async getDateAndHour() {

      try {
        const token = localStorage.getItem('qualicorpToken');
        const addTime = await axios.post(`/times`, {
          entryTime: this.entryTime,
          exitTime: this.exitTime

        }, {
          headers: {
            Authorization: token,
          },
        });
        console.log(addTime, 'sucesso ao adicionar a hora')
      } catch (error) {
        console.error('Erro ao excluir o item:', error);
      }
    }
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
