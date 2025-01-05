import { Module } from '@nestjs/common';
import { SiswaService } from './siswa.service';
import { SiswaController } from './siswa.controller';
import { SekolahService } from 'src/sekolah/sekolah.service';

@Module({
  providers: [SiswaService,SekolahService],
  controllers: [SiswaController]
})
export class SiswaModule {}
