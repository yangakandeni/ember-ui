import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ArchiveUserComponent extends Component {
    @service store;

    @action
    archiveUser(user){
        // search for user with corresponding user_id in user model.
        this.store.findRecord('user', user.id)
        .then( foundUser => 

            // toggle user's value
            foundUser.value = !foundUser.value
        )
        .catch( _ => 
            // inform user about error
            alert(`Sorry, we couldn't ${user.value? 'unarcvhive':'archive'} ${user.name}`)
        )
    }
}
