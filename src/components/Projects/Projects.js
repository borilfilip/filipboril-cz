import React from 'react';
import './Projects.css';
import Project from "./Project/Project";
import Card from "react-bootstrap/Card";
import {Button} from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";
import {FormattedMessage} from "react-intl";

const projects = () => {
  return (
    <div className="Projects">
      <Project img="/img/volkswagen-thumb.png" name="Volkswagen WWW | 2019-21">
        <p>
          Webové stránky pro <a href="https://www.volkswagen.de" target="_blank" rel="noreferrer noopener">
          Volkswagen</a> a jeho návštěvníky většiny trhů, na nichž VW působí. Spolupracoval jsem s týmem v{' '}
          <a href="https://sinnerschrader.com/" target="_blank" rel="noreferrer noopener">SinnerSchrader</a> v Praze a
          v Hamburku, moje práce jakožto front-end developera je vidět na některých komponentách, jako například
          vyhledávání, navigation flyoutu nebo disclaimery.
        </p>
        <p>
          <FormattedMessage id="tech-used"/>: React, Typescript, CSS, styled-components, GIT, docker,…
        </p>
      </Project>
      <Project img="/img/filipboril-cz-thumb.png" name={<><FormattedMessage id="this-web"/> | 2019-21</>}>
        <p>
          Můj první projekt v reactu, na kterém jsem se react učil, který mě kariérně prezentuje a který též
          dokládá mé znalosti reactu (v menu Ukázky). Skládá se ze z backendu v Nette a v frontendu ve zmíněném
          reactu. Repozitář s frontendem jsem zveřejnil k nahlédnutí na githubu.
        </p>
        <p>
          <FormattedMessage id="tech-used"/>: React, redux, bootstrap, PHP, nette, MySQL, GIT,…
        </p>
        <a href="https://github.com/borilfilip/filipboril-cz" target="_blank" rel="noreferrer noopener"
           className="btn btn-primary btn-sm" role="button">
          <i className="fab fa-github"/> <FormattedMessage id="source-files"/>
        </a>
      </Project>
      <Project img="/img/fras-hp-thumb.png" name={<><FormattedMessage id="bachelor-project-headline"/> | 2018-19</>}>
        <p>
          Systém má zá úkol zjednodušit proces zazamenávání docházky. Je tvořen moduly, z nichž jeden běží na
          Raspberry PI a má na starosti detekovat pohyb a fotit procházející lidi. Další modul na pořízených
          fotkách rozpozná tváře. Hlavním modulem je webový portál, přes který se kontroluje docházka, správnost
          rozpoznání a také zadává a schvaluje dovolená a spravuje se celý systém.
        </p>
        <p>
          <FormattedMessage id="tech-used"/>: PHP, nette, jQuery, python, bootstrap, fontawesome, MySQL, docker,…
        </p>
        <a href="/fras-code-demo.zip" className="btn btn-primary btn-sm" role="button"><i
          className="far fa-file-archive"/> <FormattedMessage id="code-demo"/></a>{' '}
        <a href="https://dspace.cvut.cz/handle/10467/79461" target="_blank" rel="noreferrer noopener"
           className="btn btn-primary btn-sm" role="button">
          <i className="fas fa-external-link-alt"/>{' '}
          <FormattedMessage id="bachelor-project"/>
        </a>
      </Project>
      <Project img="/img/cokolada-hp-thumb.png" name={<><FormattedMessage id="webredakce-headline"/> | 2018-19</>}>
        <p>
          Jedná se o nasazení a úprava hotového řešení v podobě eshopu a redakčního systému. Na každém projektu
          jsem prováděl nasazení připravených html šablon a vývoj dodatečných modulů na míru každého klienta.
          Kromě krátkodobějších projektů, jako{' '}
          <a href="http://www.gastro-projekt.cz/" target="_blank" rel="noopener noreferrer">Gastro projekt</a>,{' '}
          <a href="http://www.galt-pro-deti.cz/" target="_blank" rel="noopener noreferrer">Galt pro děti</a>,{' '}
          <a href="https://www.mdlet.cz/" target="_blank" rel="noopener noreferrer">MDlet</a>,{' '}
          <a href="https://portal.powdergatecapital.com/" target="_blank" rel="noopener noreferrer">Powdergate Capital</a>,{' '}
          <a href="http://www.cafeadastra.cz/" target="_blank" rel="noopener noreferrer">Cafe Adastra</a>,{' '}
          <a href="https://svupraha-cz.dempsey.netservis.cz/" target="_blank" rel="noopener noreferrer">SVU Praha</a>,{' '}
          <a href="http://www.energopraha.com/" target="_blank" rel="noopener noreferrer">Energo praha</a>,
          jsem vyvíjel také projekty s mnoha moduly a importem dat, jako byl web{' '}
          <a href="https://cokolada-cz.vacatko.netservis.cz/" target="_blank" rel="noopener noreferrer">čokolády</a>.
        </p>
        <p>
          <FormattedMessage id="tech-used"/>: PHP, jQuery, MySQL,…
        </p>
      </Project>
      <Project img="/img/sep-hp-thumb.png" name={<><FormattedMessage id="sep-headline"/> | 2017-18</>}>
        <p>
          Skupinová evidence protistran je portál, který eviduje protistrany, vytvořený pro banku. Na tomto
          projektu jsem se podílel ve firmě <a href="https://evosoft.cz/" target="_blank" rel="noopener noreferrer">
          evosoft s r.o.</a> Systém má za cíl každému subjektu ukázat různé údaje o jedné protistraně. Mimo to údaje
          také importuje a exportuje přes API třetích stran.
        </p>
        <p>
          <FormattedMessage id="tech-used"/>: PHP, nette, jQuery, Oracle, GIT, docker,…
        </p>
      </Project>

      <Card>
        <Card.Header>
          <Button variant="link" data-toggle="collapse" data-target="#collapseExample">
            <FormattedMessage id="old-projects"/>
          </Button>
        </Card.Header>
        <Collapse id="collapseExample">
          <Card.Body>
            <p>
              <FormattedMessage id="old-projects-intro"/>
            </p>
            <Project img="/img/iadm.png" name={<FormattedMessage id="iadm-headline"/>}>
              <p>
                Web slouží jako pomůcka při výuce psaní všemi deseti na PC. K naleznutí jsou zde domácí úkoly,
                které je na stránce možno rovnou vyzkoušet nebo opsat. Je to druhá verze webu psaná v čistém
                PHP v době, kdy jsem chodil do 8. třídy ZŠ.
              </p>
              <a href="http://iadm.wz.cz/" className="btn btn-primary btn-sm" role="button" target="_blank"
                 rel="noopener noreferrer">
                <i className="fas fa-external-link-alt"/>{' '}
                <FormattedMessage id="go-to-web"/>
              </a>
            </Project>
            <Project img="/img/noviny.png" name={<FormattedMessage id="iadm-news-headline"/>}>
              <p>
                V rámci webu iAdministrativa, jakožto webu, který měl určitou míru navštěvovanosti, jsem se
                rozhodl psát články a vyzkoušet si instalaci a práci s redakčním systémem wordpress.
                Články pojednávali zprvu o novinkách z tehdejší třídy, později o návodech na PC.
              </p>
              <a href="http://iadm.wz.cz/noviny/" className="btn btn-primary btn-sm" role="button"
                 target="_blank" rel="noopener noreferrer">
                <i className="fas fa-external-link-alt"/>{' '}
                <FormattedMessage id="go-to-web"/>
              </a>
            </Project>
            <Project img="/img/sesity.png" name={<FormattedMessage id="sesity-headline"/>}>
              <p>
                Web sloužil jako online zdroj zápisků z vyučování v 8. a 9. třídě na ZŠ Rychnovská. Tedy
                alespoň u předmětů, které byl někdo ochotný přepisovat. Web byl také napsaný v čistém PHP,
                když jsem chodil do 9. třídy.
              </p>
              <a href="http://sesity.borec.cz/" className="btn btn-primary btn-sm" role="button"
                 target="_blank" rel="noopener noreferrer">
                <i className="fas fa-external-link-alt"/>{' '}
                <FormattedMessage id="go-to-web"/>
              </a>
            </Project>
          </Card.Body>
        </Collapse>
      </Card>
    </div>
  );
};

export default projects;
