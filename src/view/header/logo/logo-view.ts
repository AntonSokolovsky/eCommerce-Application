import './logo.css';
import View from '../../view';
// import Router from '../../../app/router/router';
// import { Pages } from '../../../app/router/pages';

export default class LogoView extends View {
  constructor(pageParam: { name: string, callback: (event: Event) => void }) {
    const params = {
      tag: 'h1',
      classNames: ['logo'],
      textContent: pageParam.name,
      callback: pageParam.callback,
    };
    super(params);
    this.configureView(pageParam);
  }

  configureView(pageParam: { name: string, callback: (event: Event) => void }) {
    this.viewElementCreator.setTextContent(pageParam.name);
    this.viewElementCreator.setCallback(pageParam.callback);
  }
}