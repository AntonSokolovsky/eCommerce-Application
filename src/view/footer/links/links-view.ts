import './links.css';
import View from '../../view';
import { ElementCreator } from '../../../utilities/element-creator';


export default class LinksView extends View {
  constructor() {
    const params = {
      tag: 'div',
      classNames: ['links'],
    };
    super(params);
    this.configureView();
  }

  configureView() {
    const paramsTiktok = {
      tag: 'div',
      classNames: ['tiktok'],
      textContent: 'tiktok',
      callback: null,
    };
    const creatorTiktok = new ElementCreator(paramsTiktok);
    this.viewElementCreator.addInsideElement(creatorTiktok);

    const paramsVk = {
      tag: 'div',
      classNames: ['vk'],
      textContent: 'vk',
      callback: null,
    };
    const creatorVk = new ElementCreator(paramsVk);
    this.viewElementCreator.addInsideElement(creatorVk);

    const paramsTelegram = {
      tag: 'div',
      classNames: ['telegram'],
      textContent: 'telegram',
      callback: null,
    };
    const creatorTelegram = new ElementCreator(paramsTelegram);
    this.viewElementCreator.addInsideElement(creatorTelegram);

    const paramsYoutube = {
      tag: 'div',
      classNames: ['youtube'],
      textContent: 'youtube',
      callback: null,
    };
    const creatorYoutube = new ElementCreator(paramsYoutube);
    this.viewElementCreator.addInsideElement(creatorYoutube);
  }
}