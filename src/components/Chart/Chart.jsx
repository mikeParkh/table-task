import { useMemo } from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';
import theme from '../../styles/theme';
import { hexToRGBA, getAverage } from '../../helpers';
import { 
  mapObjectValuesToArray,
  mapObjectKeysToArray,
} from '../../helpers';
import { 
  getUserAttitudeBehaviorByID,
  getFactorA,
} from '../../redux/app/selectors';

const options = {
  scales: {
    yAxes: [
      {
        type: 'line',
        display: true,
        position: 'left',
        id: 'y-axis-1',
      },
    ]
  }
}

function Chart({ userData, factorA }) {
  const userAttitudeBehavior = mapObjectValuesToArray(userData);
  const labels = mapObjectKeysToArray(userData);
  const average = getAverage(userAttitudeBehavior);
  const factorADataSet = Array(userAttitudeBehavior.length).fill(factorA);
  const averageDataSet = Array(userAttitudeBehavior.length).fill(average);

  const data = useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: 'Factor A',
          data: factorADataSet,
          fill: false,
          backgroundColor: theme.colors.primary.yellow,
          borderColor: hexToRGBA(theme.colors.primary.yellow, 0.2),
          yAxisID: 'y-axis-1',
        },
        {
          label: 'Person attitude behavior average line',
          data: averageDataSet,
          fill: false,
          backgroundColor: theme.colors.primary.blue,
          borderColor: hexToRGBA(theme.colors.primary.blue, 0.2),
          yAxisID: 'y-axis-1',
        },
        {
          label: 'Graph of attitude behavior',
          data: userAttitudeBehavior,
          fill: false,
          backgroundColor: theme.colors.primary.green,
          borderColor: hexToRGBA(theme.colors.primary.green, 0.2),
          yAxisID: 'y-axis-1',
        },
      ]
    }),
    [factorADataSet, averageDataSet, userAttitudeBehavior, labels]
  )

  return (
    <Line data={data} options={options} />
  )
}

const mapStateToProps = (state, { userID }) => ({
  userData: getUserAttitudeBehaviorByID(state, userID),
  factorA: getFactorA(state),
})

export default connect(mapStateToProps)(Chart);
