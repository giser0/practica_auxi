import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Repository } from 'typeorm';

import { Producto } from './entities/producto.entity';
import { Categoria } from 'src/categorias/entities/categoria.entity';

import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Injectable()
export class ProductosService {

  constructor(

    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,

    @InjectRepository(Categoria)
    private readonly categoriaRepository: Repository<Categoria>

  ) {}

  async create(createProductoDto: CreateProductoDto) {
    const categoria = await this.categoriaRepository.findOne({
      where: { idCategoria: createProductoDto.idCategoria },
    });
    if (!categoria) {
      throw new NotFoundException('Categoria no encontrada');
    }
    const producto = this.productoRepository.create({
      ...createProductoDto,
      idCategoria: createProductoDto.idCategoria,
    });
    return await this.productoRepository.save(producto);
  }

  async findAll() {
    return await
    this.productoRepository.find();

  }

  async findOne(id: number) {
    const producto =
      await this.productoRepository.findOne({
        where: {
          idProducto: id,
        },
        relations: ['categoria']
      });

    if (!producto) {

      throw new NotFoundException(
        'Producto no encontrado'
      );
    }

    return producto;
  }

  async update(
    id: number,
    updateProductoDto: UpdateProductoDto,
  ) {

    const producto = await this.findOne(id);

    if (updateProductoDto.nombre !== undefined) {
      producto.nombre = updateProductoDto.nombre;
    }

    if (updateProductoDto.descripcion !== undefined) {
      producto.descripcion = updateProductoDto.descripcion;
    }

    if (updateProductoDto.precio !== undefined) {
      producto.precio = updateProductoDto.precio;
    }

    if (updateProductoDto.stock !== undefined) {
      producto.stock = updateProductoDto.stock;
    }

    if (updateProductoDto.idCategoria !== undefined) {
      producto.idCategoria = updateProductoDto.idCategoria;
    }

    return await this.productoRepository.save(producto);
  }

  async remove(id: number) {
    const producto = await this.productoRepository.findOneBy({idProducto: id});
    if(!producto) throw new NotFoundException('Producto no encontrado');

    return await this.productoRepository.softDelete(id);
  }

}