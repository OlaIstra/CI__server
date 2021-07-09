import React from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { Header } from '@core/components/Header/Header';
import { Button } from '@atoms/Button/Button';
import { useStores } from '@core/store/helpers/useStores';

import './SingleJobPage.scss';

const SingleJobPage: React.FC = () => {
    const { jobsStore } = useStores();

    const { id } = useParams<{ id: string }>();
    const currentJob = jobsStore.jobs && jobsStore.jobs.find(job => job.id === id);

    return (
        <>
            <Header title='philip1967/my-awesome-repo'>
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
                                        <span className='repo__commit'>9c9f0b9</span>
                                    </div>
                                    <div className='repo__fio'>
                                        <span className='icon-user' />
                                    </div>
                                </div>
                            </div>
                            <div className='repo__data'>
                                <div className='repo__data__date'>
                                    <span className='icon-calendar' />
                                    21 янв, 03:06
                                </div>
                                <div className='repo__data__time'>
                                    <span className='icon-timer' />1 ч 20 мин
                                </div>
                            </div>
                            <div className='repo'>
                                <h3>JOB LOGS</h3>
                                {currentJob.jobLogs}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default observer(SingleJobPage);
