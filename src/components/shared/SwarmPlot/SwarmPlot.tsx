import { ResponsiveSwarmPlot } from '@nivo/swarmplot';

import { swarmPlotData } from '../../../componentsData/index';
import { WidgetProps } from '../../../types/widgetTypes';

import styles from '../sharedStyle.module.scss';

const SwarmPlot = ({ data }: WidgetProps): JSX.Element => (
  <div style={{ height: `${data.size}` }} className={styles.container}>
    {data.title && (
      <div className={styles.titleContainer}>
        <div className={styles.title}>{data.title}</div>
      </div>
    )}

    <ResponsiveSwarmPlot
      data={swarmPlotData}
      groups={['group A', 'group B', 'group C']}
      // identity="id"
      value="price"
      valueFormat="$.2f"
      valueScale={{ type: 'linear', min: 0, max: 500, reverse: false }}
      size={{
        key: 'volume',
        values: [4, 20],
        sizes: [6, 20],
      }}
      forceStrength={4}
      simulationIterations={100}
      borderColor={{
        from: 'color',
        modifiers: [
          ['darker', 0.6],
          ['opacity', 0.5],
        ],
      }}
      margin={{ top: 80, right: 100, bottom: 80, left: 100 }}
      // axisTop={{
      //   orient: 'top',
      //   tickSize: 10,
      //   tickPadding: 5,
      //   tickRotation: 0,
      //   legend: 'group if vertical, price if horizontal',
      //   legendPosition: 'middle',
      //   legendOffset: -46,
      // }}
      // axisRight={{
      //   orient: 'right',
      //   tickSize: 10,
      //   tickPadding: 5,
      //   tickRotation: 0,
      //   legend: 'price if vertical, group if horizontal',
      //   legendPosition: 'middle',
      //   legendOffset: 76,
      // }}
      // axisBottom={{
      //   orient: 'bottom',
      //   tickSize: 10,
      //   tickPadding: 5,
      //   tickRotation: 0,
      //   legend: 'group if vertical, price if horizontal',
      //   legendPosition: 'middle',
      //   legendOffset: 46,
      // }}
      // axisLeft={{
      //   orient: 'left',
      //   tickSize: 10,
      //   tickPadding: 5,
      //   tickRotation: 0,
      //   legend: 'price if vertical, group if horizontal',
      //   legendPosition: 'middle',
      //   legendOffset: -76,
      // }}
    />
  </div>
);

export default SwarmPlot;