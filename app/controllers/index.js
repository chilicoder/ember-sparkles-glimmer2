import Ember from 'ember';
import { max } from 'd3-array';

export default Ember.Controller.extend({
  chartData: [
    {name: 'foo', groups: [ {name: 'off', value: 22}]},
    {name: 'bar', groups: [{name: 'on', value: 45},]},
    {name: 'baz', groups: [{name: 'on', value: 65}, {name: 'off', value: 56}]},
    {name: 'boo', groups: [{name: 'on', value: 76}, {name: 'off', value: 99}]},
    {name: 'faa', groups: [{name: 'on', value: 87}, {name: 'off', value: 32}]},
  ],
  simpleChartData: [
    {name: 'foo', value: 12},
    {name: 'bar', value: 33},
    {name: 'baz', value: 67},
    {name: 'boo', value: 23},
    {name: 'faa', value: 13}
  ],
  outputMax: Ember.computed('simpleChartData', function() {
    let data = this.get('simpleChartData');
    return max(data, ({ value }) => value);
  })
})
;
