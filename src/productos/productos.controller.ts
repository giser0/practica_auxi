import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';


@ApiTags('productos')
@Controller('productos')
export class ProductosController {

  constructor(private readonly productosService:ProductosService) {}

  @Post()
  @ApiOperation({
    summary: 'Crear producto',
    description:'Crea una nueva producto'
  })
  @ApiBody({
    type: CreateProductoDto,
    description:'Datos necesarios para crear un producto'
  })
  @ApiResponse({
    status: 201,
    description:'P creado correctamente'
  })
  @ApiResponse({
    status: 400,
    description:'Datos inválidos'
  })
  @ApiResponse({
    status: 404,
    description:'La categoría no existe'
  })
  create(
    @Body()
    createProductoDto:
    CreateProductoDto
  ) {

    return this.productosService.create(createProductoDto);

  }

  @Get()
  @ApiOperation({
    summary: 'Listar productos',
    description:'Obtiene todos los productos'
  })
  @ApiResponse({
    status: 200,
    description:'Lista obtenida correctamente'
  })
  findAll() {
    return this.productosService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Buscar producto',
    description:'Obtiene un producto por ID'
  })
  @ApiParam({
    name: 'id',
    description: 'ID del producto',
    example: 1
  })
  @ApiResponse({
    status: 200,
    description:'Producto encontrado'
  })
  @ApiResponse({
    status: 404,
    description:'Producto no encontrado'
  })
  findOne(
    @Param('id',ParseIntPipe)
    id: number
  ) {

    return this.productosService.findOne(id);

  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Actualizar producto',
    description: 'Actualiza un producto'
  })
  @ApiParam({
    name: 'id',
    description: 'ID del producto',
    example: 1
  })
  @ApiBody({
    type: UpdateProductoDto
  })
  @ApiResponse({
    status: 200,
    description: 'Producto actualizado'
  })
  @ApiResponse({
    status: 400,
    description: 'Datos inválidos',
  })

  @ApiResponse({
    status: 404,
    description: 'Producto no encontrado'
  })
  update(

    @Param('id',ParseIntPipe)
    id: number,

    @Body()
    updateProductoDto:
    UpdateProductoDto

  ) {
    return this.productosService.update( id, updateProductoDto );
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Eliminar producto',
    description:'Realiza borrado lógico'
  })
  @ApiParam({
    name: 'id',
    description: 'ID del producto',
    example: 1
  })
  @ApiResponse({
    status: 200,
    description:'Producto eliminado'
  })
  @ApiResponse({
    status: 404,
    description:'Producto no encontrado'
  })
  remove(
    @Param(
      'id',
      ParseIntPipe
    )
    id: number
  ) {

    return this.productosService.remove(id);

  }

}