<template>
  <div>
    <div class="flex my-2">
      <Select class="w-full mr-2" v-model="query.from" :options="years">
        <option :value="undefined">Desde</option>
      </Select>
      <Select
        class="w-full"
        v-if="query.from"
        v-model="query.to"
        :options="toYear"
      >
        <option :value="undefined">Hasta</option>
      </Select>
    </div>

    <button
      v-if="query.from"
      type="button"
      class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm shadow"
      @click="clearFilters()"
    >
      Limpiar filtros
    </button>
  </div>
</template>

<script>
import DateService from '~/services/DateService';
export default {
  data() {
    return {
      query: { from: null, to: null },
      years: this.fromYear()
    };
  },
  methods: {
    fromYear() {
      const fromYears = DateService.getYearRange(1999);

      return this.formatOptions(fromYears);
    },
    formatOptions(options = []) {
      return options.map((value) => ({ label: value, value }));
    },
    clearFilters() {
      this.query = { from: undefined, to: undefined };
      this.$emit('clear');
    }
  },
  computed: {
    toYear() {
      const years = DateService.getYearRange(this.query.from);
      return this.formatOptions(years);
    }
  },
  watch: {
    query: {
      deep: true,
      handler(value = {}) {
        this.$emit('onDateChange', value);
      }
    }
  }
};
</script>
