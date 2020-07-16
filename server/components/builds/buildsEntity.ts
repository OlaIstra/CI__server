import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Builds {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    configurationId: string;

    @Column()
    commitMessage: string;

    @Column()
    commitHash: string;

    @Column()
    buildNumber: number;

    @Column()
    branchName: string;

    @Column()
    authorName: string;

    @Column()
    status: string;
}
