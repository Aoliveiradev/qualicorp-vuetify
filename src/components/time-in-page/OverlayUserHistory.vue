<template>
  <v-app>
    <v-main>
      <v-container fluid="1" class="d-flex w-100 h-100 pa-0 fill-height">
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
              </tr>
              </thead>
              <tbody>
              <tr
                  v-for="item in desserts"
                  :key="item.date"
              >
                <td>{{ item.date }}</td>
                <td>{{ item.entryTime }}</td>
                <td>{{ item.finishTime }}</td>
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

export default {
  name: 'OverlaySignInForm',
  components: {BarChart},
  data: () => ({
    headers: [
      {
        title: 'Dessert (100g serving)',
        align: 'start',
        sortable: false,
        key: 'name',
      },
      { title: 'Date', align: 'end', key: 'calories' },
      { title: 'Entry Time', align: 'end', key: 'fat' },
      { title: 'FinishTime', align: 'end', key: 'carbs' },
      { title: 'Protein (g)', align: 'end', key: 'protein' },
      { title: 'Iron (%)', align: 'end', key: 'iron' },
    ],
    desserts: [
      {
        date: '01/01/2023',
        entryTime: '09:00',
        finishTime: '12:00'
      },
      {
        date: '01/01/2023',
        entryTime: '13:00',
        finishTime: '18:00'
      },
      {
        date: '02/01/2023',
        entryTime: '09:00',
        finishTime: '12:00'
      },
      {
        date: '02/01/2023',
        entryTime: '13:00',
        finishTime: '18:00'
      },
      {
        date: '03/01/2023',
        entryTime: '09:00',
        finishTime: '12:00'
      },
      {
        date: '03/01/2023',
        entryTime: '13:00',
        finishTime: '18:00'
      },
      {
        date: '04/01/2023',
        entryTime: '09:00',
        finishTime: '12:00'
      },
      {
        date: '04/01/2023',
        entryTime: '13:00',
        finishTime: '18:00'
      },
      {
        date: '05/01/2023',
        entryTime: '09:00',
        finishTime: '12:00'
      },
      {
        date: '05/01/2023',
        entryTime: '13:00',
        finishTime: '18:00'
      },
      {
        date: '06/01/2023',
        entryTime: '09:00',
        finishTime: '12:00'
      },
      {
        date: '06/01/2023',
        entryTime: '13:00',
        finishTime: '18:00'
      },
      {
        date: '07/01/2023',
        entryTime: '09:00',
        finishTime: '12:00'
      },
      {
        date: '07/01/2023',
        entryTime: '13:00',
        finishTime: '18:00'
      },
      {
        date: '08/01/2023',
        entryTime: '09:00',
        finishTime: '12:00'
      },
      {
        date: '08/01/2023',
        entryTime: '13:00',
        finishTime: '18:00'
      },
      {
        date: '09/01/2023',
        entryTime: '09:00',
        finishTime: '12:00'
      },
      {
        date: '09/01/2023',
        entryTime: '13:00',
        finishTime: '18:00'
      },
      {
        date: '10/01/2023',
        entryTime: '09:00',
        finishTime: '12:00'
      },
      {
        date: '10/01/2023',
        entryTime: '13:00',
        finishTime: '18:00'
      },
    ],
  }),
};
</script>

<style>
html, body {
  overflow-y: hidden;
}
</style>
