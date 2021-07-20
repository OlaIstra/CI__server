import React from 'react';

import { IJob } from '@shared/interfaces/jobs';

interface IProps {
    job: IJob;
    handleClick?: (id: string) => void;
}

export const Job: React.FC<IProps> = props => {
    const { job } = props;

    const clickFunc = (id: string) => {
        if (props.handleClick) props.handleClick(id);
    };

    return (
        <div className='repo' onClick={() => clickFunc(job.id)} data-testid='job'>
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
                        <span className='repo__commit'>{job.commitHash}</span>
                    </div>
                    <div className='repo__fio'>
                        <span className='icon-user' />
                    </div>
                </div>
            </div>
            <div className='repo__data'>
                <div className='repo__data__date'>
                    <span className='icon-calendar' />
                    {job.start}
                </div>
                <div className='repo__data__time'>
                    <span className='icon-timer' />
                    {job.duration}
                </div>
            </div>
        </div>
    );
};
