import React from 'react';
import { Link } from "react-router-dom";
import './Projects.css';
import Project from "./Project/Project";
import Card from "react-bootstrap/Card";
import {Button} from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";

const projects = (props) => {
  return (
    <div className="Projects">
      <Project img="/img/fras-hp-thumb.png" name="FRAS – docházkový systém s rozpoznáváním tváří (bakalářská práce)">
        <p>
          Systém má zá úkol zjednodušit proces zazamenávání docházky. Je tvořen moduly, z nichž jeden běží na
          Raspberry PI a má na starosti detekovat pohyb a fotit procházející lidi. Další modul na pořízených
          fotkách rozpozná tváře. Hlavním modulem je webový portál, přes který se kontroluje docházka, správnost
          rozpoznání a také zadává a schvaluje dovolená a spravuje se celý systém.
        </p>
        <p>
          Použité technologie: PHP, HTML, nette, jQuery, python, bootstrap, MySQL, docker a další.
        </p>
        <a href="/fras-code-demo.zip" className="btn btn-primary btn-sm" role="button"><i
          className="far fa-file-archive"/> Ukázka kódu</a>
      </Project>
      <Project img="/img/sep-hp-thumb.png" name="SEP – skupinová evidence protistran">
        <p>
          Skupinová evidence protistran je portál, který eviduje protistrany, vytvořený pro banku. Na tomto
          projektu jsem se podílel ve firmě <a href="https://evosoft.cz/" target="_blank">evosoft s r.o.</a>
          Systém má za cíl každému subjektu ukázat různé údaje o jedné protistraně. Mimo to údaje také importuje
          a exportuje přes API třetích stran.
        </p>
        <p>
          Použité technologie: PHP, HTML, nette, jQuery, Oracle, GIT, docker a další.
        </p>
      </Project>
      <Project img="/img/cokolada-hp-thumb.png" name="Webredakce – eshopy a webové prezentace na míru">
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
          Použité technologie: PHP, HTML, jQuery, MySQL a další.
        </p>
      </Project>

      <Card>
        <Card.Header>
          <Button variant="link" data-toggle="collapse" data-target="#collapseExample">
            Starší projekty
          </Button>
        </Card.Header>
        <Collapse id="collapseExample">
          <Card.Body>
            <p>
              Zde se nachází některé starší projekty z doby, kdy jsem se to ještě učil sám – tedy ještě před
              gymnáziem a před ČVUT.
            </p>
            <Project img="/img/iadm.png" name="iAdministrativa – psaní všemi deseti">
              <p>
                Web slouží jako pomůcka při výuce psaní všemi deseti na PC. K naleznutí jsou zde domácí úkoly,
                které je na stránce možno rovnou vyzkoušet nebo opsat. Je to druhá verze webu psaná v čistém
                PHP v době, kdy jsem chodil do 8. třídy ZŠ.
              </p>
              <a href="http://iadm.wz.cz/" className="btn btn-primary btn-sm" role="button" target="_blank"
                 rel="noopener noreferrer"><i className="fas fa-external-link-alt"/> Přejít na web</a>
            </Project>
            <Project img="/img/noviny.png" name="iAdministrativa noviny – mix zpráv a návodů">
              <p>
                V rámci webu iAdministrativa, jakožto webu, který měl určitou míru navštěvovanosti, jsem se
                rozhodl psát články a vyzkoušet si instalaci a práci s redakčním systémem wordpress.
                Články pojednávali zprvu o novinkách z tehdejší třídy, později o návodech na PC.
              </p>
              <a href="http://iadm.wz.cz/noviny/" className="btn btn-primary btn-sm" role="button"
                 target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"/> Přejít na web</a>
            </Project>
            <Project img="/img/sesity.png" name="Sešity – zápisky z vyučování 8. a 9. třídy ZŠ online">
              <p>
                Web sloužil jako online zdroj zápisků z vyučování v 8. a 9. třídě na ZŠ Rychnovská. Tedy
                alespoň u předmětů, které byl někdo ochotný přepisovat. Web byl také napsaný v čistém PHP,
                když jsem chodil do 9. třídy.
              </p>
              <a href="http://sesity.borec.cz/" className="btn btn-primary btn-sm" role="button"
                 target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"/> Přejít na web</a>
            </Project>
            <Link to="/projects/archive">Archiv</Link>
          </Card.Body>
        </Collapse>
      </Card>
    </div>
  );
};

export default projects;
