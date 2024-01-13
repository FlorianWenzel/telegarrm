import { Module } from '@nestjs/common';
import { SonarrService } from './sonarr.service';

@Module({
  providers: [SonarrService]
})
export class SonarrModule {}
