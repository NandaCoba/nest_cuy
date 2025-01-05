import { Module } from '@nestjs/common';
import { SekolahController } from './sekolah.controller';
import { SekolahService } from './sekolah.service';

@Module({
  controllers: [SekolahController],
  providers: [SekolahService]
})
export class SekolahModule {}
