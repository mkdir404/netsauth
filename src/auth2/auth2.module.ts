import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UserService } from './user/user.service';
import { JwtModule } from '@nestjs/jwt';
import { Auth2Service } from './auth2.service';
import { Auth2Controller } from './auth2.controller';

@Module({
    imports: [TypeOrmModule.forFeature([User]),
    JwtModule.register({
        secretOrPrivateKey: 'secret12356789'
    })
    ],
    providers: [UserService, Auth2Service],
    controllers: [Auth2Controller]
})
export class Auth2Module { }