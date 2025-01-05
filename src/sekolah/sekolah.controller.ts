import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { SekolahService } from './sekolah.service';

@Controller('sekolah')
export class SekolahController {
    constructor(private readonly sekolahService: SekolahService) {}

    @Get()
    async getAllSekolah(){
        const data = await this.sekolahService.getAllSekolahService()
        return { data }
    }


    @Get(":id")
    async getSekolahById(@Param('id') id : String){
        const data = await this.sekolahService.getSekolahByIdService(id)
        return {
            msg : "data berhasil di temukan", 
            data 
        }
    }

    @Post()
    async createSekolah(@Body() body){
        const { nama_sekolah } = body;
        const data = await this.sekolahService.createSekolahService(nama_sekolah)
        return {
            msg : "berhasil membuat data sekolah",
            data
        }
    }

    @Put(":id")
    async updateSekolah(@Body() body : any, @Param('id') id : String){
        const { nama_sekolah } = body
        const data = await this.sekolahService.updateSekolahService(id,nama_sekolah)
        return { 
            msg : "berhasil mengupdate data",
            data
        }
    }

    @Delete(":id")
    async deleteSekolah(@Param('id') id : String){
        const data = await this.sekolahService.deleteSekolahById(id)
        return {
            msg : "berhasil menghapus data",
            data
        }
    }

}
