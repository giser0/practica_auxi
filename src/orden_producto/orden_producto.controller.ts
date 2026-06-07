import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { OrdenProductoService } from './orden_producto.service';
import { CreateOrdenProductoDto } from './dto/create-orden_producto.dto';
import { UpdateOrdenProductoDto } from './dto/update-orden_producto.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('orden-producto')
@Controller('orden-producto')
export class OrdenProductoController {
  constructor(private readonly ordenProductoService: OrdenProductoService) {}

@Post()
  @ApiOperation({
    summary: 'Crear detalle de orden',
    description: 'Relaciona productos con órdenes'
  })
  @ApiBody({
    type: CreateOrdenProductoDto,
    description: 'Datos necesarios para agregar un producto a una orden'
  })
  @ApiResponse({
    status: 201,
    description:'Detalle creado correctamente'
  })
  @ApiResponse({
    status: 400,
    description:'Datos inválidos'
  })
  @ApiResponse({
    status: 404,
    description:'Producto u orden no encontrados'
  })
  create(
    @Body()
    createOrdenProductoDto: CreateOrdenProductoDto
  ) {

    return this.ordenProductoService.create(createOrdenProductoDto);

  }

  @Get()
  @ApiOperation({
    summary: 'Listar detalles',
    description: 'Obtiene todos los detalles de órdenes'
  })
  @ApiResponse({
    status: 200,
    description:'Lista obtenida correctamente'
  })
  findAll() {
    return this.ordenProductoService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Buscar detalle',
    description:'Obtiene un detalle por ID'
  })
  @ApiParam({
    name: 'id',
    description: 'ID del detalle de orden',
    example: 1
  })
  @ApiResponse({
    status: 200,
    description:'Detalle encontrado'
  })
  @ApiResponse({
    status: 404,
    description:'Detalle no encontrado'
  })
  findOne(
    @Param('id', ParseIntPipe)
    id: number
  ) {

    return this.ordenProductoService.findOne(id);

  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Actualizar detalle',
    description:'Actualiza un detalle de orden'
  })
  @ApiParam({
    name: 'id',
    description: 'ID del detalle de orden a actualizar',
    example: 1
  })
  @ApiBody({
    type: UpdateOrdenProductoDto,
    description: 'Datos para actualizar el detalle de orden'
  })
  @ApiResponse({
    status: 200,
    description: 'Detalle actualizado'
  })
  @ApiResponse({
    status: 400,
    description: 'Datos inválidos'
  })
  @ApiResponse({
    status: 404,
    description: 'Detalle no encontrado'
  })
  update(

    @Param( 'id', ParseIntPipe)
    id: number,

    @Body()
    updateOrdenProductoDto: UpdateOrdenProductoDto

  ) {

    return this.ordenProductoService.update(id, updateOrdenProductoDto );

  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Eliminar detalle',
    description:'Realiza borrado lógico'
  })
  @ApiParam({
    name: 'id',
    description: 'ID del detalle de orden a eliminar',
    example: 1
  })
  @ApiResponse({
    status: 200,
    description:'Detalle eliminado'
  })
  @ApiResponse({
    status: 404,
    description:'Detalle no encontrado'
  })
  remove(
    @Param('id',ParseIntPipe)
    id: number
  ) {

    return this.ordenProductoService.remove(id);
  }
  @Delete('/orden/:id/productos/:productId')
  @ApiOperation({
    summary: 'Quitar producto de una orden',
    description: 'Elimina un producto específico de una orden',
  })
  @ApiParam({
    name: 'id',
    description: 'ID de la orden',
    example: 1,
  })
  @ApiParam({
    name: 'productId',
    description: 'ID del producto',
    example: 2,
  })
  @ApiResponse({
    status: 200,
    description: 'Producto eliminado de la orden correctamente',
  })
  @ApiResponse({
    status: 404,
    description: 'Producto no encontrado en la orden',
  })
  removeProducto(
    @Param('id', ParseIntPipe)
    id: number,

    @Param('productId', ParseIntPipe)
    productId: number,
  ) {
    return this.ordenProductoService.removeProducto(id, productId);
  }
}
