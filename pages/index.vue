<template>
  <div class="container">
    <div>
      <line-chart
        v-if="currencyData"
        :data="currencyData"
        :key="selectedCurrency"
      />

      <SectionHeader title="Bienvenido" font-size="2xl" />
      <p>
        En esta aplicación podrás evaluar la fluctuación diaria de diferentes
        divisas, incluyendo el dólar americano.
      </p>

      <label>
        <strong>Ver divisa</strong>
        <Select
          v-if="availableCurrencies.length"
          v-model="selectedCurrency"
          :options="availableCurrencies"
          @change="setCurrency(selectedCurrency)"
          class="mx-auto"
        >
          <option :value="undefined" disabled>
            Lista de divisas disponibles
          </option>
        </Select>
      </label>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return { selectedCurrency: null };
  },
  computed: {
    ...mapState('currency', ['currencies', 'currency']),
    currencyData() {
      if (!this.currency) {
        return null;
      }

      const { serie } = this.currency;
      return {
        labels: serie.map((item) => item.fecha),
        datasets: [
          {
            label: `Precios de ${this.currency.nombre}`,
            data: serie.map((item) => item.valor)
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
    ...mapActions('currency', ['getCurrencyValues', 'getAllCurrencies']),
    setCurrency(currency = '') {
      this.getCurrencyValues(currency);
    }
  },
  created() {
    this.getAllCurrencies();
  },
  watch: {
    selectedCurrency(currency = '') {
      this.getCurrencyValues(currency);
    }
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
