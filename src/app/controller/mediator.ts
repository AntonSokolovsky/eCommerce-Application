import { CustomEventNames, ListenerMethod, ParamsCustomEvent } from '../../type/mediator-type';
export class Mediator {
  private static instanceMediator = new Mediator();

  private listeners = new Map<CustomEventNames, Set<ListenerMethod>>();
  // eslint-disable-next-line
  constructor() {}

  static getInstance() {
    return this.instanceMediator;
  }

  subscribe(nameEvent: CustomEventNames, listenerMethod: ListenerMethod) {
    let  arrayListeners = this.listeners.get(nameEvent);
    if (!arrayListeners) {
      arrayListeners = new Set<(ListenerMethod)>();
    }
    arrayListeners.add(listenerMethod);
  }

  unsubscribe(nameEvent: CustomEventNames, listenerMethod: ListenerMethod) {
    const arrayListeners = this.listeners.get(nameEvent);
    if (arrayListeners) {
      arrayListeners.delete(listenerMethod);
    }
  }

  notify(nameEvent: CustomEventNames, params: ParamsCustomEvent) {
    const arrayListeners = this.listeners.get(nameEvent);
    if (arrayListeners) {
      arrayListeners.forEach((listenerMethod) => listenerMethod(params));
    }
  }
}

