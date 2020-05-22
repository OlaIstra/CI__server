import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ConfigurationPage } from '../ConfigurationPage/ConfigurationPage';
import { SettingsPage } from '../SettingsPage/SettingsPage';
import { HistoryPage } from '../HistoryPage/HistoryPage';

export const Routes: React.FC = () => (
    <Switch>
        <Route path='/' exact component={ConfigurationPage} />
        <Route path='/settings' component={SettingsPage} />
        <Route path='/history' component={HistoryPage} />
    </Switch>
);
