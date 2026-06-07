import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateClienteDto {

    @ApiProperty()
    @IsString()
    nombres!: string;

    @ApiProperty()
    @IsString()
    paterno!: string;

    @ApiProperty()
    @IsString()
    materno?: string;

    @ApiProperty()
    @IsEmail()
    email!: string;

}