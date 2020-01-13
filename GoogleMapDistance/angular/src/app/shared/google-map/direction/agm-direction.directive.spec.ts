import { AgmDirectionDirective } from './agm-direction.directive';
import { GoogleMapsAPIWrapper } from '@agm/core';
describe('AgmDirectionDirective', () => {
  it('should create an instance', () => {
    const googleAPI: GoogleMapsAPIWrapper = null;
    const directive = new AgmDirectionDirective(googleAPI);
    expect(directive).toBeTruthy();
  });
});
