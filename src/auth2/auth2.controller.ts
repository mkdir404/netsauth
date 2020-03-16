import { Controller ,  Post, Body, Get  } from '@nestjs/common';
import { Auth2Service } from  '../auth2/auth2.service';
import { User } from  '../auth2/user/user.entity';

@Controller('auth2')
export  class  Auth2Controller {
    constructor(private  readonly  authService:  Auth2Service) {}

    @Post('login')
    async login(@Body() user: User): Promise<any> {
      return this.authService.login(user);
    }  

    @Post('register')
    async register(@Body() user: User): Promise<any> {
      return this.authService.register(user);
    }
    
    @Get('sample')
    async sample(){
        return 'Test'
    }
}
