import { CustomEventNames, ListenerMethod, ParamsCustomEvent } from '../../type/mediator-type';
export class Mediator {
  private static instanceMediator = new Mediator();

  private listeners = new Map<CustomEventNames, Set<ListenerMethod>>();
  // eslint-disable-next-line
  private constructor() {}

  static getInstance() {
    return this.instanceMediator;
  }

  subscribe(nameEvent: CustomEventNames, listenerMethod: ListenerMethod) {
    let  arrayListeners = this.listeners.get(nameEvent);
    if (!arrayListeners) {
      arrayListeners = new Set<(ListenerMethod)>();

      this.listeners.set(nameEvent, arrayListeners);
    }
    arrayListeners.add(listenerMethod);
  }

  unsubscribe(nameEvent: CustomEventNames, listenerMethod: ListenerMethod) {
    const arrayListeners = this.listeners.get(nameEvent);
    if (arrayListeners) {
      arrayListeners.delete(listenerMethod);
    }
  }

  loginCustomer(nameEvent: CustomEventNames) {
    this.notify(nameEvent, {});
  }

  private notify(nameEvent: CustomEventNames, params: ParamsCustomEvent) {

    const arrayListeners = this.listeners.get(nameEvent);
    if (arrayListeners) {
      arrayListeners.forEach((listenerMethod) => listenerMethod(params));
    }
  }
}

