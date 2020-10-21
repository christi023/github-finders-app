import React from 'react';
// Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Include the fusioncharts library
import FusionCharts from 'fusioncharts';

// Include the chart type
import Chart from 'fusioncharts/fusioncharts.charts';

// Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const ChartComponent = ({ data }) => {
  // STEP 3 - Creating the JSON object to store the chart configurations
  const chartConfigs = {
    type: 'doughnut2d', // The chart type
    width: '100%', // Width of the chart
    height: '350', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        baseFont: 'Open Sans',
        baseFontSize: 16,
        baseFontColor: '#fff',
        caption: 'Stars Per Language',
        captionFontColor: '#fff',
        captionFontBold: 0,
        captionFontSize: 20,
        captionFont: 'Roboto',
        decimals: 0,
        doughnutRadius: '45%',
        pieRadius: '45%',
        smartLineColor: '#617d98',
        showShadow: 0,
        showPlotBorder: 0,
        showBorder: 0,
        showPercentValues: 0,
        theme: 'candy',
        use3DLighting: 0,
        useDataPlotColorForLabels: 0,
      },
      // Chart Data
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;
