import { Injectable } from '@nestjs/common';
import { prisma } from 'utils/prisma';

@Injectable()
export class SekolahService {

    async getAllSekolahService(){
        return await prisma.sekolah.findMany()
    }


    async getAllSiswaSekolahService(){
        return await prisma.sekolah.findMany({
            include : {
                Siswa : true
            }
        })
    }


    async getSekolahByIdService(id){
        return await prisma.sekolah.findUnique({
            where : {
                id : String(id)
            }
        })
    }
    

    async createSekolahService(nama_sekolah){
        return await prisma.sekolah.create({
            data : {
                nama_sekolah : nama_sekolah
            }
        })
    }


    async updateSekolahService(id,nama_sekolah){
        const now = new Date
        return await prisma.sekolah.update({
            where : {
                id : String(id)
            },
            data : {
                nama_sekolah : nama_sekolah,
                updatedAt : now
            }
        })
    }

    async deleteSekolahById(id){
        return await prisma.sekolah.delete({
            where : {
                id : String(id)
            }
        })
    }


}
