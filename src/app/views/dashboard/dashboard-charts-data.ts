import { Injectable } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/utils/src';

export interface IChartProps {
  data?: any;
  labels?: any;
  options?: any;
  colors?: any;
  type?: any;
  legend?: any;

  [propName: string]: any;
}

@Injectable({
  providedIn: 'any'
})
export class DashboardChartsData {
  constructor() {
    this.initMainChart();
  }

  public mainChart: IChartProps = {};

  public random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  initMainChart(period: string = 'Month') {
    const brandSuccess = getStyle('--cui-success') ?? '#4dbd74';
    const brandSuccessBg = hexToRgba(getStyle('--cui-success'), 60) ?? '#4dbd74';
    const brandInfo = getStyle('--cui-primary') ?? '#20a8d8';
    const brandInfoBg = hexToRgba(getStyle('--cui-primary'), 10) ?? '#20a8d8';
    const brandDanger = getStyle('--cui-danger') || '#f86c6b';
    const brandDangerBg = hexToRgba(getStyle('--cui-danger'), 60) ?? '#f86c6b';

    // mainChart
    // mainChart
    this.mainChart['elements'] = period === 'Fortnight' ? 13 : 30;
    this.mainChart['Data1'] = [];
    this.mainChart['Data2'] = [];
    this.mainChart['Data3'] = [];

    // generate random values for mainChart
    for (let i = 0; i <= this.mainChart['elements']; i++) {
      this.mainChart['Data1'].push(this.random(50, 240));
      this.mainChart['Data2'].push(this.random(20, 160));
      this.mainChart['Data3'].push(this.random(70, 200));
    }

    let labels: string[] = [];
    if (period === 'Fortnight') {
      labels = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14'
      ];
    } else if (period === 'Week') {
        labels = [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7'
        ];
    } else if (period === 'Month') {
      /* tslint:disable:max-line-length */
      labels = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '31'
      ];
    }

    const colors = [
      {
        // brandInfo
        backgroundColor: brandInfoBg,
        borderColor: brandInfo,
        pointHoverBackgroundColor: brandInfo,
        borderWidth: 2,
        fill: true
      },
      {
        // brandSuccess
        backgroundColor: brandSuccessBg || 'transparent',
        borderColor: brandSuccess || '#4dbd74',
        pointHoverBackgroundColor: brandSuccess,
        borderWidth: 2,
        type: 'bar'
      },
      {
        // brandDanger
        backgroundColor: brandDangerBg,
        borderColor: brandDanger || '#f86c6b',
        pointHoverBackgroundColor: brandDanger,
        borderWidth: 2,
        type: 'line',
        fill: true
      }
    ];

    const datasets = [
      {
        data: this.mainChart['Data1'],
        label: 'Temperature',
        ...colors[0]
      },
      {
        data: this.mainChart['Data2'],
        label: 'Pressure',
        ...colors[1]
      },
      {
        data: this.mainChart['Data3'],
        label: 'Humidity',
        ...colors[2]
      }
    ];

    const plugins = {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          labelColor: function(context: any) {
            return {
              backgroundColor: context.dataset.borderColor
            };
          }
        }
      }
    };

    const options = {
      maintainAspectRatio: false,
      plugins,
      scales: {
        x: {
          grid: {
            drawOnChartArea: false
          }
        },
        y: {
          beginAtZero: true,
          max: 250,
          ticks: {
            maxTicksLimit: 5,
            stepSize: Math.ceil(250 / 5)
          }
        }
      },
      elements: {
        line: {
          tension: 0.4
        },
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3
        }
      }
    };

    this.mainChart.type = 'line';
    this.mainChart.options = options;
    this.mainChart.data = {
      datasets,
      labels
    };
  }

}
