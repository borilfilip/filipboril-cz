import React from 'react';
import { NavLink } from "react-router-dom";

const archive = (props) => {
    return (
        <div>
          <h1>Archiv</h1>
          <p>
            Tyto projekty zde uvádím z nostalgických důvodů a není třeba jim věnovat pozornost. Většina z nich není
            ani dokončená nebo se ani nespustila. Jen to dokumentuje, jak jsem začínal s weby ve věku kolem 13 let.
          </p>
          <ul>
            <li><a href="http://tikve.webz.cz/" target="_blank" rel="noopener noreferrer">tikve.webz.cz</a> - rozcestník k mým webům do roku 2010, dostupný také ve verzích <a href="http://tikve.webz.cz/historie/tikve/1/" target="_blank" rel="noopener noreferrer">1</a>, <a href="http://tikve.webz.cz/historie/tikve/2/" target="_blank" rel="noopener noreferrer">2</a>, <a href="http://tikve.webz.cz/historie/tikve/3/" target="_blank" rel="noopener noreferrer">3</a>, <a href="http://tikve.webz.cz/historie/tikve/4/" target="_blank" rel="noopener noreferrer">4</a>, <a href="http://tikve.webz.cz/historie/tikve/5/" target="_blank" rel="noopener noreferrer">5</a></li>
            <li><a href="http://tikve.webz.cz/historie/isims3/" target="_blank" rel="noopener noreferrer">iSims3.wz.cz</a> - Web o hře The Sims 3 a The Sims 2, polovina stránek nikdy nebyla dodělaná; zrušeno 1.3.2013</li>
            <li><a href="http://tikve.webz.cz/historie/padajiciokna/" target="_blank" rel="noopener noreferrer">PadajícíOkna.wz.cz</a> - Web poukazující na nepravdivé informace o Linuxu a na jeho výhody; zrušeno 1.3.2013</li>
            <li><a href="http://tikve.webz.cz/historie/iadm/" target="_blank" rel="noopener noreferrer">iAdm.wz.cz</a> - původní verze - nahrazena na konci roku 2009</li>
            <li><a href="http://tikve.webz.cz/historie/iqtikves/" target="_blank" rel="noopener noreferrer">iqtikve's.wbs.cz</a> - Stránky o všem, kompatibilní pouze s Internet Explorer 6; zrušeno v průběhu roku 2010</li>
            <li><a href="http://tikve.webz.cz/historie/iqtikve/" target="_blank" rel="noopener noreferrer">iqtikve.wbs.cz</a> - Moje nejstarší dochované stránky (a taky tak vypadají); zrušeno 21.12.2009</li>
            <li><a href="http://tikve.webz.cz/historie/topsoftware/" target="_blank" rel="noopener noreferrer">TopSoftware.wz.cz</a> - Nikdy nedokončený web, který měl nabízet přehled nejdůležitějšího SW; zrušen 21.12.2009</li>
            <li><a href="http://tikve.webz.cz/historie/gulz/" target="_blank" rel="noopener noreferrer">GULZ.borec.cz</a>, <a href="http://tikve.webz.cz/historie/gulz2/" target="_blank" rel="noopener noreferrer">druhá verze</a> - Web, který měl fungovat podobně jako Sešity.borec.cz, ale na úrovni gymnázia, nikdy nebyl spuštěn</li>
          </ul>
          <NavLink exact to="/projects" className="btn btn-primary btn-sm">← Zpět</NavLink>
        </div>
    );
};

export default archive;
