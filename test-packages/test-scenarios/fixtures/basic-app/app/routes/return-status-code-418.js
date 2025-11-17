import Route from '@ember/routing/route';
import * as serviceModule from '@ember/service';
const service = serviceModule.service || serviceModule.inject;

export default class ReturnStatusCode418Route extends Route {
  @service fastboot;

  model() {
    this.fastboot.response.statusCode = 418;
  }
}
