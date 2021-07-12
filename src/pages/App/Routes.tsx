import React from 'react';
import { Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const ConfigurationPage = loadable(() => import('@pages/ConfigurationPage/ConfigurationPage'));
const SettingsPage = loadable(() => import('@pages/SettingsPage/SettingsPage'));
const JobsPage = loadable(() => import('@pages/JobsPage/JobsPage'));
const SingleJobPage = loadable(() => import('@pages/SingleJobPage/SingleJobPage'));
const NotFound = loadable(() => import('@pages/NotFound/NotFound'));

export const Routes: React.FC = () => (
    <Switch>
        <Route path='/' exact component={ConfigurationPage} />
        <Route path='/settings' component={SettingsPage} />
        <Route path='/jobs' exact component={JobsPage} />
        <Route path='/jobs/:id' component={SingleJobPage} />
        <Route component={NotFound} />
    </Switch>
);
