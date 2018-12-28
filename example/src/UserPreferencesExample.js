import React, { Component } from 'react';
import { UserPreferences, UserPreferencesModal } from 'react-viewerbase';

export default class UserPreferencesExample extends Component {

    constructor(props) {
        super(props)

        console.log('TODO: put data here')
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <h3>User preferences</h3>
                        <p>Used to set the user preferences.</p>
                        {/* <p>Values from forms {() => { return 'TODO' }}</p> */}
                    </div>
                    <div style={{ backgroundColor: 'black' }} className="col-md-6">
                        <UserPreferencesModal />
                    </div>
                </div>
            </div>)
    }

}