import ReactECharts from 'echarts-for-react'
// eslint-disable-next-line react/prop-types
export const Chart = ({options}) => {
  return (
    <div style={{ width: '100%', height: 'auto' }}>
      <ReactECharts option={options} />
    </div>
  );
};



