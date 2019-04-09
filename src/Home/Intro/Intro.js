import React from 'react';
import { NavLink } from "react-router-dom";
import './Intro.css';

const intro = (props) => {
  return (
      <div className="jumbotron">
          <h1>Bc. Filip Bořil</h1>
          <p className="lead">
              Jsem student magisterského programu informatika na FIT.ČVUT. Mým oborem je softwarové inženýrství se zaměřením na webové inženýrství.
              Kariérně jsem začínal prací s databázemi a tvorbu reportů s využitím excelových maker pro oddělení finančního plánování české banky.
              Poté jsem se ale přesunul k tomu, co mě baví více, tedy tvorbě webových aplikací. Nejvíce zkušeností mám s programováním v PHP a frameworku
              Nette. V poslední době mě zaujalo programování v Reactu, ve kterém je napsán také tento web.
          </p>
          <NavLink to="/projects" role="button" className="btn btn-lg btn-primary">Zobrazit projekty →</NavLink>
      </div>
  );
};

export default intro;
