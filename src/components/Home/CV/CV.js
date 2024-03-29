import React from "react";
import "./CV.css";
import Block from "./Block/Block";
import Entry from "./Entry/Entry";
import Alert from "react-bootstrap/Alert";
import { FormattedMessage } from "react-intl";

const CV = () => {
  return (
    <div className="CV">
      <h1>
        <FormattedMessage id="cv" />
      </h1>
      <Alert variant="dark">
        <FormattedMessage id="hidden-staff-in-cv" />
      </Alert>

      <Block name={<FormattedMessage id="education" />}>
        <Entry name="2018">Tallinn University of Technology (Erasmus+)</Entry>
        <Entry name="2014 – 2019">
          <FormattedMessage id="fit-ctu" />
        </Entry>
        <Entry name="2010 – 2014">
          Gymnázium U Libeňského zámku (<FormattedMessage id="focus-on-it" />)
        </Entry>
      </Block>

      <Block name={<FormattedMessage id="practice" />}>
        <Entry name="2021 – 2022">
          Economia – <FormattedMessage id="eco-job" />
        </Entry>
        <Entry name="2019 – 2021">
          SinnerSchrader – <FormattedMessage id="s2-job" />
        </Entry>
        <Entry name="2018 – 2019">
          NETservis – <FormattedMessage id="nts-job" />
        </Entry>
        <Entry name="2017 – 2018">
          Evosoft – <FormattedMessage id="twa" />
        </Entry>
        <Entry name="2015 – 2017">
          Česká spořitelna – <FormattedMessage id="cs-job" />
        </Entry>
      </Block>

      <Block name={<FormattedMessage id="skills-and-hobbies" />}>
        <Entry name={<FormattedMessage id="driving-licence" />}>
          <FormattedMessage id="driving-licence-details" />
        </Entry>
        <Entry name={<FormattedMessage id="foreign-languages" />}>
          <FormattedMessage id="language-skills" />
        </Entry>
        <Entry name={<FormattedMessage id="web-development" />}>
          HTML, CSS, Typescript (ES6), React, React Native, Redux, Bootstrap,
          PHP, Nette
        </Entry>
        <Entry name={<FormattedMessage id="databases" />}>
          MySQL, Microsoft SQL Server, Oracle, Firebase
        </Entry>
        <Entry name={<FormattedMessage id="other-programming" />}>
          BASH, Git, Docker, C++, Java, Java EE, Python, VBA
        </Entry>
        <Entry name={<FormattedMessage id="other-hobbies" />}>
          <FormattedMessage id="hobbies" />
        </Entry>
      </Block>
    </div>
  );
};

export default CV;
