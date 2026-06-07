import { Producto } from "src/productos/entities/producto.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity() // Decorador que indica que esta clase es una entidad de la base de datos, se mapea a una tabla
export class Categoria {
    @PrimaryGeneratedColumn() // Decorador que indica que esta propiedad es la clave primaria y se genera automáticamente
    idCategoria: number;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;
    
    @CreateDateColumn()
    creadoEn: Date;

    @UpdateDateColumn()
    actualizadoEn: Date;

    @DeleteDateColumn()
    eliminadoEn: Date;

    @OneToMany(() => Producto, (producto) => producto.categoria, {onDelete: "CASCADE"}) // Relación uno a muchos con la entidad Producto, una categoría tiene muchos productos
    // @JoinColumn({ name: 'idCategoria' })
    productos: Producto[];
}