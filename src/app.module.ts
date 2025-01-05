import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SekolahModule } from './sekolah/sekolah.module';
import { SiswaModule } from './siswa/siswa.module';


@Module({
  imports: [SekolahModule, SiswaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
