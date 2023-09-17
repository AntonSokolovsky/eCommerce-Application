import './about-us.css';
import View from '../view';
import { ElementCreator } from '../../utilities/element-creator';
import { AboutUsText } from './about-us-text';

export default class AboutUsView extends View {
  constructor() {
    const params = {
      tag: 'section',
      classNames: ['section', 'section-about'],
    };
    super(params);
    this.configureView();
  }

  configureView() {
    const paramsTitle = {
      tag: 'h2',
      classNames: ['section__title', 'about__title'],
      textContent: AboutUsText.title,
      callback: null,
    };
    const creatorTitle = new ElementCreator(paramsTitle);
    this.viewElementCreator.addInsideElement(creatorTitle);


    const paramsItems = {
      tag: 'div',
      classNames: ['about__items'],
      textContent: '',
      callback: null,
    };
    const creatorItems = new ElementCreator(paramsItems);
    this.viewElementCreator.addInsideElement(creatorItems);

    const paramsItemsSubt = {
      tag: 'h3',
      classNames: ['about__items_subtitle'],
      textContent: AboutUsText.TeamMembers.subtitle,
      callback: null,
    };
    const creatorItemsSubt = new ElementCreator(paramsItemsSubt);
    creatorItems.addInsideElement(creatorItemsSubt);

    for (let i = 1; i < 4; i++) {
      const paramsItem = {
        tag: 'div',
        classNames: ['about__item'],
        textContent: '',
        callback: null,
      };
      const creatorItem = new ElementCreator(paramsItem);
      creatorItems.addInsideElement(creatorItem);

      const paramsItemImg = {
        tag: 'div',
        classNames: ['about__img'],
        textContent: `${i}`,
        callback: null,
      };
      const creatorItemImg = new ElementCreator(paramsItemImg);
      creatorItem.addInsideElement(creatorItemImg);

      const paramsItemNames = {
        tag: 'span',
        classNames: ['about__name'],
        textContent: AboutUsText.TeamMembers.names[i],
        callback: null,
      };
      const creatorItemNames = new ElementCreator(paramsItemNames);
      creatorItem.addInsideElement(creatorItemNames);

      const paramsItemDesc = {
        tag: 'span',
        classNames: ['about__desc'],
        textContent: AboutUsText.TeamMembers[i],
        callback: null,
      };
      const creatorItemDesc = new ElementCreator(paramsItemDesc);
      creatorItem.addInsideElement(creatorItemDesc);

      const paramsItemLink = {
        tag: 'a',
        classNames: ['about__link'],
        textContent: 'Github',
        callback: null,
      };
      const creatorItemLink = new ElementCreator(paramsItemLink);
      creatorItemLink.setAttributeElement( { href: AboutUsText.TeamMembers.links[i] } );
      creatorItem.addInsideElement(creatorItemLink);

      const paramsItemContribSubt = {
        tag: 'div',
        classNames: ['about__contribution-subtitle'],
        textContent: AboutUsText.Contributions.subtitle,
        callback: null,
      };
      const creatorItemContribSubt = new ElementCreator(paramsItemContribSubt);
      creatorItem.addInsideElement(creatorItemContribSubt);

      const paramsItemContribDesc = {
        tag: 'div',
        classNames: ['about__contribution-desc'],
        textContent: AboutUsText.Contributions[i],
        callback: null,
      };
      const creatorItemContribDesc = new ElementCreator(paramsItemContribDesc);
      creatorItem.addInsideElement(creatorItemContribDesc);
    }


    const paramsCollab = {
      tag: 'div',
      classNames: ['about__collaboration'],
      textContent: '',
      callback: null,
    };
    const creatorCollab = new ElementCreator(paramsCollab);
    this.viewElementCreator.addInsideElement(creatorCollab);

    const paramsCollabTitle = {
      tag: 'h3',
      classNames: ['about__collaboration-title'],
      textContent: AboutUsText.Collaboration.subtitle,
      callback: null,
    };
    const creatorCollabTitle = new ElementCreator(paramsCollabTitle);
    creatorCollab.addInsideElement(creatorCollabTitle);

    const paramsCollabTitleDesc = {
      tag: 'p',
      classNames: ['about__collaboration-desc'],
      textContent: AboutUsText.Collaboration.subtitleDesc,
      callback: null,
    };
    const creatorCollabTitleDesc = new ElementCreator(paramsCollabTitleDesc);
    creatorCollab.addInsideElement(creatorCollabTitleDesc);

    const paramsCollabSubtInit = {
      tag: 'p',
      classNames: ['about__collaboration-subt'],
      textContent: AboutUsText.Collaboration.initialTitle,
      callback: null,
    };
    const creatorCollabSubtInit = new ElementCreator(paramsCollabSubtInit);
    creatorCollab.addInsideElement(creatorCollabSubtInit);

    const paramsCollabTextInit = {
      tag: 'p',
      classNames: ['about__collaboration-text'],
      textContent: AboutUsText.Collaboration.initial,
      callback: null,
    };
    const creatorCollabTextInit = new ElementCreator(paramsCollabTextInit);
    creatorCollab.addInsideElement(creatorCollabTextInit);

    const paramsCollabSubtInter = {
      tag: 'p',
      classNames: ['about__collaboration-subt'],
      textContent: AboutUsText.Collaboration.interimTitle,
      callback: null,
    };
    const creatorCollabSubtInter = new ElementCreator(paramsCollabSubtInter);
    creatorCollab.addInsideElement(creatorCollabSubtInter);

    const paramsCollabTextInter = {
      tag: 'p',
      classNames: ['about__collaboration-text'],
      textContent: AboutUsText.Collaboration.interim,
      callback: null,
    };
    const creatorCollabTextInter = new ElementCreator(paramsCollabTextInter);
    creatorCollab.addInsideElement(creatorCollabTextInter);

    const paramsCollabSubtFin = {
      tag: 'p',
      classNames: ['about__collaboration-subt'],
      textContent: AboutUsText.Collaboration.finalTitle,
      callback: null,
    };
    const creatorCollabSubtFin = new ElementCreator(paramsCollabSubtFin);
    creatorCollab.addInsideElement(creatorCollabSubtFin);

    const paramsCollabTextFin = {
      tag: 'p',
      classNames: ['about__collaboration-text'],
      textContent: AboutUsText.Collaboration.final,
      callback: null,
    };
    const creatorCollabTextFin = new ElementCreator(paramsCollabTextFin);
    creatorCollab.addInsideElement(creatorCollabTextFin);

    const paramsCollabSubtD = {
      tag: 'p',
      classNames: ['about__collaboration-subt'],
      textContent: AboutUsText.Collaboration.dailyTitle,
      callback: null,
    };
    const creatorCollabSubtD = new ElementCreator(paramsCollabSubtD);
    creatorCollab.addInsideElement(creatorCollabSubtD);

    const paramsCollabTextD = {
      tag: 'p',
      classNames: ['about__collaboration-text'],
      textContent: AboutUsText.Collaboration.daily,
      callback: null,
    };
    const creatorCollabTextD = new ElementCreator(paramsCollabTextD);
    creatorCollab.addInsideElement(creatorCollabTextD);

    const paramsLogo = {
      tag: 'a',
      classNames: ['about__logo'],
      textContent: 'RS School',
      callback: null,
    };
    const creatorLogo = new ElementCreator(paramsLogo);
    creatorLogo.setAttributeElement({ href: 'https://rs.school' });
    this.viewElementCreator.addInsideElement(creatorLogo);
  }
}