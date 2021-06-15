import { connect } from 'react-redux';
import { getHours, getWeekdayNumber } from '../../helpers';
import { greetByDayTime, setPhraseByWeekday } from './utils';
import { getUserNameByID } from '../../redux/app/selectors';

function Greeting({ fullUserName }) {
  const date = new Date();
  const greeting = greetByDayTime(getHours(date))
  const phrase = setPhraseByWeekday(getWeekdayNumber(date));
  const userName = fullUserName ||  'White cup of strong grey';

  return (
    <h2>{greeting}, {userName}, {phrase}</h2>
  )
}

const mapStateToProps = (state, { match }) => ({
  fullUserName: getUserNameByID(state, match.params.userID),
})

export default connect(mapStateToProps)(Greeting);
