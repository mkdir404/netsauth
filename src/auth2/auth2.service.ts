import { Injectable } from '@nestjs/common';
import { JwtService } from  '@nestjs/jwt';
import { UserService } from  '../auth2/user/user.service';
import { User } from  '../auth2/user/user.entity';

@Injectable()
export class Auth2Service {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) { }
    private async validate(userData: User): Promise<User> {
        return await this.userService.findByEmail(userData.email);
    }

    public async login(user: User): Promise< any | { status: number }>{
        return this.validate(user).then((userData)=>{
          if(!userData){
            return { status: 404 };
          }
          let payload = `${userData.name}${userData.id}`;
          const accessToken = this.jwtService.sign(payload);

          return {
             expires_in: 3600,
             access_token: accessToken,
             user_id: payload,
             status: 200
          };

        });
    }

    public async register(user: User): Promise<any>{
        return this.userService.create(user)
    } 
}
