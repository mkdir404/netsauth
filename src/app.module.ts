import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MensajesController } from './mensajes/mensajes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mensaje } from './mensajes/entities/mensaje.entity'
import { User } from './auth2/user/user.entity';
import { MensajesService } from './mensajes/mensajes.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppGateway } from './app.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModule } from './blog/blog.module';
import { Auth2Module } from './auth2/auth2.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest-blog-project', { useNewUrlParser: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '95.216.37.253',
      port: 3306,
      username: 'vicidial',
      password: 'vicidial',
      database: 'nest_test',
      entities: [Mensaje,User],
      //entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Mensaje]),
    AuthModule,
    UsersModule,
    BlogModule,
    Auth2Module
  ],
  controllers: [AppController, MensajesController],
  providers: [AppService, MensajesService, AppGateway],
})
export class AppModule {}
