import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('categorias')
@Controller('categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Post()
  @ApiOperation({
    summary: 'Crear categoría',
    description: 'Crea una nueva categoría'
  })
  @ApiBody({
    type: CreateCategoriaDto,
    description: 'Datos necesarios para crear una categoría',
  })
  @ApiResponse({
    status: 201,
    description: 'Categoría creada correctamente'
  })
  @ApiResponse({
    status: 400,
    description: 'Datos inválidos'
  })
  create(
    @Body()
    createCategoriaDto: CreateCategoriaDto
  ) {
    return this.categoriasService.create(createCategoriaDto);

  }

  @Get()
  @ApiOperation({
    summary: 'Listar categorías',
    description: 'Obtiene todas las categorías'
  })
  @ApiResponse({
    status: 200,
    description: 'Lista obtenida correctamente'
  })
  findAll() {
    return this.categoriasService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Buscar categoría',
    description: 'Obtiene una categoría por ID'
  })
  @ApiParam({
    name: 'id',
    description: 'ID de la categoría',
    example: 1
  })
  @ApiResponse({
    status: 200,
    description: 'Categoría encontrada'
  })
  @ApiResponse({
    status: 404,
    description: 'Categoría no encontrada'
  })
  findOne(
    @Param(
      'id',
      ParseIntPipe
    )
    id: number
  ) {

    return this.categoriasService.findOne(id);

  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Actualizar categoría',
    description: 'Actualiza una categoría'
  })
  @ApiParam({
    name: 'id',
    description: 'ID de la categoría',
    example: 1
  })
  @ApiBody({
    type: UpdateCategoriaDto,
    description: 'Datos para actualizar la categoría',
  })
  @ApiResponse({
    status: 200,
    description: 'Categoría actualizada correctamente',
  })
  @ApiResponse({
    status: 400,
    description: 'Datos inválidos',
  })
  @ApiResponse({
    status: 404,
    description: 'Categoría no encontrada',
  })


  update(

    @Param(
      'id',
      ParseIntPipe
    )
    id: number,

    @Body()
    updateCategoriaDto:
    UpdateCategoriaDto

  ) {
    return this.categoriasService.update(
      id,
      updateCategoriaDto
    );
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Eliminar categoría',
    description: 'Realiza borrado lógico'
  })
  @ApiParam({
    name: 'id',
    description: 'ID de la categoría',
    example: 1
  })
  @ApiResponse({
    status: 200,
    description: 'Categoría eliminada'
  })
  @ApiResponse({
    status: 404,
    description: 'Categoría no encontrada'
  })
  remove(
    @Param(
      'id',
      ParseIntPipe
    )
    id: number
  )
  {return this.categoriasService.remove(id);}

}
