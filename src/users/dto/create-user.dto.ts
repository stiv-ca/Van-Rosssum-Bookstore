import { IsOptional, IsString, MinLength } from "class-validator";


export class CreateUserDto {


    @IsString()
    @MinLength(3)
    name: string;

    @IsString()
    book: string

}
