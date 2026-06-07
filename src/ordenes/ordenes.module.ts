import { Module } from '@nestjs/common';
import { OrdenesService } from './ordenes.service';
import { OrdenesController } from './ordenes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ordene } from './entities/ordene.entity';
import { Cliente } from 'src/clientes/entities/cliente.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Ordene, Cliente])
  ],
  controllers: [OrdenesController],
  providers: [OrdenesService],
})
export class OrdenesModule {}
