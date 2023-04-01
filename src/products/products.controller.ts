import { Controller, Post, Get, Put, Delete, Patch, Res, HttpStatus, Body } from '@nestjs/common';

import { CreateProductDto } from './dto/products.dto';

@Controller('products')
export class ProductsController {

    @Post('/create')
    createPost(@Res() res, @Body() createProductDTO: CreateProductDto) {
        console.log("DTO received: ", createProductDTO);
        return res.status(HttpStatus.OK).json({
            message: 'received'
        })
    }

}
