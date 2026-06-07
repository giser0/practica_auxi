import { IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateOrdenProductoDto {
@ApiProperty()
  @IsNumber()
  idProducto!: number;

  @ApiProperty()
  @IsNumber()
  idOrden!: number;

  @ApiProperty()
  @IsNumber()
  cantidad!: number;

  @ApiProperty()
  @IsNumber()
  precio_unitario!: number;


}
