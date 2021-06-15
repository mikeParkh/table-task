import { useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import Table from '../../components/Table';
import Modal from '../../components/Modal';
import Chart from '../../components/Chart';
import { Button } from '../../components/common';
import { useModalState } from '../../hooks';
import './Main.scss';

function Main() {
  const { userID } = useParams();
  const { onOpen, onClose, isOpen } = useModalState();

  const path = userID ? `/greeting/${userID}` : '/greeting/no-user';

  const onClick = useCallback(
    () => userID && onOpen(),
    [onOpen, userID]
  )

  return (
    <div className="page main">
      <div className="main__body">
        <Table />
      </div>
      <div className="main__footer">
        <div className="main__buttons">
          <Link to={path}>
            <Button className="main__button">Say hi</Button>
          </Link>
          <Button onClick={onClick} className="main__button">Show metrics</Button>
        </div>
        {isOpen && (
          <Modal onClose={onClose} isOpen={isOpen}>
            <Chart userID={userID} />
          </Modal>
        )}
      </div>
    </div>
  )
}

export default Main;

