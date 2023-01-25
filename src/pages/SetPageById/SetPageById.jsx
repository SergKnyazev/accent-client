import { useParams } from 'react-router-dom';
import './SetPageById.scss';
// import { Sets } from '../../components/Sets';

export const SetPageById = () => {

  const { setsId } = useParams();

  return <>
    <p>Set Page By ID : {setsId}</p>
    {/*<Sets />*/}
  </>
}
