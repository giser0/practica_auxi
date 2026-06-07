import { Module } from '@nestjs/common';
import { OrdenProductoService } from './orden_producto.service';
import { OrdenProductoController } from './orden_producto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdenProducto } from './entities/orden_producto.entity';
import { Producto } from 'src/productos/entities/producto.entity';
import { Ordene } from 'src/ordenes/entities/ordene.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrdenProducto, Producto, Ordene])
  ],
  controllers: [OrdenProductoController],
  providers: [OrdenProductoService],
})
export class OrdenProductoModule {}
