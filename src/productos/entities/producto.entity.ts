import { Categoria } from "src/categorias/entities/categoria.entity";
import { OrdenProducto } from "src/orden_producto/entities/orden_producto.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";


@Entity() // Decorador que indica que esta clase es una entidad de la base de datos, se mapea a una tabla
export class Producto {
    @PrimaryGeneratedColumn()
    idProducto: number;

    @Column()
    idCategoria: number;

    @ManyToOne(() => Categoria,(categoria) => categoria.productos) // Relación muchos a uno con la entidad Categoria, un producto pertenece a una categoría
    @JoinColumn({ name: 'idCategoria' }) // Especifica el nombre de la columna de clave foránea
    categoria: Categoria;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    precio: number;

    @Column()
    stock: number;

    @CreateDateColumn()
    creadoEn: Date;

    @UpdateDateColumn()
    actualizadoEn: Date;

    @DeleteDateColumn()
    eliminadoEn: Date;

    @OneToMany(()=> OrdenProducto, (op)=> op.producto, {onDelete: "CASCADE"}) // Relación muchos a uno con la entidad OrdenProducto, un producto puede estar en muchas ordenes
    ordenProductos: OrdenProducto[];

}
