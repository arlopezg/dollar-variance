import { Line } from 'vue-chartjs';

import numberFormat from '~/utils/formatting/number-formatter';

export default {
  extends: Line,
  props: {
    data: {
      type: Object,
      required: true,
      validator(data = {}) {
        return data.labels && data.datasets;
      }
    }
  },
  data() {
    return {
      options: {
        animation: { duration: 0 },
        hover: { animationDuration: 0 },
        responsiveAnimationDuration: 0,
        responsive: true,
        scales: {
          xAxes: [
            {
              gridLines: { display: false },
              ticks: { maxTicksLimit: 7 }
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
        },
        lineStyling: {
          lineTension: 2,
          backgroundColor: 'red'
        }
      }
    };
  },
  mounted() {
    this.renderChart(this.data, this.options);
  }
};
