import { Line } from 'vue-chartjs';

export default {
  extends: Line,
  props: {
    data: {
      type: Object,
      required: true,
      validator(data = {}) {
        return data.labels && data.datasets;
      }
    },
    options: { type: Object, required: false }
  },
  mounted() {
    this.renderChart(this.data, this.options);
  }
};
