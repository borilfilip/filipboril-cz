import React from 'react';
import './CV.css';
import Row from './Row/Row'
import Headline from "./Headline/Headline";
import Table from "./Table/Table";
import Alert from 'react-bootstrap/Alert'

const CV = (props) => {
  return (
      <div className="CV">
          <h1>Životopis</h1>
          <Alert variant="dark">
              Ze životopisu jsou skryty osobní údaje. Celý životopis v PDF zašlu na vyžádání.
          </Alert>
          <Table>
              <Headline>Vzdělání</Headline>
              <Row name="2018">Tallinn University of Technology (Erasmus+)</Row>
              <Row name="2014 – 2019">Fakulta infomačních technologií, ČVUT</Row>
              <Row name="2010 – 2014">Gymnázium U Libeňského zámku (se zaměřením na IT)</Row>

              <Headline>Praxe</Headline>
              <Row name="2018 – 2019">NETservis – Tvorba webových prezentací a eshopů</Row>
              <Row name="2017 – 2018">Evosoft – Tvorba webových aplikací</Row>
              <Row name="2015 – 2017">Česká spořitelna – Data mining, tvorba reportů</Row>

              <Headline>Dovednosti a zájmy</Headline>
              <Row name="Řidičský průkaz">AM, B1, B</Row>
              <Row name="Cizí jazyky">Pokročilá angličtina (B2), základy němčiny (A2) a ruštiny (A1)</Row>
              <Row name="Programovací jazyky">C++, Java, Python, VBA</Row>
              <Row name="Vývoj webu">HTML, CSS, PHP, JQuery, Nette, Symfony</Row>
              <Row name="Databáze">MySQL, Microsoft SQL Server, Oracle</Row>
              <Row name="Další IT dovednosti">Uživatelská znalost BASH, učím se React</Row>
              <Row name="Další zájmy">Linux, programování, cestování, cyklistika</Row>
          </Table>
      </div>
  );
};

export default CV;
