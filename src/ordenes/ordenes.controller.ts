import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { OrdenesService } from './ordenes.service';
import { CreateOrdeneDto } from './dto/create-ordene.dto';
import { UpdateOrdeneDto } from './dto/update-ordene.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';



@ApiTags('ordenes')
@Controller('ordenes')
export class OrdenesController {

  constructor(
    private readonly ordenesService:
    OrdenesService
  ) {}

  @Post()
  @ApiOperation({
    summary: 'Crear orden',
    description:'Crea una nueva orden'
  })
  @ApiBody({
    type: CreateOrdeneDto,
    description :'Datos necesarios para crear una orden'
  })
  @ApiResponse({
    status: 201,
    description:'Orden creada correctamente'
  })
  @ApiResponse({
    status: 400,
    description:'Datos inválidos'
  })
  @ApiResponse({
    status: 404,
    description:'Cliente no encontrado'
  })
  create(
    @Body()
    createOrdeneDto:
    CreateOrdeneDto
  ) {

    return this.ordenesService.create(
      createOrdeneDto
    );

  }

  @Get()
  @ApiOperation({
    summary: 'Listar órdenes',
    description: 'Obtiene todas las órdenes'
  })
  @ApiResponse({
    status: 200,
    description: 'Lista obtenida correctamente'
  })
  findAll() {
    return this.ordenesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Buscar orden',
    description: 'Obtiene una orden por ID'
  })
  @ApiParam({
    name: 'id',
    description: 'ID de la orden',
    example: 1
  })
  @ApiResponse({
    status: 200,
    description: 'Orden encontrada'
  })
  @ApiResponse({
    status: 404,
    description: 'Orden no encontrada'
  })
  findOne(
    @Param(
      'id',
      ParseIntPipe
    )
    id: number
  ) {

    return this.ordenesService.findOne(id);

  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Actualizar orden',
    description:'Actualiza una orden'
  })
  @ApiParam({
    name: 'id',
    description: 'ID de la orden a actualizar',
    example: 1
  })
  @ApiBody({
    type: UpdateOrdeneDto,
    description: 'Datos para actualizar la orden'
  })
  @ApiResponse({
    status: 200,
    description:'Orden actualizada'
  })
    @ApiResponse({
    status: 400,
    description: 'Datos inválidos',
  })
  @ApiResponse({
    status: 404,
    description:'Orden no encontrada'
  })
  update(

    @Param(
      'id',
      ParseIntPipe
    )
    id: number,

    @Body()
    updateOrdeneDto:
    UpdateOrdeneDto

  ) {

    return this.ordenesService.update(
      id,
      updateOrdeneDto
    );

  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Eliminar orden',
    description:'Realiza borrado lógico'
  })
  @ApiParam({
    name: 'id',
    description: 'ID de la orden a eliminar',
    example: 1
  })
  @ApiResponse({
    status: 200,
    description:'Orden eliminada'
  })
  @ApiResponse({
    status: 404,
    description:'Orden no encontrada'
  })
  remove(
    @Param('id',ParseIntPipe)
    id: number
  ) {

    return this.ordenesService.remove(id);
  }
}