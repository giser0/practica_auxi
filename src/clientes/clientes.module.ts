// import { Module } from '@nestjs/common';
// import { ClientesService } from './clientes.service';
// import { ClientesController } from './clientes.controller';

// @Module({
//   controllers: [ClientesController],
//   providers: [ClientesService],
// })
// export class ClientesModule {}

import { Module } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { ClientesController } from './clientes.controller';
import { Cliente } from './entities/cliente.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cliente]) // para usa esta entity y crea su tabla en la base de datos
  ],
  controllers: [ClientesController],
  providers: [ClientesService],
})
export class ClientesModule {}