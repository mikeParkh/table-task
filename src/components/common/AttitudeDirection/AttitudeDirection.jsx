import { ArrowUpSVG, ArrowDownSVG, DasharrayLineSVG } from '../../svgs';

const AttitudeDirection = ({ direction }) => (
  <>
    {direction === 'up' && <ArrowUpSVG />}
    {direction === 'down' && <ArrowDownSVG />}
    {direction === 'horizontal' && <DasharrayLineSVG />}
  </>
)

export default AttitudeDirection;
