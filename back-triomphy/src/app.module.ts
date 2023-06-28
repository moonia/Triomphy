import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserSchema } from './schema/user.schema';
import { UserController } from './controller/user/user.controller';
import { UserService } from './providers/user/user.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    // MongooseModule.forRoot(databse_url),
    // MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
