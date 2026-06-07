import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {IsNull, Repository} from 'typeorm';
import { OrdenProducto } from './entities/orden_producto.entity';
import { Ordene } from 'src/ordenes/entities/ordene.entity';
import { Producto } from 'src/productos/entities/producto.entity';
import { CreateOrdenProductoDto } from './dto/create-orden_producto.dto';
import { UpdateOrdenProductoDto } from './dto/update-orden_producto.dto';

@Injectable()
export class OrdenProductoService {

  constructor(

    @InjectRepository(OrdenProducto)
    private readonly ordenProductoRepository:
    Repository<OrdenProducto>,

    @InjectRepository(Producto)
    private readonly productoRepository:
    Repository<Producto>,

    @InjectRepository(Ordene)
    private readonly ordenRepository:
    Repository<Ordene>

  ) {}

  async create(createOrdenProductoDto: CreateOrdenProductoDto) {

    const producto =await this.productoRepository.findOne({where: {idProducto:createOrdenProductoDto.idProducto}});
    if (!producto) {
      throw new NotFoundException(
        'Producto no encontrado'
      );
    }
    if (producto.stock === 0 || producto.stock < createOrdenProductoDto.cantidad)
      throw new BadRequestException('Stock insuficiente');

    const orden =await this.ordenRepository.findOne({ where: {idOrden:createOrdenProductoDto.idOrden}});
    if (!orden) {
      throw new NotFoundException(
        'Orden no encontrada'
      );

    }

    const ordenProd = this.ordenProductoRepository.create({
      idOrden: createOrdenProductoDto.idOrden,
      idProducto: createOrdenProductoDto.idProducto,
      cantidad: createOrdenProductoDto.cantidad,
      precio_unitario: producto.precio,
    });

    return await
    this.ordenProductoRepository.save( ordenProd );

  }

  async findAll() {

    return await
    this.ordenProductoRepository.find({

      where: {
        eliminadoEn: IsNull()
      },

      relations: [
        'producto',
        'orden'
      ]

    });

  }

  async findOne(id: number) {

    const ordenProducto =
      await this.ordenProductoRepository.findOne({

        where: {
          idOrdenProducto: id
        },

        relations: [
          'producto',
          'orden'
        ]

      });

    if (!ordenProducto) {

      throw new NotFoundException(
        'Registro no encontrado'
      );

    }

    return ordenProducto;

  }

  async update(
      id: number,
      updateOrdenProductoDto: UpdateOrdenProductoDto,
    ) {

      const ordenProducto = await this.findOne(id);

      if (updateOrdenProductoDto.idOrden !== undefined) {
        ordenProducto.idOrden =
          updateOrdenProductoDto.idOrden;
      }

      if (updateOrdenProductoDto.idProducto !== undefined) {
        ordenProducto.idProducto =
          updateOrdenProductoDto.idProducto;
      }

      if (updateOrdenProductoDto.cantidad !== undefined) {
        ordenProducto.cantidad =
          updateOrdenProductoDto.cantidad;
      }

      if (updateOrdenProductoDto.precio_unitario !== undefined) {
        ordenProducto.precio_unitario =
          updateOrdenProductoDto.precio_unitario;
      }

      return await this.ordenProductoRepository.save(
        ordenProducto,
      );
    }

  async remove(id: number) {
    const ordenProducto = await this.findOne(id);
    if (!ordenProducto)
      throw new NotFoundException('OrdenProducto no encontrada');
    return await this.ordenProductoRepository.remove(ordenProducto);
  }

  async removeProducto(id: number, productId: number) {
    const item = await this.ordenProductoRepository.findOneBy({
      idOrden: id,
      idProducto: productId,
    });
    if (!item)
      throw new NotFoundException('Producto no encontrado en la orden');
    return await this.ordenProductoRepository.remove(item);
  }

}