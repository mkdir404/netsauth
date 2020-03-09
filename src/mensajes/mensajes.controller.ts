import { Controller, Post, Body, Get, Put, Delete , Res, HttpStatus, Param } from '@nestjs/common';
import { CreateMensajeDto } from './dto/create-mensaje-dto';
import { MensajesService } from './mensajes.service';
import { restElement } from '@babel/types';
import { response } from 'express';

@Controller('mensajes')
export class MensajesController {

    constructor(
        private  mesajesServices: MensajesService
      ) {}
    
    @Post()
    create (@Body() createMensajeDto : CreateMensajeDto , @Res() response){
        this.mesajesServices.createMensaje(createMensajeDto)
        .then(
            mensaje => {
                response.status(HttpStatus.CREATED).json(mensaje)
            }
        )
        .catch(

        )   
    }
    
    @Get()
    getAll(@Res() response){
        this.mesajesServices.getAll()
        .then(
            mensajesList => {
                response.status(HttpStatus.OK).json(mensajesList)
            }
        )
        .catch()
    }
    
    @Put(':id')
    update(@Body() updateMensajeDto : CreateMensajeDto , @Res() response , @Param('id') idMensaje){
        this.mesajesServices.updateMensaje( idMensaje , updateMensajeDto)
        .then(
            mensaje => {
                response.status(HttpStatus.OK).json(mensaje)
            }
        )
        .catch()
    }
    
    @Delete(':id')
    delete(@Res() response , @Param('id') idMensaje){
        this.mesajesServices.deleteMensaje( idMensaje )
        .then(
            res => {
                response.status(HttpStatus.OK).json(res)
            }
        )
        .catch()
    }

}
