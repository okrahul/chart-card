# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

# Chart Card

**Chart Card** is a React project that displays interactive charts with different time intervals. It includes components for rendering charts and allows for fullscreen toggling and tab-based navigation. The project uses Material-UI for styling and Vite as the build tool.

## Features

- **Interactive Charts**: Display various types of charts using `echarts` with different time intervals (1D, 3D, 1W, 1M, 6M, 1Y).
- **Fullscreen Mode**: Toggle fullscreen mode for better visualization.
- **Tab Navigation**: Switch between different time intervals with a tab-based interface.
- **Custom Components**: Utilize reusable components like `CustomTab` and `CustomButton`.

## Components

- **`ChartTab`**: The main component that manages the chart display and tab navigation.
- **`CustomButton`**: A customizable button component used for various actions.
- **`CustomTab`**: A stylized tab component for switching between chart views.
- **`Chart`**: A component that renders the chart based on the selected options.

## Installation

To get started with **Chart Card**, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/chart-card.git
   cd chart-card
   yarn
   yarn dev

## Acknowledgments

- **Material-UI**: For providing the UI components and styling.
- **ECharts**: For the charting library.
- **Vite**: For the fast build tool.
- **Official Plugins**:
  - [Vite Plugin React](https://vitejs.dev/plugins/#react) - Official plugin for integrating React with Vite.
  - [Vite Plugin ECharts](https://github.com/Topolr/vite-plugin-echarts) - Official plugin for integrating ECharts with Vite.


- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
