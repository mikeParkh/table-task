import { useMemo } from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useTable, usePagination } from 'react-table';
import { AttitudeDirection } from '../common';
import { getDirection } from './utils';
import { mapObjectValuesToArray, getAverage } from '../../helpers';
import { tableData } from '../../data';
import { getFactorA } from '../../redux/app/selectors';
import './Table.scss';

function Table({ factorA }) {
  const history = useHistory();
  const { userID } = useParams();

  const data = useMemo(
    () => tableData.map(({ id, firstName, secondName, attitudeBehavior }, i) => {
      const average = getAverage(mapObjectValuesToArray(attitudeBehavior));
      const direction = getDirection(average, factorA);

      return {
        attitudeBehavior: (<AttitudeDirection direction={direction} />),
        iterator: (i + 1),
        secondName,
        firstName,
        id,
      }
    }),
    [factorA]
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Personal Attitude Behavior Table',
        columns: [
          {
            Header: 'Sq.N',
            accessor: 'iterator'
          },
          {
            Header: 'First Name',
            accessor: 'firstName',
          },
          {
            Header: 'Second Name',
            accessor: 'secondName',
          },
        ]
      },
      {
        Header: `Factor A: ${factorA}`,
        columns: [
          {
            Header: 'Attitude Behavior',
            accessor: 'attitudeBehavior',
          }
        ]
      }
    ],
    [factorA]
  );

  const {
    // table data
    getTableBodyProps,
    getTableProps,
    headerGroups,
    prepareRow,
    page,

    // pagination
    previousPage,
    gotoPage,
    nextPage,
  } = useTable(
    { 
      data, 
      columns,
      initialState: { pageSize: 5 }
    },
    usePagination
  );

  const handleRowClick = ({ id }) => history.push(`/${id}`);

  const setRowClassName = ({ id }) => (
    id === Number(userID) ? 'table__tr table__tr_active' : 'table__tr'
  );

  return (
    <>
      <table className="table" {...getTableProps()}>
        <thead className="table__thead">
          {headerGroups.map(headerGroup => (
            <tr  className="table__tr" {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th  className="table__th" {...column.getHeaderProps()}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody className="table__tbody" {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row)
            return (
              <tr 
                className={setRowClassName(row.original)} 
                onClick={() => handleRowClick(row.original)}
                {...row.getRowProps()} 
              >
                {row.cells.map(cell => (
                  <td className="table__td" {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>

      <div className="pagination">
        <button onClick={previousPage} className="pagination__element">{"<<"}</button>
        <span onClick={() => gotoPage(0)} className="pagination__element">1</span>
        <span onClick={() => gotoPage(1)} className="pagination__element">2</span>
        <button onClick={nextPage} className="pagination__element">{">>"}</button>
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  factorA: getFactorA(state),
});

export default connect(mapStateToProps)(Table);
