import { Entity, Column, PrimaryGeneratedColumn, getRepository } from 'typeorm';

@Entity('Settings')
export class Settings {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    repoName: string;

    @Column('text')
    buildCommand: string;

    @Column('text')
    mainBranch: string;

    @Column('int')
    timePeriod: number;
}

export function getSettingsRepository() {
    return getRepository(Settings);
}
