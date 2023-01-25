import { useState, useRef } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
// import {mixArrayElements, removeFirstElem, removeFirstElemToLastElemArray} from '../../utils/utils';
// import { axiosInstance } from '../../utils/utils';
import { actionSetIsTrueWordAsync, actionSetWordsAsync} from '../../store/wordsStore/wordsActionCreaters';
import { SetIsOver } from '../SetIsOver';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Start.scss';
// import { actionSetIsOver } from '../../store/uiStore/uiActionCreaters';

export const Start = () => {
  console.log('-------------------  RE-RENDER START  -------------------------')
  const dispatch = useDispatch();
  const [state, setState] = useState(true);
  const [startTraining, setStartTraining] = useState(false);

  let oneWord = '';
  let twoWord = '';
  let currentWord = {};

  const {words, isLoading, error} = useSelector(store => store.wordsState);
  // const setIsOver = useSelector(store => store.uiState.setIsOver);

  console.log('*** words --> state ***');
  console.log(words);
  console.log('*** words.length --> ');
  console.log(words.length);

  if (words.length) {
    console.log('words +++++++++++++++++++++++++++++++++++');
    console.log(words);
    console.log(words[0]);
    console.log(words[0].oneWord);
    console.log(words[0].twoWord);


    oneWord = words[0].oneWord;
    twoWord = words[0].twoWord;
    currentWord = words[0];
  } else {
    console.log('---------- SetIsOver ::: words.length === 0 ------------');
    console.log(words);
  }

  //--------------------------------------------------------------------  btnStartClickHandler
  const btnStartClickHandler = () => {
    dispatch(actionSetWordsAsync());
    setStartTraining(true);
    setState(state => !state);
  }

  //--------------------------------------------------------------------  btnClickHandler
  const btnClickHandler = (word, id) => {
    console.log('btnClickHandler --> word :::');
    console.log(word);
    console.log('btnClickHandler --> id :::');
    console.log(id);

    dispatch(actionSetIsTrueWordAsync(word, id));
    setState(state => !state);
  }







//***************************************************************************************
//***************************************************************************************
//***************************************************************************************
//***************************************************************************************
//***************************************************************************************
//***************************************************************************************






  const [xxx1, setXxx1] = useState('-none');
  const [classs, setClasss] = useState('black');
  const nodeRef = useRef(null);
  const mode = 'out-in';
  let wrapperClassNames = 'wrapper';

  return (
    <>
      <div className="main">

        <SwitchTransition mode={mode}>
          <CSSTransition
            // key={twoWord}
            key={state}
            nodeRef={nodeRef}
            addEndListener={(done) => {nodeRef.current.addEventListener("transitionend", done, false)}}
            classNames="fade"
          >
            <div ref={nodeRef}>
              <div className={wrapperClassNames}>
                { isLoading
                  ? <div className="loading">Loading...</div>
                  : null
                }
                { !words.length
                  ? <Button className="button" onClick={btnStartClickHandler}>START</Button>
                  : null
                }
                {/*{isTrueWord ? <div>ВЕРНО!</div> : <div>НЕ ВЕРНО!</div>}*/}
                <div className={`btn${xxx1}`}></div>
                { words.length
                  ? <Button className="button" onClick={() => btnClickHandler(oneWord,currentWord.words_id)}>{oneWord}</Button>
                  : null
                }
                { words.length
                  ? <Button className="button" onClick={() => btnClickHandler(twoWord,currentWord.words_id)}>{twoWord}</Button>
                  : null
                }
              </div>

              <div className={classs}>{JSON.stringify(words)}</div>

              { startTraining && !words.length && !error ? <SetIsOver /> : null }

              { error
                ? (
                  <>
                    <div>Error message : {error.message}</div>
                    <div>Error stack   : {error.stack}</div>
                  </>
                )
                : null
              }

            </div>


          </CSSTransition>
        </SwitchTransition>

      </div>
    </>
  )
}



