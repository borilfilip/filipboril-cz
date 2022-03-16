import React, {useState} from 'react';
import './Projects.css';
import Project from "./Project/Project";
import Card from "react-bootstrap/Card";
import {Button} from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";
import {FormattedMessage} from "react-intl";
import ImageOverlay from "./ImageOverlay/ImageOverlay";

const Projects = () => {
  const [image, setImage] = useState(null);

  const economiaLink = <a href="https://www.economia.cz/" target="_blank" rel="noreferrer noopener">Economia</a>;
  const vwLink = <a href="https://www.volkswagen.de/" target="_blank" rel="noreferrer noopener">Volkswagen</a>;
  const s2Link = <a href="https://sinnerschrader.com/" target="_blank" rel="noreferrer noopener">SinnerSchrader</a>;
  const gastroP = <a href="http://www.gastro-projekt.cz/" target="_blank" rel="noopener noreferrer">Gastro projekt</a>;
  const galt = <a href="http://www.galt-pro-deti.cz/" target="_blank" rel="noopener noreferrer">Galt pro děti</a>;
  const mdlet = <a href="https://www.mdlet.cz/" target="_blank" rel="noopener noreferrer">MDlet</a>;
  const pwgate = <a href="https://portal.powdergatecapital.com/" target="_blank" rel="noopener noreferrer">Powdergate
    Capital</a>;
  const adastra = <a href="http://www.cafeadastra.cz/" target="_blank" rel="noopener noreferrer">Cafe Adastra</a>;
  const svupraha = <a href="https://svupraha.cz/" target="_blank" rel="noopener noreferrer">SVU Praha</a>;
  const energo = <a href="http://www.energopraha.com/" target="_blank" rel="noopener noreferrer">Energo Praha</a>;
  const cokolada = <a href="https://cokolada.cz/" target="_blank" rel="noopener noreferrer">Čokoláda</a>;
  const evosoft = <a href="https://evosoft.cz/" target="_blank" rel="noopener noreferrer">evosoft s r.o.</a>;

  return (
    <div style={{position: "relative"}}>
      <div className="Projects">
        <Project img="/img/freedomtime.jpg" imageClick={() => setImage("/img/freedomtime.png")}
                 name={<><FormattedMessage id="freedomtime"/> | 2021 – 22</>}>
          <p>
            <FormattedMessage id="freedomtime-description"/>
          </p>
          <p>
            <FormattedMessage id="tech-used"/>: React, Javascript, react-bootstrap, formik, Nette, PHP, CSS, GIT,…
          </p>
          <a href="https://www.freedomtime.eu/" className="btn btn-primary btn-sm" role="button"
             target="_blank" rel="noopener noreferrer">
            <i className="fas fa-external-link-alt"/>{' '}
            <FormattedMessage id="go-to-web"/>
          </a>
        </Project>
        <Project img="/img/nps.png" imageClick={() => setImage("/img/nps.png")}
                 name={<><FormattedMessage id="nps"/> | 2021 – 22</>}>
          <p>
            <FormattedMessage id="economia-description" values={{economiaLink}}/>
          </p>
          <p>
            <FormattedMessage id="tech-used"/>: React, Typescript, formik, jest, react-bootstrap, Terraform, GIT,…
          </p>
        </Project>
        <Project img="/img/volkswagen.jpg" imageClick={() => setImage("/img/volkswagen.jpg")}
                 name="Volkswagen WWW | 2019 – 21">
          <p>
            <FormattedMessage id="volkswagen-description" values={{vwLink, s2Link}}/>
          </p>
          <p>
            <FormattedMessage id="tech-used"/>: React, Typescript, CSS, styled-components, jest, GIT, docker,…
          </p>
          <a href="https://www.volkswagen.co.uk/" className="btn btn-primary btn-sm" role="button"
             target="_blank" rel="noopener noreferrer">
            <i className="fas fa-external-link-alt"/>{' '}
            <FormattedMessage id="go-to-web"/>
          </a>
        </Project>
        <Project img="/img/my2.png" imageClick={() => setImage("/img/my2.png")} name="My2 | 2020 – 21">
          <p>
            <FormattedMessage id="my2-description"/>
          </p>
          <p>
            <FormattedMessage id="tech-used"/>: Expo, React native, firebase, crypto, prettier, react-native-elements…
          </p>
          <a href="/my2-code-demo.zip" className="btn btn-primary btn-sm" role="button"><i
            className="far fa-file-archive"/> <FormattedMessage id="code-demo"/></a>
        </Project>
        <Project img="/img/fras-hp.png" imageClick={() => setImage("/img/fras-hp.png")}
                 name={<><FormattedMessage id="bachelor-project-headline"/> | 2018 – 19</>}>
          <p>
            <FormattedMessage id="fras-description"/>
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
        <Project img="/img/cokolada-hp.png" imageClick={() => setImage("/img/cokolada-hp.png")}
                 name={<><FormattedMessage id="webredakce-headline"/> | 2018 – 19</>}>
          <p>
            <FormattedMessage id="netservis-description"
                              values={{gastroP, galt, mdlet, pwgate, adastra, svupraha, energo, cokolada}}/>
          </p>
          <p>
            <FormattedMessage id="tech-used"/>: PHP, jQuery, CSS, MySQL,…
          </p>
        </Project>
        <Project img="/img/sep-hp.png" imageClick={() => setImage("/img/sep-hp.png")}
                 name={<><FormattedMessage id="sep-headline"/> | 2017 – 18</>}>
          <p>
            <FormattedMessage id="evosoft-description" values={{evosoft}}/>
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
              <Project img="/img/iadm.png" imageClick={() => setImage("/img/iadm.png")}
                       name={<FormattedMessage id="iadm-headline"/>}>
                <p>
                  <FormattedMessage id="iadm-description"/>
                </p>
                <a href="http://iadm.wz.cz/" className="btn btn-primary btn-sm" role="button" target="_blank"
                   rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt"/>{' '}
                  <FormattedMessage id="go-to-web"/>
                </a>
              </Project>
              <Project img="/img/noviny.png" imageClick={() => setImage("/img/noviny.png")}
                       name={<FormattedMessage id="iadm-news-headline"/>}>
                <p>
                  <FormattedMessage id="iadm-noviny-description"/>
                </p>
                <a href="http://iadm.wz.cz/noviny/" className="btn btn-primary btn-sm" role="button"
                   target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt"/>{' '}
                  <FormattedMessage id="go-to-web"/>
                </a>
              </Project>
              <Project img="/img/sesity.png" imageClick={() => setImage("/img/sesity.png")}
                       name={<FormattedMessage id="sesity-headline"/>}>
                <p>
                  <FormattedMessage id="sesity-description"/>
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
      <ImageOverlay image={image} closeOverlay={() => setImage(null)}/>
    </div>
  );
};

export default Projects;
