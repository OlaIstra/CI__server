import React, { useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';

import { Header } from '@core/components/Header/Header';
import { Button } from '@atoms/Button/Button';
import { useStores } from '@core/store/helpers/useStores';
import { IJob } from '@shared/interfaces/jobs';
import { Job } from '@core/components/Job/Job';

import './JobsPage.scss';

const JobsPage: React.FC = () => {
    const history = useHistory();
    const { settingsStore, jobsStore } = useStores();

    const initialJobs = jobsStore.jobs;
    const initiaReponame = settingsStore.settings.repoName;

    const goToJob: (id: string) => void = useCallback((id: string) => {
        history.push(`/jobs/${id}`);
    }, []);

    return (
        <>
            <Header title={initiaReponame}>
                <div className='btn__block'>
                    <Button icon='icon-play'>Run build</Button>
                    <Button icon='icon-settings' />
                </div>
            </Header>
            <div className='jobsPage'>
                {initialJobs.map((job: IJob, index) => (
                    <Job job={job} key={index} handleClick={goToJob} data-testid='jobComponent' />
                ))}
            </div>
        </>
    );
};

export default observer(JobsPage);
