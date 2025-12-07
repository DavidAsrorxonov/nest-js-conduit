import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tags' })
export class TagEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column({ type: 'timestamp' })
  createdAt: Date;
}
