import Route from '@ember/routing/route';
import * as serviceModule from '@ember/service';
const service = serviceModule.service || serviceModule.inject;

export default Route.extend({
  fastboot: service(),

  model() {
    if (this.get('fastboot.isFastBoot') && this.fastboot.metadata) {
      return 'test fastboot metadata';
    }
  },
});
