<template>
  <article class="flex flex-col-reverse md:flex-row">
    <main class="w-full md:w-2/3">
      <line-chart
        v-if="currencyData"
        :data="currencyData"
        :options="chartOptions"
      />
    </main>
    <aside class="w-full md:w-1/3 flex flex-col">
      <strong>Buscador por año</strong>
      <label>
        <strong>Desde</strong>
      </label>
      <label>
        <strong>Hasta</strong>
      </label>
    </aside>
  </article>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import moment from 'moment';

import diffCalculator from '~/utils/formatting/diff-calculator';
import numberFormat from '~/utils/formatting/number-formatter';
import requiredParam from '~/utils/validation/required-param';

export default {
  data() {
    return {
      chartOptions: {
        responsive: true,
        scales: {
          xAxes: [
            {
              gridLines: { display: false },
              ticks: { maxTicksLimit: 5 }
            }
          ],
          yAxes: [
            {
              ticks: {
                callback(label) {
                  return numberFormat(label, {
                    style: 'currency',
                    currency: 'CLP'
                  });
                }
              }
            }
          ]
        }
      }
    };
  },
  computed: {
    ...mapState('currency', ['currencies', 'currency']),
    currencyData() {
      if (!this.currency) {
        return null;
      }

      const { serie } = this.currency;
      return {
        labels: serie.map((item) => moment(item.fecha).format('DD-MMM-YYYY')),
        datasets: [
          {
            label: `Variación diaria`,
            data: diffCalculator(serie.map((item) => item.valor)),
            backgroundColor: 'transparent',
            pointBackgroundColor: 'lightblue',
            borderColor: 'lightblue'
          }
        ]
      };
    },
    availableCurrencies() {
      if (!this.currencies) {
        return [];
      }

      return this.currencies.map((currency) => ({
        label: currency.nombre,
        value: currency.codigo
      }));
    }
  },
  methods: {
    ...mapActions('currency', ['getCurrencyValues', 'getAllCurrencies'])
  },
  mounted() {
    this.getAllCurrencies();
    this.getCurrencyValues(this.$route.params.id);
  }
};
</script>
