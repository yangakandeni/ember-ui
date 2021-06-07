import Model, { attr } from '@ember-data/model';

export default class UserModel extends Model {

  @attr('string') name;
  @attr('string') image;
  @attr('boolean', {defaultValue: false}) value;

  changeValue(){
    // toggle user's value
    this.value = !this.value
  }
}
