import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Home} from './Home';
import {CardsOverview} from "./CardsOverview";
import {Layout} from "./Layout";
import {EditCard} from "./EditCard";
import {CardList} from "./CardList";

const ROUTE_HOME = '/';
const ROUTE_CARDS = '/cards';

function App() {
  return (
    <>
        <CardList/>
    </>
  );
}

export default App;
