import React from 'react';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';

import { Header } from '@core/components/Header/Header';
import { Button } from '@atoms/Button/Button';
import { useStores } from '@core/store/helpers/useStores';
import { IJob } from '@shared/interfaces/jobs';

import './JobsPage.scss';

const JobsPage: React.FC = () => {
    const history = useHistory();
    const { jobsStore } = useStores();

    const initialJobs = jobsStore.jobs || [];

    const goToJob: (id: string) => void = (id: string) => {
        history.push('/jobs/' + id);
    };

    return (
        <>
            <Header title='philip1967/my-awesome-repo'>
                <div className='btn__block'>
                    <Button icon='icon-play'>Run build</Button>
                    <Button icon='icon-settings' />
                </div>
            </Header>
            <div className='jobsPage'>
                {initialJobs.map((job: IJob, index) => (
                    <>
                        <button className='repo' key={index} onClick={() => goToJob(job.id)}>
                            <div className='repo__info'>
                                <div className='repo__flex'>
                                    <div className='repo__id'>
                                        <span className='icon-tick' />
                                    </div>
                                    <div className='repo__title'>{job.commitMessage}</div>
                                </div>
                                <div className='repo__flex'>
                                    <div className='repo__branch'>
                                        <span className='icon-code-commit' />
                                        {job.branchName}
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
                        </button>
                        <div>LOGS</div>
                    </>
                ))}
            </div>
        </>
    );
};

export default observer(JobsPage);
