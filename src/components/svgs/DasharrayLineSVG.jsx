import theme from '../../styles/theme';

const DirectionSVG = () => (
  <svg viewBox="0 0 350 100" xmlns="http://www.w3.org/2000/svg">
    <line 
      x1="0" y1="50" x2="350" y2="50"
      strokeWidth="8"
      stroke={theme.colors.primary.yellow}
      strokeDasharray="24 8"
      markerEnd="url(#arrowhead)" 
    />
  </svg>
);

export default DirectionSVG;
