<template>
  <article class="flex flex-col md:flex-row justify-center items-center">
    <main class="relative max-h-screen w-full md:w-1/2 p-4">
      <line-chart v-if="dataset" :data="dataset" :key="updateTime" />
      <img
        v-else
        src="/undraw/datepicker.svg"
        alt="Búsqueda por rango de fechas"
      />
    </main>
    <aside class="w-full md:w-1/5 p-5">
      <strong>Búsqueda por año</strong>
      <RangeDatepicker @onDateChange="setQuery" @clear="clearCurrency" />
    </aside>
  </article>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import moment from 'moment';

import diffCalculator from '~/utils/formatting/diff-calculator';
import requiredParam from '~/utils/validation/required-param';

export default {
  data() {
    return {
      updateTime: this.getUpdateTime()
    };
  },
  computed: {
    ...mapState('currency', ['currency']),
    dataset() {
      if (!this.currency) {
        return null;
      }

      const { serie } = this.currency;
      const valuesFromSeries = serie.map((item) => item.valor);
      return {
        labels: serie.map((item) => moment(item.fecha).format('DD-MMM-YYYY')),
        datasets: [
          {
            label: `Variación diaria`,
            data: diffCalculator(valuesFromSeries),
            backgroundColor: 'transparent',
            pointBackgroundColor: 'transparent',
            pointBorderColor: 'transparent',
            borderColor: 'lightblue',
            borderWidth: 2,
            hoverRadius: 30
          }
        ]
      };
    }
  },
  methods: {
    ...mapMutations('currency', ['SET_CURRENCY_VALUES']),
    ...mapActions('currency', ['getCurrencyValues', 'getValuesFromYears']),
    getUpdateTime() {
      return new Date().getTime();
    },
    clearCurrency() {
      this.SET_CURRENCY_VALUES(null);
    },
    setQuery(query = {}) {
      if (!query.from) {
        return;
      }

      this.getValuesFromYears([query.from, query.to]).then(
        () => (this.updateTime = this.getUpdateTime())
      );
    }
  }
};
</script>
