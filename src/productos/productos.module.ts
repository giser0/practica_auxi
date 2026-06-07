import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { Producto } from './entities/producto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from 'src/categorias/entities/categoria.entity';


@Module({
  imports:[
    TypeOrmModule.forFeature([Producto, Categoria]) // para usar esta entity y crea su tabla en la base de datos
  ],
  controllers: [ProductosController],
  providers: [ProductosService],
})
export class ProductosModule {}
