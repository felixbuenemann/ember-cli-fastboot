import { defer } from 'rsvp';
import { later } from '@ember/runloop';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import * as serviceModule from '@ember/service';
const service = serviceModule.service || serviceModule.inject;

export default class AsyncContenComponent extends Component {
  @service fastboot;

  @tracked setLater = null;

  constructor() {
    super(...arguments);
    const deferred = defer();

    later(() => {
      this.setLater = 'Go Sounders';
      deferred.resolve();
    }, 100)

    this.fastboot.deferRendering(deferred.promise);
  }
}
