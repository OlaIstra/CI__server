import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum BuildStatus {
    Waiting = 'Waiting',
    InProgress = 'InProgress',
    Success = 'Success',
    Fail = 'Fail',
    Cancelled = 'Cancelled',
}
@Entity('build')
export class Build {
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
        enum: BuildStatus,
        default: BuildStatus.Waiting,
    })
    status: string;

    @Column('text', { nullable: true })
    buildLogs?: number;

    @Column('text', { nullable: true })
    start?: string;

    @Column('text', { nullable: true })
    finish?: string;

    @Column('int', { nullable: true })
    duration?: number;
}
