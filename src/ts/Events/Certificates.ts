// Drawing all certificates cards in the Certificates section

import { DOM } from '../Modules/DOM'
import { Sections } from '../Modules/WebPage'
import { Certificates } from '../Classes/Elements/Certificates'
import { Certificates as Data } from '../Data/Certificates'

DOM.load().then(() => {
    const CertificatesContainer = Sections.get('certificates').element.querySelector('.certificates-container');
    let card: Certificates;
    for(let data of Data) {
        card = new Certificates(data);
        card.appendTo(CertificatesContainer);
    }
});
