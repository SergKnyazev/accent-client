import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionSetSetsAsync} from '../../store/setsStore/setsActionCreaters';
import './Sets.scss';
import { Link } from 'react-router-dom';





export const Sets = () => {
  console.log('-------------------  RE-RENDER SETS  -------------------------')
  const dispatch = useDispatch();
  const sets = useSelector(store => store.setsState.sets);

  useEffect(() => {
    dispatch(actionSetSetsAsync());
  },[])






  console.log('*** sets --> state ***');
  console.log(sets);

  if (sets.length) {
    console.log('sets +++++++++++++++++++++++++++++++++++');
    console.log(sets);
  }






  // const btnSetsClickHandler = () => {
  //   dispatch(actionSetSetsAsync());
  //   // setStartTraining(true);
  //   // setState(state => !state);
  // }


  // const sets = [
  //   {
  //     "sets_id": "11",
  //     "users_id": "123",
  //     "sets_name": "SET-10",
  //     "is_system": true
  //   },
  //   {
  //     "sets_id": "12",
  //     "users_id": "234",
  //     "sets_name": "SET-50",
  //     "is_system": true
  //   },
  //   {
  //     "sets_id": "13",
  //     "users_id": "345",
  //     "sets_name": "SET-100",
  //     "is_system": true
  //   }
  // ]

  return <>
    <h1>Sets</h1>

    {/*<button onClick={btnSetsClickHandler}>SET_SETS</button>*/}
    <ul>
      { sets.map(set => {
        return (
          <li key={set.sets_id}>
            <Link to={`/sets/${set.sets_id}`} >
              <span>{set.sets_id}</span>-
              <span>{set.users_id}</span>-
              <span>{set.sets_name}</span>-
              <span>{set.is_system.toString()}</span>
            </Link>
          </li>)
        })
      }
    </ul>

  </>
}
