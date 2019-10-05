import React from 'react';
import RouterIndex from './route/routerIndex';
import MainHeader from "./components/mainHeader";
import MainFooter from "./components/mainFooter";

import './components/index.css'

function App() {
  return (
    <div className="App">
        <MainHeader/>
        <main className={'main'}>
            <RouterIndex/>
        </main>
        <MainFooter/>
    </div>
  );
}

export default App;
