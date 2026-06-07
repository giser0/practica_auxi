import { Module } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CategoriasController } from './categorias.controller';

import { Categoria } from './entities/categoria.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Categoria]) ],// para usar esta entity y crea su tabla en la base de datos

  controllers: [CategoriasController],
  providers: [CategoriasService],
})
export class CategoriasModule {}
