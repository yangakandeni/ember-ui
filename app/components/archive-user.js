import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ArchiveUserComponent extends Component {
    @service store;

    // handle archive button click event
    @action
    archiveUser(user) {
        // user.changeValue()
        this.store.findRecord('user', user.id)
        .then( foundUser =>  foundUser.changeValue())
        .catch( _ => alert(`Sorry, we couldn't ${user.value? 'unarchive'.toUpperCase(): 'archive'.toUpperCase()} ${user.name.toUpperCase()}`))
    }
}
