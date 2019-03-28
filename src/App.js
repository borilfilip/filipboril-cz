import React, { Component } from 'react';
import './App.css';
import Intro from "./Intro/Intro";
import Menu from './Menu/Menu'
import Social from './Social/Social'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Menu />
          <main className="container">
              <Intro headline="Bc. Filip Bořil">
                  Jsem student magisterského programu informatika na FIT.ČVUT. Mým oborem je softwarové inženýrství se zaměřením na webové inženýrství.
                  Kariérně jsem začínal prací s databázemi a tvorbu reportů s využitím excelových maker pro oddělení finančního plánování české banky.
                  Poté jsem se ale přesunul k tomu, co mě baví více, tedy tvorbě webových aplikací. Nejvíce zkušeností mám s programováním v PHP a frameworku
                  Nette. V poslední době mě zaujalo programování v Reactu, ve kterém je napsán také tento web.
              </Intro>
              <Social />
          </main>
      </div>
    );
  }
}

export default App;
