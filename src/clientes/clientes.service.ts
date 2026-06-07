import {Injectable, NotFoundException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {IsNull, Repository} from 'typeorm';

import { Cliente } from './entities/cliente.entity';

import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClientesService {

  constructor(

    @InjectRepository(Cliente)
    private readonly clienteRepository:
    Repository<Cliente>

  ) {}

  async create(
    createClienteDto: CreateClienteDto
  ) {

    const cliente =
      this.clienteRepository.create(
        createClienteDto
      );

    return await this.clienteRepository.save(
      cliente
    );

  }

  async findAll(): Promise<Cliente[]> {
    return await this.clienteRepository.find();
  }

  async findOne(id: number):Promise<Cliente> {
    const cliente =
      await this.clienteRepository.findOne({where: {idCliente: id}});

    if (!cliente) {
      throw new NotFoundException('Cliente no encontrado');
    }

    return cliente;

  }

  async update(id: number,updateClienteDto: UpdateClienteDto): Promise<Cliente> {
    const cliente = await this.findOne(id);
    Object.assign(cliente, updateClienteDto);
    return await this.clienteRepository.save(cliente);

  }

  async remove(id: number) {
    const cliente = this.clienteRepository.findOneBy({ idCliente: id });
    if (!cliente) throw new NotFoundException('Cliente no encontrado');
    return this.clienteRepository.softDelete(id);
  }

}