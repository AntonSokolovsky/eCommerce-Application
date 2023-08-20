import './link-nav-footer.css';
import View from '../../../view';


export default class LinkNavFooterView extends View {
  linkElements: Map<string, LinkNavFooterView>;
  
  constructor(pageParam: { name: string, callback: (event: Event) => void },
    linkElements: Map<string, LinkNavFooterView>) {
    const params = {
      tag: 'div',
      classNames: ['nav__item'],
      textContent: pageParam.name,
      callback: pageParam.callback,
    };
    super(params);
    this.linkElements = linkElements;
    this.configureView(pageParam);
  }

  setSelectedStatus() {
    this.linkElements.forEach((linkElement) => linkElement.setSNotelectedStatus());
    const element = this.viewElementCreator.getElement();
    element.classList.add('selected');
  }

  setSNotelectedStatus() {
    const element = this.viewElementCreator.getElement();
    element.classList.remove('selected');
  } 

  configureView(pageParam: { name: string, callback: (event: Event) => void }) {
    this.viewElementCreator.setTextContent(pageParam.name);
    this.viewElementCreator.setCallback(pageParam.callback);
    
    const element = this.viewElementCreator.getElement();
    element.addEventListener('click', this.setSelectedStatus.bind(this));
  }
}