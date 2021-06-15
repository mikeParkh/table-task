import theme from '../../styles/theme';

const ArrowUpSVG = () => (
  <svg 
    viewBox="0 0 350 100"
    transform="rotate(-30)"
    fill={theme.colors.primary.green}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" />
      </marker>
    </defs>
    <line 
      x1="0" y1="50" x2="250" y2="50"
      strokeWidth="8"
      stroke={theme.colors.primary.green}
      markerEnd="url(#arrowhead)" 
    />
  </svg>
);

export default ArrowUpSVG;
