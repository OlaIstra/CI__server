import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Settings')
export class Settings {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    repoName: string;

    @Column()
    buildCommand: string;

    @Column()
    mainBranch: string;

    @Column()
    timePeriod: number;
}