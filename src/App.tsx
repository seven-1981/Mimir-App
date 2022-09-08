import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Home} from './Home';
import {CardsScreen} from "./CardsScreen";

const ROUTE_HOME = '/';
const ROUTE_CARDS = '/cards';


function App() {
  return (
    <>
        <Routes>
            <Route path={ROUTE_HOME} element={<Home/>}>
                <Route path={ROUTE_CARDS} element={<CardsScreen/>}/>
            </Route>
        </Routes>
    </>
  );
}

export default App;
