import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Settings')
export class Settings {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    userName: string;

    @Column('text')
    repoName: string;

    @Column('text')
    buildCommand: string;

    @Column('text')
    mainBranch: string;

    @Column('int')
    timePeriod: number;
}
