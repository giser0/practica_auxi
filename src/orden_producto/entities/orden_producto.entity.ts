import { Ordene } from "src/ordenes/entities/ordene.entity";
import { Producto } from "src/productos/entities/producto.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity() // Decorador que indica que esta clase es una entidad de la base de datos, se mapea a una tabla
export class OrdenProducto {
    @PrimaryGeneratedColumn()    
    idOrdenProducto: number;

    @Column()
    idOrden: number;
    @ManyToOne(()=> Ordene, (ordene) => ordene.ordenProductos) // Relación muchos a uno 
    @JoinColumn({ name: 'idOrden' }) // Especifica el nombre de la columna de clave foránea
    orden: Ordene;

    @Column()
    idProducto: number; 
    @ManyToOne(()=> Producto, (product)=> product.ordenProductos) // Relación muchos a uno
    @JoinColumn({ name: 'idProducto' }) // Especifica el nombre de la columna de clave foránea
    producto: Producto;

    @Column()
    cantidad: number;

    @Column({type: "decimal", precision:10, scale:2 })
    precio_unitario: number;

    @CreateDateColumn()
    creadoEn: Date;

    @UpdateDateColumn()
    actualizadoEn: Date;

    @DeleteDateColumn()
    eliminadoEn: Date;
}
