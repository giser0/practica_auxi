import {Body, Controller, Delete, Get, Param,  ParseIntPipe, Patch,  Post} from '@nestjs/common';
import {ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags} from '@nestjs/swagger';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@ApiTags('clientes')
@Controller('clientes')
export class ClientesController {

  constructor(
    private readonly clientesService:
    ClientesService
  ) {}

  @Post()
  @ApiOperation({
    summary: 'Crear cliente',
    description:
      'Crea un nuevo cliente'
  })
  @ApiBody({
    type: CreateClienteDto
  })
  @ApiResponse({
    status: 201,
    description:
      'Cliente creado correctamente'
  })
  @ApiResponse({
    status: 400,
    description:
      'Datos inválidos'
  })
  create(
    @Body()
    createClienteDto: CreateClienteDto
  ) {

    return this.clientesService.create(
      createClienteDto
    );

  }

  @Get()
  @ApiOperation({
    summary: 'Listar clientes',
    description:
      'Obtiene todos los clientes'
  })
  @ApiResponse({
    status: 200,
    description:
      'Lista obtenida correctamente'
  })
  findAll() {

    return this.clientesService.findAll();

  }

  @Get(':id')
  @ApiOperation({
    summary: 'Buscar cliente',
    description:
      'Obtiene un cliente por IDd'
  })
  @ApiParam({
    name: 'id',
    example: 1
  })
  @ApiResponse({
    status: 200,
    description:
      'Cliente encontrado'
  })
  @ApiResponse({
    status: 404,
    description:
      'Cliente no encontrado'
  })
  findOne(
    @Param(
      'id',
      ParseIntPipe
    )
    id: number
  ) {

    return this.clientesService.findOne(id);

  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Actualizar cliente',
    description:
      'Actualiza un cliente'
  })
  @ApiParam({
    name: 'id',
    example: 1
  })
  @ApiBody({
    type: UpdateClienteDto
  })
  @ApiResponse({
    status: 200,
    description:
      'Cliente actualizado'
  })
  @ApiResponse({
    status: 404,
    description:
      'Cliente no encontrado'
  })
  update(
    @Param(
      'id',
      ParseIntPipe
    )
    id: number,

    @Body()
    updateClienteDto:
    UpdateClienteDto
  ) {

    return this.clientesService.update(
      id,
      updateClienteDto
    );

  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Eliminar cliente',
    description:
      'Realiza borrado lógico'
  })
  @ApiParam({
    name: 'id',
    example: 1
  })
  @ApiResponse({
    status: 200,
    description:
      'Cliente eliminado'
  })
  @ApiResponse({
    status: 404,
    description:
      'Cliente no encontrado'
  })
  remove(
    @Param(
      'id',
      ParseIntPipe
    )
    id: number
  ) {

    return this.clientesService.remove(id);

  }

}