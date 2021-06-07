import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import click from '@ember/test-helpers/dom/click';

module('Integration | Component | archive-user', function (hooks) {
  setupRenderingTest(hooks);
  hooks.beforeEach(function () {
    // setup mock user data for testing
    this.setProperties({
      user: {
        id: "1",
        name: 'Kendrick Lamar',
        image: 'https://en.wikipedia.org/wiki/File:Pulitzer2018-portraits-kendrick-lamar.jpg',
        value: false
      },
    });
  })

  test('it renders with innerText', async function (assert) {
    await render(hbs`<ArchiveUser @user={{this.user}} class="archive-btn"/>`)
    assert.dom('.button.archive-btn').exists()
    assert.dom('.button.archive-btn').hasText('Archive')
  });
});
