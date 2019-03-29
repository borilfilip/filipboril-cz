import React, { Component } from 'react';
import './Projects.css';
import Project from "./Project/Project";

class Projects extends Component {
  render() {
    return (
        <div className="Projects">
            <h1>Projekty</h1>
            <Project img="/img/fras-hp-thumb.png" name="FRAS – docházkový systém s rozpoznáváním tváří">
                Tento projekt byl vytvořen jako bakalářská práce. Systém má zá úkol zjednodušit proces zazamenávání
                docházky. Je tvořen moduly, z nichž jeden běží na Raspberry PI a má na starosti detekovat pohyb
                a fotit procházející lidi. Další modul na pořízených fotkách rozpozná tváře. Hlavním modulem je webový
                portál, přes který se kontroluje docházka, správnost rozpoznání a také zadává a schvaluje dovolená,
                prochází se historie, spravují se uživatelé a připojená zařízení.<br /><br />
                Použité technologie: PHP, HTML, nette, jQuery, python, bootstrap, MySQL, docker a další.
            </Project>
            <Project img="/img/sep-hp-thumb.png" name="SEP – skupinová evidence protistran">
                Skupinová evidence protistran je portál, který eviduje protistrany, vytvořený pro banku. Na tomto
                projektu jsem se podílel ve firmě <a href="https://evosoft.cz/" target="_blank">evosoft s r.o.</a>
                Systém má za cíl každému subjektu ukázat různé údaje o jedné protistraně. Mimo to údaje také importuje
                a exportuje přes API třetích stran.<br /><br />
                Použité technologie: PHP, HTML, nette, jQuery, Oracle, GIT, docker a další.
            </Project>
            <Project img="/img/cokolada-hp-thumb.png" name="Webredakce – eshopy a webové prezentace na míru">
                Jedná se o nasazení a úprava hotového řešení v podobě eshopu a redakčního systému. Na každém projektu
                jsem prováděl nasazení připravených html šablon a vývoj dodatečných modulů na míru každého klienta.
                Kromě krátkodobějších projektů, jako <a href="http://www.gastro-projekt.cz/" target="_blank">Gastro
                projekt</a>, <a href="http://www.galt-pro-deti.cz/" target="_blank">Galt pro děti</a>, <a
                href="https://www.mdlet.cz/" target="_blank">MDlet</a>, <a
                href="https://portal.powdergatecapital.com/" target="_blank">Powdergate Capital</a>, <a
                href="http://www.cafeadastra.cz/" target="_blank">Cafe Adastra</a>, <a
                href="https://svupraha-cz.dempsey.netservis.cz/" target="_blank">SVU Praha</a>, <a
                href="http://www.energopraha.com/" target="_blank">Energo praha</a>, jsem vyvíjel také projekty s mnoha
                moduly a importem dat, jako byl web <a href="https://cokolada-cz.vacatko.netservis.cz/" target="_blank">
                čokolády</a>.<br /><br />
                Použité technologie: PHP, HTML, jQuery, MySQL a další.
            </Project>
        </div>
    );
  }
}

export default Projects;
