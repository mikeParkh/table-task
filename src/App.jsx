import { useEffect } from 'react'
import { connect } from 'react-redux';
import { tableData } from './data';
import { serializeDataByID } from './helpers';
import { setData, setFactorA } from './redux/app/actions';
import { useFactorA } from './hooks';

const App = ({ children, setData, setFactorA }) => {
  const factorA = useFactorA();

  useEffect(
    () => {
      setData(serializeDataByID(tableData));
      setFactorA(factorA);
    },
    [setData, setFactorA, factorA]
  );

  return (
    <>
      <div className="App">
        {children}
      </div>
      <div id="modal" />
    </>
  )
};

const mapDispatchToProps = {
  setFactorA,
  setData,
};

export default connect(null, mapDispatchToProps)(App);
