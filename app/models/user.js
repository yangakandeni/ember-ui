import Model, { attr } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') name;
  @attr('string') image;

  // added value attribute (which is a property of the "server" data)
  @attr('boolean') value;
}
