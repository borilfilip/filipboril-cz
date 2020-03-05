import React from 'react';
import {Navbar, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import {FormattedMessage} from "react-intl";
import './LanguageSwitcher.css'

const languageSwitcher = (props) => {
  return (
    <>
      <Navbar.Text>
        <FormattedMessage id="language"/>:
      </Navbar.Text>
      <ToggleButtonGroup
        className="languageToggle"
        type="radio"
        size="sm"
        name="language"
        defaultValue={props.language}
        onChange={props.onLanguageChange}
      >
        <ToggleButton value="cs" variant="secondary">CZ</ToggleButton>
        <ToggleButton value="en" variant="secondary">EN</ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};

export default languageSwitcher;
