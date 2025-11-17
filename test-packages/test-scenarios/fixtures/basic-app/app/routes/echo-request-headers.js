import Route from '@ember/routing/route';
import * as serviceModule from '@ember/service';
const service = serviceModule.service || serviceModule.inject;

export default class EchoRequestHeadersRoute extends Route {
  @service fastboot;

  model() {
    let headerToEchoBack = this.fastboot.request.headers.get('x-fastboot-echo');
    this.fastboot.response.headers.set('x-fastboot-echoed-back', headerToEchoBack);
  }
}
