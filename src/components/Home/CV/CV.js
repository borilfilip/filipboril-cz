import React from 'react';
import './CV.css';
import Block from './Block/Block'
import Entry from './Entry/Entry'
import Alert from 'react-bootstrap/Alert'

const CV = (props) => {
  return (
    <div className="CV">
      <h1>Životopis</h1>
      <Alert variant="dark">
        Ze životopisu jsou skryty osobní údaje. Celý životopis v PDF zašlu na vyžádání.
      </Alert>

      <Block name="Vzdělání">
        <Entry name="2018">Tallinn University of Technology (Erasmus+)</Entry>
        <Entry name="2014 – 2019">Fakulta infomačních technologií, ČVUT</Entry>
        <Entry name="2010 – 2014">Gymnázium U Libeňského zámku (se zaměřením na IT)</Entry>
      </Block>

      <Block name="Praxe">
        <Entry name="2019 – současnost">SinnerSchrader – Tvorba frontendu v reactu pro Volkswagen</Entry>
        <Entry name="2018 – 2019">NETservis – Tvorba webových prezentací a eshopů</Entry>
        <Entry name="2017 – 2018">Evosoft – Tvorba webových aplikací</Entry>
        <Entry name="2015 – 2017">Česká spořitelna – Data mining, tvorba reportů</Entry>
      </Block>

      <Block name="Dovednosti a zájmy">
        <Entry name="Řidičský průkaz">AM, B1, B</Entry>
        <Entry name="Cizí jazyky">Pokročilá angličtina (B2), základy němčiny (A2) a ruštiny (A1)</Entry>
        <Entry name="Programovací jazyky">C++, Java, Java EE, Python, VBA</Entry>
        <Entry name="Vývoj webu">HTML, CSS, PHP, Javascript (ES6), Nette, Symfony, React, REST API, Bootstrap</Entry>
        <Entry name="Databáze">MySQL, Microsoft SQL Server, Oracle</Entry>
        <Entry name="Další IT dovednosti">BASH, Git, Docker</Entry>
        <Entry name="Další zájmy">Programování, cestování, cyklistika</Entry>
      </Block>
    </div>
  );
};

export default CV;
