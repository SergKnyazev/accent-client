// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
// import HomePage from '../pages/HomePage';
// import LoginPage from '../pages/LoginPage';
// import NotFoundPage from '../pages/NotFoundPage';
// import RegistrationPage from '../pages/RegistrationPage';
// import TodosPage from '../pages/TodosPage';
// import { actionCurrentUserAsync } from '../userStore/actionCreaters';
// import { actionCurrentUserAsync } from '../storesRtk/authSlice';
// import { actionConfirmAsync } from '../storessaga/actionCreaters';
// import authStore from '../storesMobx/authStore';
// import { observer } from 'mobx-react-lite';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout } from '../Layout';
import { Start } from '../Start';
import { SetsPage } from '../../pages/SetsPage';
import './App.scss';
import { SetPageById } from '../../pages/SetPageById';

export const App = () => {
  console.log('-------------------  RE-RENDER APP  -------------------------')

  // const { isAuth } = useSelector(state => state.userState);
  // const { isAuth } = useSelector(state => state.auth);
  // const dispatch = useDispatch();

  // const { isAuth, actionCurrentUserAsync } = authStore;

  // useEffect(() => {
  //   actionCurrentUserAsync();
  // }, [actionCurrentUserAsync]);

  // useEffect(() => {
  //   dispatch(actionConfirmAsync());
  // }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Start />}/>
        {/*{ !isAuth && <Route index element={<HomePage />}/> }*/}
        {/*{ isAuth && <Route index element={<TodosPage />}/> }*/}
        {/*<Route path='/auth/login' element={<LoginPage />}/>*/}
        {/*<Route path='/auth/register' element={<RegistrationPage />}/>*/}
        <Route path='/sets' element={<SetsPage />}/>
        <Route path='/sets/:setsId' element={<SetPageById />}/>
        {/*<Route path='/todos' element={<TodosPage />}/>*/}
        {/*<Route path='*' element={<NotFoundPage />}/>*/}
      </Route>
    </Routes>
  );
}


