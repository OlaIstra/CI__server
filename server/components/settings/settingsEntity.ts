import { Entity, Column, PrimaryGeneratedColumn, getRepository } from 'typeorm';

@Entity()
export class Settings {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    repoName: string;

    @Column()
    buildCommand: string;

    @Column()
    mainBranch: string;

    @Column()
    timePeriod: number;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function getSettingsRepository() {
    return getRepository(Settings);
}
