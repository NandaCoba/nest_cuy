import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SiswaService } from './siswa.service';

@Controller('siswa')
export class SiswaController {
    constructor(private readonly siswaService: SiswaService) {}

    @Get()
    async getAllSiswa(){
        const data = await this.siswaService.getAllSiswaService()
        return { data }
    }


    @Get(":id")
    async getSiswaById(@Param('id') id : String){
        const data = await this.siswaService.getSiswaByIdService(id)
        return { 
            msg : "data berhasil ditemukan",
            data
        }
    }


    @Post()
    async createSiswa(@Body() body : any){
        const { nama_siswa,gender,usia,sekolahId } = body
        const data = await this.siswaService.createSiswaService(nama_siswa,gender,usia,sekolahId)
        return { data }
    }

    @Put(":id")
    async updateSiswa(@Body() body : any,@Param('id') id : String){
        const { nama_siswa,gender,usia,sekolahId } = body
        const data = await this.siswaService.updateSiswaService(id,nama_siswa,gender,usia,sekolahId)
        return { data }
    }

    
    @Delete(':id')
    async deleteSiswa(@Param('id') id : String){
        const data = await this.siswaService.deleteSiswaById(id)
        return { data }
    }
}
