import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SonarrModule } from './sonarr/sonarr.module';
import { RadarrModule } from './radarr/radarr.module';
import { TelegramModule } from './telegram/telegram.module';

@Module({
  imports: [SonarrModule, RadarrModule, TelegramModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
