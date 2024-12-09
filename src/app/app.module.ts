import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesController } from 'src/messages/messages.controller';
import { MessagesService } from 'src/messages/messages.service';

@Module({
  imports: [],
  controllers: [AppController, MessagesController],
  providers: [AppService, MessagesService],
})
export class AppModule {}
