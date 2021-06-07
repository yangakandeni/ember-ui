import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { run } from '@ember/runloop';

module('Unit | Model | user', function (hooks) {
  setupTest(hooks);

  test('it should change value', function (assert) {
    let store = this.owner.lookup('service:store');
    let user = store.createRecord('user', {
      id: 1,
      name: 'Kendrick Lamar',
      image: 'https://en.wikipedia.org/wiki/File:Pulitzer2018-portraits-kendrick-lamar.jpg',
      value: false
    })

    assert.equal(user.value, false, 'Default value should be false.')
    assert.equal(user.id, 1)
    assert.equal(user.name, "Kendrick Lamar")
    assert.equal(user.image, "https://en.wikipedia.org/wiki/File:Pulitzer2018-portraits-kendrick-lamar.jpg")
    run(() => user.changeValue());
    assert.equal(user.value, true, 'Value should change when function is called.');
    assert.ok(user);
  });
});
