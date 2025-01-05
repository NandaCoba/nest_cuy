import { Injectable } from '@nestjs/common';
import { prisma } from 'utils/prisma';

@Injectable()
export class SiswaService {
     async getAllSiswaService(){
            return await prisma.siswa.findMany()
        }
    
    
        async getSiswaByIdService(id){
            return await prisma.siswa.findUnique({
                where : {
                    id : String(id)
                }
            })
        }
    
        async createSiswaService(nama_siswa,gender,usia,sekolahId){
            return await prisma.siswa.create({
                data : {
                    nama_siswa : nama_siswa,
                    gender : gender,
                    usia : Number(usia),
                    sekolahId : String(sekolahId)
                }
            })
        }
    
    
        async updateSiswaService(id,nama_siswa,gender,usia,sekolahId){
            const now = new Date
            return await prisma.siswa.update({
                where : {
                    id : String(id)
                },
                data : {
                    nama_siswa : nama_siswa,
                    gender : gender,
                    usia : Number(usia),
                    sekolahId : String(sekolahId),
                    updatedAt : now
                }
            })
        }
    
        async deleteSiswaById(id){
            return await prisma.siswa.delete({
                where : {
                    id : String(id)
                }
            })
        }
}
