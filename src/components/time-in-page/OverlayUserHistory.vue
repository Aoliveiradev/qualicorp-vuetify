<template>
  <v-app>
    <v-main>
      <v-container :fluid="true" class="d-flex w-100 h-100 pa-0 fill-height">
        <v-row class="fill-height">
          <v-col cols="12" md="12" class="d-flex py-10 justify-center align-center pa-15 flex-column">
            <v-table
                fixed-header
                height="600"
                class="w-75 border-opacity"
            >
              <thead>
              <tr>
                <th class="text-left">
                  Date
                </th>
                <th class="text-left">
                  Entry Time
                </th>
                <th class="text-left">
                  Finish Time
                </th>
                <th class="text-left">
                </th>
                <th class="text-left">
                </th>
              </tr>
              </thead>
              <tbody>
              <tr
                  v-for="item in entryExitTimes"
                  :key="item.date"
              >
                <td>{{ item.date }}</td>
                <td>{{ item.entryTime }}</td>
                <td>{{ item.exitTime }}</td>
                <td>
                  <v-btn size="30" prepend-icon="mdi-pen" color="primary" @click=""/>
                </td>
                <td>
                  <v-btn size="30" prepend-icon="mdi-delete" color="primary"
                         @click="deleteEntryExitTime(item)"/>
                </td>
              </tr>
              </tbody>
            </v-table>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import BarChart from "@/components/time-in-page/BarChart.vue";
import {onMounted, ref} from "vue";
import axios from "axios";

export default {
  name: 'OverlaySignInForm',
  components: {BarChart},
  setup() {
    const entryExitTimes = ref([]);

    async function fetchEntryExitTimes() {
      const token = localStorage.getItem('qualicorpToken');

      try {
        const userIdResponse = await axios.get(`/login`, {
          headers: {
            Authorization: token,
          },
        });
        const userId = userIdResponse.data.userId;

        const response = await axios.get(`/times/${userId}`);
        entryExitTimes.value = response.data.entryExitTimes;
      } catch (error) {
        console.error('Erro ao obter os dados:', error);
      }
    }

    async function deleteEntryExitTime(item) {

      try {
        const deleteItem = await axios.delete(`/times/${item.userId}/${item.id}`, {});

        if (deleteItem) {
          const response = await axios.get(`/times/${item.userId}`);
          entryExitTimes.value = response.data.entryExitTimes;
        }
      } catch (error) {
        console.error('Erro ao excluir o item:', error);
      }
    }

    onMounted(() => {
      fetchEntryExitTimes();
    });

    return {entryExitTimes, deleteEntryExitTime};
  },
};
</script>

<style>
html, body {
  overflow-y: hidden;
}
</style>
