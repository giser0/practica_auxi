import { IsNumber, IsPositive, IsString } from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateProductoDto {

    @ApiProperty()
    @IsNumber()
    idCategoria: number;

    @ApiProperty()
    @IsString()
    nombre: string;

    @ApiProperty()
    @IsString()
    descripcion: string;

    @ApiProperty()
    @IsNumber()
    precio: number;

    @ApiProperty()
    @IsNumber()
    stock: number;


}