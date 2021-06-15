import theme from '../../styles/theme';

const PolygonSVG = ({
  stroke = theme.colors.primary.blue,
  fill = theme.colors.secondary.blue,
  strokeWidth = 2,
}) => (
  <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    <polygon 
      points="64,2  126,58  95,128  33,128 2,58"
      stroke={stroke}
      fill={fill}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export default PolygonSVG;
