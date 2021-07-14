import React from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { Header } from '@core/components/Header/Header';
import { Button } from '@atoms/Button/Button';
import { useStores } from '@core/store/helpers/useStores';

import './SingleJobPage.scss';

const SingleJobPage: React.FC = () => {
    const { settingsStore, jobsStore } = useStores();

    const { id } = useParams<{ id: string }>();
    const currentJob = jobsStore.jobs && jobsStore.jobs.find(job => job.id === id);
    const initiaReponame = settingsStore.settings.repoName;

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
                        <div className='repo'>
                            <div className='repo__info'>
                                <div className='repo__flex'>
                                    <div className='repo__id'>
                                        <span className='icon-tick' />
                                    </div>
                                    <div className='repo__title'>{currentJob.commitMessage}</div>
                                </div>
                                <div className='repo__flex'>
                                    <div className='repo__branch'>
                                        <span className='icon-code-commit' />
                                        {currentJob.branchName}
                                        <span className='repo__commit'>
                                            {currentJob.commitHash}
                                        </span>
                                    </div>
                                    <div className='repo__fio'>
                                        <span className='icon-user' />
                                    </div>
                                </div>
                            </div>
                            <div className='repo__data'>
                                <div className='repo__data__date'>
                                    <span className='icon-calendar' />
                                    {currentJob.start}
                                </div>
                                <div className='repo__data__time'>
                                    <span className='icon-timer' />
                                    {currentJob.duration}
                                </div>
                            </div>
                        </div>
                        <div className='repo'>
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
