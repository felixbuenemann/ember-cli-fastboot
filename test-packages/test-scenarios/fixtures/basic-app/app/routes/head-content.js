import { set } from '@ember/object';
import Route from '@ember/routing/route';
import * as serviceModule from '@ember/service';
const service = serviceModule.service || serviceModule.inject;

export default class HeadContentRoute extends Route {
  @service headData;

  afterModel() {
    set(this, 'headData.title', 'Go Sounders');
  }
}
