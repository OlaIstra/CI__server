import React from 'react';
import { Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const ConfigurationPage = loadable(() => import('@pages/ConfigurationPage/ConfigurationPage'));
const SettingsPage = loadable(() => import('@pages/SettingsPage/SettingsPage'));
const HistoryPage = loadable(() => import('@pages/HistoryPage/HistoryPage'));

export const Routes: React.FC = () => (
    <Switch>
        <Route path='/' exact component={ConfigurationPage} />
        <Route path='/settings' component={SettingsPage} />
        <Route path='/history' component={HistoryPage} />
    </Switch>
);
