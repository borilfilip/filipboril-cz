import React from 'react';
import './CV.css';
import Block from './Block/Block'
import Entry from './Entry/Entry'
import Alert from 'react-bootstrap/Alert'
import {FormattedMessage} from "react-intl";

const CV = () => {
  return (
    <div className="CV">
      <h1><FormattedMessage id="cv"/></h1>
      <Alert variant="dark">
        <FormattedMessage id="hidden-staff-in-cv"/>
      </Alert>

      <Block name={<FormattedMessage id="education"/>}>
        <Entry name="2018">Tallinn University of Technology (Erasmus+)</Entry>
        <Entry name="2014 – 2019"><FormattedMessage id="fit-ctu"/></Entry>
        <Entry name="2010 – 2014">Gymnázium U Libeňského zámku (<FormattedMessage id="focus-on-it"/>)</Entry>
      </Block>

      <Block name={<FormattedMessage id="practise"/>}>
        <Entry name="2019 – současnost">SinnerSchrader – <FormattedMessage id="s2-job"/></Entry>
        <Entry name="2018 – 2019">NETservis – <FormattedMessage id="nts-job"/></Entry>
        <Entry name="2017 – 2018">Evosoft – <FormattedMessage id="twa"/></Entry>
        <Entry name="2015 – 2017">Česká spořitelna – <FormattedMessage id="cs-job"/></Entry>
      </Block>

      <Block name={<FormattedMessage id="skills-and-hobbies"/>}>
        <Entry name="Řidičský průkaz">AM, B1, B</Entry>
        <Entry name="Cizí jazyky"><FormattedMessage id="language-skills"/></Entry>
        <Entry name="Programovací jazyky">C++, Java, Java EE, Python, VBA</Entry>
        <Entry name="Vývoj webu">HTML, CSS, PHP, Javascript (ES6), Nette, Symfony, React, REST API, Bootstrap</Entry>
        <Entry name="Databáze">MySQL, Microsoft SQL Server, Oracle</Entry>
        <Entry name="Další IT dovednosti">BASH, Git, Docker</Entry>
        <Entry name="Další zájmy"><FormattedMessage id="programming"/>, <FormattedMessage
          id="travelling"/>, <FormattedMessage id="cycling"/></Entry>
      </Block>
    </div>
  );
};

export default CV;
