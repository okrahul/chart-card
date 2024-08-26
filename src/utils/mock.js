export const options = {
    '1d': {
      color: ['#5470C6', '#B0B0B0', '#FF6F61', '#32C48D'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      grid: {
        right: '20%'
      },
      toolbox: {
        feature: {
          saveAsImage: { show: true }
        }
      },
    
      legend: {
        show: false,
      },
      xAxis: [
        {
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisLabel: {
            show: false 
          }
        }
      ],

      yAxis: [
        {
          type: 'value',
          name: 'Stock Price',
          position: 'left',
          alignTicks: true,
          axisLine: {
            show: true,
            lineStyle: {
              color: '#5470C6'
            }
          },
          axisLabel: {
            formatter: '${value}',
            show: false
          }
        },
        {
          type: 'value',
          name: 'Volume',
          position: 'right',
          alignTicks: true,
          offset: 80,
          axisLine: {
            show: true,
            lineStyle: {
              color: '#B0B0B0'
            }
          },
          axisLabel: {
            formatter: '{value}'
          }
        }
      ],
      series: [
        {
          name: 'Stock Price',
          type: 'line',
          smooth: false,
          data: [
            150.0, 155.0, 160.0, 145.0, 160.0, 155.0, 170.0, 175.0, 165.0, 170.0, 160.0, 155.0
          ],
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(84, 112, 198, 0.5)' },
                { offset: 1, color: 'rgba(84, 112, 198, 0)' }
              ],
              global: false
            }
          },
          lineStyle: {
            color: '#5470C6'
          }
        },
        {
          name: 'Volume A',
          type: 'bar',
          yAxisIndex: 1,
          barWidth: '15%',
          itemStyle: {
            color: '#B0B0B0'
          },
          data: [
            1000, 1200, 1500, 1300, 1400, 1600, 1700, 1800, 2000, 1900, 1600, 1500
          ]
        },
        {
          name: 'Volume B',
          type: 'bar',
          yAxisIndex: 1,
          barWidth: '15%',
          itemStyle: {
            color: '#FF6F61'
          },
          data: [
            800, 900, 1100, 1000, 1200, 1400, 1500, 1600, 1800, 1700, 1400, 1300
          ]
        },
        {
          name: 'Volume C',
          type: 'bar',
          yAxisIndex: 1,
          barWidth: '15%',
          itemStyle: {
            color: '#32C48D'
          },
          data: [
            600, 700, 900, 800, 1000, 1100, 1200, 1300, 1500, 1400, 1200, 1100
          ]
        }
      ]
    },
    '3d': {
          color: ['#5470C6', '#B0B0B0', '#FF6F61', '#32C48D'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
          grid: {
            right: '20%'
          },
          toolbox: {
            feature: {
             
              
              saveAsImage: { show: true }
            }
          },
          legend: {
            show: false,
            data: ['Stock Price', 'Volume A', 'Volume B', 'Volume C'],
          },
          xAxis: [
            {
              type: 'category',
              axisTick: {
                alignWithLabel: true
              },
              data: ['2024-08-01', '2024-08-02', '2024-08-03'],
            
 axisLabel : {
show: false
 }           }
          ],
          yAxis: [
            {
              type: 'value',
              name: 'Stock Price',
              position: 'left',
              alignTicks: true,
              axisLine: {
                show: true,
                lineStyle: {
                  color: '#5470C6'
                }
              },
              axisLabel: {
                formatter: '${value}'
              }
            },
            {
              type: 'value',
              name: 'Volume',
              position: 'right',
              alignTicks: true,
              offset: 80,
              axisLine: {
                show: true,
                lineStyle: {
                  color: '#B0B0B0'
                }
              },
              axisLabel: {
                formatter: '{value}'
              }
            }
          ],
          series: [
            {
              name: 'Stock Price',
              type: 'line',
              smooth: false,
              data: [155.0, 160.0, 152.0],
              areaStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 1,
                  colorStops: [
                    { offset: 0, color: 'rgba(84, 112, 198, 0.5)' }, // Start color
                    { offset: 1, color: 'rgba(84, 112, 198, 0)' } // End color
                  ],
                  global: false // false by default
                }
              },
              lineStyle: {
                color: '#5470C6'
              }
            },
            {
              name: 'Volume A',
              type: 'bar',
              yAxisIndex: 1,
              barWidth: '15%',
              itemStyle: {
                color: '#B0B0B0'
              },
              data: [1200, 1400, 1300]
            },
            {
              name: 'Volume B',
              type: 'bar',
              yAxisIndex: 1,
              barWidth: '15%',
              itemStyle: {
                color: '#FF6F61'
              },
              data: [1000, 1200, 1100]
            },
            {
              name: 'Volume C',
              type: 'bar',
              yAxisIndex: 1,
              barWidth: '15%',
              itemStyle: {
                color: '#32C48D'
              },
              data: [800, 950, 900]
            }
          ]
        },
    '1w':  {
        color: ['#5470C6', '#B0B0B0', '#FF6F61', '#32C48D'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        grid: {
          right: '20%'
        },
        toolbox: {
          feature: {
           
            
            saveAsImage: { show: true }
          }
        },
        legend: {
            show: false,
          data: ['Stock Price', 'Volume A', 'Volume B', 'Volume C']
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            data: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7']
          , axisLabel : {
show: false
          }
        }
        ],
        yAxis: [
          {
            type: 'value',
            name: 'Stock Price',
            position: 'left',
            alignTicks: true,
            axisLine: {
              show: true,
              lineStyle: {
                color: '#5470C6'
              }
            },
            axisLabel: {
              formatter: '${value}'
            }
          },
          {
            type: 'value',
            name: 'Volume',
            position: 'right',
            alignTicks: true,
            offset: 80,
            axisLine: {
              show: true,
              lineStyle: {
                color: '#B0B0B0'
              }
            },
            axisLabel: {
              formatter: '{value}'
            }
          }
        ],
        series: [
          {
            name: 'Stock Price',
            type: 'line',
            smooth: false,
            data: [152.0, 154.0, 156.0, 158.0, 157.0, 159.0, 160.0],
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 1,
                colorStops: [
                  { offset: 0, color: 'rgba(84, 112, 198, 0.5)' }, // Start color
                  { offset: 1, color: 'rgba(84, 112, 198, 0)' } // End color
                ],
                global: false // false by default
              }
            },
            lineStyle: {
              color: '#5470C6'
            }
          },
          {
            name: 'Volume A',
            type: 'bar',
            yAxisIndex: 1,
            barWidth: '15%',
            itemStyle: {
              color: '#B0B0B0'
            },
            data: [1100, 1200, 1300, 1400, 1500, 1600, 1700]
          },
          {
            name: 'Volume B',
            type: 'bar',
            yAxisIndex: 1,
            barWidth: '15%',
            itemStyle: {
              color: '#FF6F61'
            },
            data: [900, 950, 1000, 1050, 1100, 1150, 1200]
          },
          {
            name: 'Volume C',
            type: 'bar',
            yAxisIndex: 1,
            barWidth: '15%',
            itemStyle: {
              color: '#32C48D'
            },
            data: [700, 750, 800, 850, 900, 950, 1000]
          }
        ]
      },
    '1m': {
        color: ['#5470C6', '#B0B0B0', '#FF6F61', '#32C48D'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        grid: {
          right: '20%'
        },
        toolbox: {
          feature: {
           
            
            saveAsImage: { show: true }
          }
        },
        legend: {
            show: false,
          data: ['Stock Price', 'Volume A', 'Volume B', 'Volume C']
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            data: ['2024-08-01', '2024-08-02', '2024-08-03', '2024-08-04', '2024-08-05', '2024-08-06', '2024-08-07', '2024-08-08', '2024-08-09', '2024-08-10', '2024-08-11', '2024-08-12', '2024-08-13', '2024-08-14', '2024-08-15', '2024-08-16', '2024-08-17', '2024-08-18', '2024-08-19', '2024-08-20', '2024-08-21', '2024-08-22', '2024-08-23', '2024-08-24', '2024-08-25', '2024-08-26', '2024-08-27', '2024-08-28', '2024-08-29', '2024-08-30', '2024-08-31']
          , axisLabel : {
show: false
          }
        }
        ],
        yAxis: [
          {
            type: 'value',
            name: 'Stock Price',
            position: 'left',
            alignTicks: true,
            axisLine: {
              show: true,
              lineStyle: {
                color: '#5470C6'
              }
            },
            axisLabel: {
              formatter: '${value}'
            }
          },
          {
            type: 'value',
            name: 'Volume',
            position: 'right',
            alignTicks: true,
            offset: 80,
            axisLine: {
              show: true,
              lineStyle: {
                color: '#B0B0B0'
              }
            },
            axisLabel: {
              formatter: '{value}'
            }
          }
        ],
        series: [
          {
            name: 'Stock Price',
            type: 'line',
            smooth: false,
            data: [150.0, 152.0, 155.0, 157.0, 160.0, 158.0, 162.0, 165.0, 170.0, 175.0, 172.0, 169.0, 168.0, 165.0, 170.0, 172.0, 175.0, 177.0, 180.0, 182.0, 185.0, 187.0, 190.0, 192.0, 195.0, 197.0, 200.0, 198.0, 195.0, 192.0]
            ,
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 1,
                colorStops: [
                  { offset: 0, color: 'rgba(84, 112, 198, 0.5)' }, // Start color
                  { offset: 1, color: 'rgba(84, 112, 198, 0)' } // End color
                ],
                global: false // false by default
              }
            },
            lineStyle: {
              color: '#5470C6'
            }
          },
          {
            name: 'Volume A',
            type: 'bar',
            yAxisIndex: 1,
            barWidth: '15%',
            itemStyle: {
              color: '#B0B0B0'
            },
            data: [1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 3100, 3200, 3300, 3400, 3500, 3600, 3700, 3800, 3900, 4000, 4100]
          },
          {
            name: 'Volume B',
            type: 'bar',
            yAxisIndex: 1,
            barWidth: '15%',
            itemStyle: {
              color: '#FF6F61'
            },
            data: [1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 3100, 3200, 3300, 3400, 3500, 3600, 3700, 3800, 3900]
          },
          {
            name: 'Volume C',
            type: 'bar',
            yAxisIndex: 1,
            barWidth: '15%',
            itemStyle: {
              color: '#32C48D'
            },
            data: [800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350, 1400, 1450, 1500, 1550, 1600, 1650, 1700, 1750, 1800, 1850, 1900, 1950, 2000, 2050, 2100, 2150, 2200, 2250]
          }
        ]
      },
        '6m': {
          color: ['#5470C6', '#B0B0B0', '#FF6F61', '#32C48D'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
          grid: {
            right: '20%'
          },
          toolbox: {
            feature: {
             
              
              saveAsImage: { show: true }
            }
          },
          legend: {
            show: false,
            data: ['Stock Price', 'Volume A', 'Volume B', 'Volume C']
          },
          xAxis: [
            {
              type: 'category',
              axisTick: {
                alignWithLabel: true
              },
              data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            
 axisLabel : {
show: false
 }           }
          ],
          yAxis: [
            {
              type: 'value',
              name: 'Stock Price',
              position: 'left',
              alignTicks: true,
              axisLine: {
                show: true,
                lineStyle: {
                  color: '#5470C6'
                }
              },
              axisLabel: {
                formatter: '${value}'
              }
            },
            {
              type: 'value',
              name: 'Volume',
              position: 'right',
              alignTicks: true,
              offset: 80,
              axisLine: {
                show: true,
                lineStyle: {
                  color: '#B0B0B0'
                }
              },
              axisLabel: {
                formatter: '{value}'
              }
            }
          ],
          series: [
            {
              name: 'Stock Price',
              type: 'line',
              smooth: false,
              data: [160.0, 165.0, 155.0, 170.0, 175.0, 180.0],
              areaStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 1,
                  colorStops: [
                    { offset: 0, color: 'rgba(84, 112, 198, 0.5)' }, // Start color
                    { offset: 1, color: 'rgba(84, 112, 198, 0)' } // End color
                  ],
                  global: false // false by default
                }
              },
              lineStyle: {
                color: '#5470C6'
              }
            },
            {
              name: 'Volume A',
              type: 'bar',
              yAxisIndex: 1,
              barWidth: '15%',
              itemStyle: {
                color: '#B0B0B0'
              },
              data: [1500, 1600, 1700, 1800, 1900, 2000]
            },
            {
              name: 'Volume B',
              type: 'bar',
              yAxisIndex: 1,
              barWidth: '15%',
              itemStyle: {
                color: '#FF6F61'
              },
              data: [1200, 1300, 1400, 1500, 1600, 1700]
            },
            {
              name: 'Volume C',
              type: 'bar',
              yAxisIndex: 1,
              barWidth: '15%',
              itemStyle: {
                color: '#32C48D'
              },
              data: [1000, 1100, 1200, 1300, 1400, 1500]
            }
          ]
        } ,
        '1y': {
          color: ['#5470C6', '#B0B0B0', '#FF6F61', '#32C48D'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
          grid: {
            right: '20%'
          },
          toolbox: {
            feature: {
             
              
              saveAsImage: { show: true }
            }
          },
          legend: {
            show: false,
            data: ['Stock Price', 'Volume A', 'Volume B', 'Volume C']
          },
          xAxis: [
            {
              type: 'category',
              axisTick: {
                alignWithLabel: true
              },
              data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            
 ,axisLabel : {
show: false
 }           }
          ],
          yAxis: [
            {
              type: 'value',
              name: 'Stock Price',
              position: 'left',
              alignTicks: true,
              axisLine: {
                show: true,
                lineStyle: {
                  color: '#5470C6'
                }
              },
              axisLabel: {
                formatter: '${value}'
              }
            },
            {
              type: 'value',
              name: 'Volume',
              position: 'right',
              alignTicks: true,
              offset: 80,
              axisLine: {
                show: true,
                lineStyle: {
                  color: '#B0B0B0'
                }
              },
              axisLabel: {
                formatter: '{value}'
              }
            }
          ],
          series: [
            {
              name: 'Stock Price',
              type: 'line',
              smooth: false,
              data: [
                150.0, 155.0, 160.0, 145.0, 160.0, 155.0, 170.0, 175.0, 165.0, 170.0, 160.0, 155.0
              ],
              areaStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 1,
                  colorStops: [
                    { offset: 0, color: 'rgba(84, 112, 198, 0.5)' },
                    { offset: 1, color: 'rgba(84, 112, 198, 0)' }
                  ],
                  global: false
                }
              },
              lineStyle: {
                color: '#5470C6'
              }
            },
            {
              name: 'Volume A',
              type: 'bar',
              yAxisIndex: 1,
              barWidth: '15%',
              itemStyle: {
                color: '#B0B0B0'
              },
              data: [
                1000, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200
              ]
            },
            {
              name: 'Volume B',
              type: 'bar',
              yAxisIndex: 1,
              barWidth: '15%',
              itemStyle: {
                color: '#FF6F61'
              },
              data: [
                800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900
              ]
            },
            {
              name: 'Volume C',
              type: 'bar',
              yAxisIndex: 1,
              barWidth: '15%',
              itemStyle: {
                color: '#32C48D'
              },
              data: [
                600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700
              ]
            }
          ]
        }
  };