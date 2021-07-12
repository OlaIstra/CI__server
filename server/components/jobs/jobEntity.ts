import { Entity, Column, PrimaryGeneratedColumn, getRepository } from 'typeorm';

export enum JobStatus {
    Waiting = 'Waiting',
    InProgress = 'InProgress',
    Success = 'Success',
    Fail = 'Fail',
    Cancelled = 'Cancelled',
}
@Entity('job')
export class Job {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    commitMessage: string;

    @Column('text')
    commitHash: string;

    @Column('text')
    branchName: string;

    @Column('text')
    authorName: string;

    @Column({
        type: 'enum',
        enum: JobStatus,
        default: JobStatus.Waiting,
    })
    status: string;

    @Column('text', { nullable: true })
    jobLogs?: string;

    @Column('text', { nullable: true })
    start?: string;

    @Column('text', { nullable: true })
    finish?: string;

    @Column('text', { nullable: true })
    duration?: string;
}

export function getJobRepository() {
    return getRepository(Job);
}
