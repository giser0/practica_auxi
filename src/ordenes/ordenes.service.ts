import {Injectable, NotFoundException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {IsNull, Repository} from 'typeorm';
import { Ordene } from './entities/ordene.entity';
import { Cliente } from 'src/clientes/entities/cliente.entity';
import { CreateOrdeneDto } from './dto/create-ordene.dto';
import { UpdateOrdeneDto } from './dto/update-ordene.dto';

@Injectable()
export class OrdenesService {

  constructor(

    @InjectRepository(Ordene)
    private readonly ordenRepository:
    Repository<Ordene>,

    @InjectRepository(Cliente)
    private readonly clienteRepository:
    Repository<Cliente>

  ) {}

  async create(
    createOrdeneDto:
    CreateOrdeneDto
  ) {

    const cliente =
      await this.clienteRepository.findOne({
        where: {
          idCliente:
          createOrdeneDto.IdCliente
        }
      });

    if (!cliente) {
      throw new NotFoundException(
        'El cliente no existe'
      );
    }

    const orden = this.ordenRepository.create({

        ...createOrdeneDto,
        idCliente: createOrdeneDto.IdCliente,
      });

    return await
    this.ordenRepository.save(
      orden
    );

  }

  async findAll() {

    return await
    this.ordenRepository.find({
      relations: ['cliente']
    });

  }

  async findOne(id: number) {

    const orden =
      await this.ordenRepository.findOne({

        where: {
          idOrden: id,
        },
        relations: ['cliente']
      });

    if (!orden) {
      throw new NotFoundException(
        'Orden no encontrada'
      );
    }
    return orden;
  }

  async update(
    id: number,
    updateOrdeneDto: UpdateOrdeneDto,
  ) {

    const orden = await this.findOne(id);

    if (updateOrdeneDto.estado !== undefined) {
      orden.estado = updateOrdeneDto.estado;
    }

    if (updateOrdeneDto.total !== undefined) {
      orden.total = updateOrdeneDto.total;
    }

    if (updateOrdeneDto.IdCliente !== undefined) {
      orden.idCliente = updateOrdeneDto.IdCliente;
    }

    return await this.ordenRepository.save(orden);
  }

  async remove(id: number) {
    const orden = await this.ordenRepository.findOneBy({ idOrden: id });
    if(!orden) throw new NotFoundException('Orden no encontrada');
    return await this.ordenRepository.softDelete(id);
  }

}