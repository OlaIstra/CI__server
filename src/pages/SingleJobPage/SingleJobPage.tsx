import React from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { Header } from '@core/components/Header/Header';
import { Button } from '@atoms/Button/Button';
import { useStores } from '@core/store/helpers/useStores';
import { Job } from '@core/components/Job/Job';

import './SingleJobPage.scss';

const SingleJobPage: React.FC = () => {
    const { settingsStore, jobsStore } = useStores();

    const { id } = useParams<{ id: string }>();
    const currentJob = jobsStore?.jobs && jobsStore.jobs.find(job => job.id === id);
    const initiaReponame = settingsStore?.settings.repoName;

    return (
        <>
            <Header title={initiaReponame}>
                <div className='btn__block'>
                    <Button icon='icon-play'>Run build</Button>
                    <Button icon='icon-settings' />
                </div>
            </Header>
            <div className='jobsPage'>
                {currentJob && (
                    <>
                        <Job job={currentJob} key={1} data-testid='jobComponent' />
                        <div className='repo' data-testid='jobLogs'>
                            <h3>JOB LOGS</h3>
                            {currentJob.jobLogs}
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default observer(SingleJobPage);
