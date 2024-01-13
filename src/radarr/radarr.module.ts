import { Module } from '@nestjs/common';
import { RadarrService } from './radarr.service';

@Module({
  providers: [RadarrService]
})
export class RadarrModule {}
