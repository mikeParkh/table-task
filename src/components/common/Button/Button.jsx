import { PolygonSVG } from '../../svgs';
import './Button.scss';

const Button = ({ children, className, ...restProps }) => (
  <button {...restProps} className={`.button-base ${className}`}>
    <div className="button-base__body">
      <PolygonSVG />
    </div>
    <div className="button-base__inner">
      {children}
    </div>
  </button>
)

export default Button;
