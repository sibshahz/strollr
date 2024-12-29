import { PureComponent } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";
import { darkenColor } from "../../../../lib/utils";

const data = [
  { name: "Outdoor Activities", value: 85, fillColor: "#1cb0f6" },
  { name: "Paid Activities", value: 50, fillColor: "#ff4b4b" },
  { name: "Free Activities", value: 97, fillColor: "#ffc800" },
  { name: "At Home Activities", value: 90, fillColor: "#ce82ff" },
];

const renderActiveShape = (props) => {
  // const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    //  midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    payload,
  } = props;
  const darkenedFill = darkenColor(payload.fillColor, -20); // Darken by 20%
  return (
    <g className="hover:cursor-pointer">
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={darkenedFill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={darkenedFill}
        cornerRadius={10} // Rounded corners for the active shape
      />
    </g>
  );
};

export default class PieChartComponent extends PureComponent {
  state = {
    activeIndex: 0,
  };

  onPieEnter = (_, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            activeIndex={this.state.activeIndex}
            activeShape={renderActiveShape}
            data={data.map((item) => ({ ...item, fill: item.fillColor }))}
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={100}
            cornerRadius={10} // Rounded corners for all slices
            dataKey="value"
            onMouseEnter={this.onPieEnter}
          />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
