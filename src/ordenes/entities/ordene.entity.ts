import { on } from "events";
import { Cliente } from "src/clientes/entities/cliente.entity";
import { OrdenProducto } from "src/orden_producto/entities/orden_producto.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { OneToMany } from "typeorm";

@Entity() 
export class Ordene {
    @PrimaryGeneratedColumn()
    idOrden: number;

    @Column()
    idCliente: number;

    @ManyToOne(() => Cliente,(cliente) => cliente.ordenes) // Relación muchos a uno con la entidad Categoria, un producto pertenece a una categoría
    @JoinColumn({ name: 'idCliente' }) // Especifica el nombre de la columna de clave foránea
    cliente: Cliente;

    @Column()
    estado: string;

    @Column({type: "decimal", precision: 10, scale: 2})
    total: number;

    @CreateDateColumn()
    creadoEn: Date;

    @UpdateDateColumn()
    actualizadoEn: Date;

    @DeleteDateColumn()
    eliminadoEn: Date;

    @OneToMany(() => OrdenProducto, (ordenproducto)=> ordenproducto.orden, {onDelete: "CASCADE"}) // Relación uno a muchos con la entidad OrdenProducto, una orden puede tener muchos productos
    ordenProductos: OrdenProducto[];

}
