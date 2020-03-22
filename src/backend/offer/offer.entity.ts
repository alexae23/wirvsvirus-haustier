import { Column, Entity, JoinTable, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { AnimalType } from '../animal/animalType.entity';
import { ManyToMany } from 'typeorm';
import { ServiceType } from '../services/services.entity';
import { User } from '../user/user.entity';

@Entity()
export class Offer {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToMany(type => AnimalType)
  @JoinTable()
  animalTypes: AnimalType[];

  @ManyToMany(type => ServiceType)
  @JoinTable()
  serviceTypes: ServiceType[];

  @ManyToOne(type => User, user => user.offers)
  owner: User;

  @Column()
  description: string;

  @Column()
  plz: string;




}
