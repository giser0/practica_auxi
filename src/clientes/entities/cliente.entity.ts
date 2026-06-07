import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany} from "typeorm";
import { Ordene } from "src/ordenes/entities/ordene.entity";
@Entity()
export class Cliente {

    @PrimaryGeneratedColumn()
    idCliente: number;

    @Column()
    nombres: string;

    @Column()
    paterno: string;

    @Column()
    materno: string;

    @Column({
        unique: true
    })
    email: string;

    @CreateDateColumn()
    creadoEn: Date;

    @UpdateDateColumn()
    actualizadoEn: Date;

    @DeleteDateColumn()
    eliminadoEn: Date;

    @OneToMany(() => Ordene,(ordene) => ordene.cliente, {onDelete: "CASCADE"}) // Relación uno a muchos con la entidad Ordene, un cliente puede tener muchas ordenes
    ordenes: Ordene[];

}