import { IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateOrdeneDto {
    @ApiProperty()    
    @IsNumber()
    IdCliente!: number;

    @ApiProperty()
    @IsString()
    estado!: string;

    @ApiProperty()
    @IsNumber()
    total!: number;
}
