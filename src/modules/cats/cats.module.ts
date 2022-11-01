import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CatslMiddleware } from 'src/middlewares/cats.middleware';
import { CatsController } from './cats.controller';

@Module({
  controllers: [CatsController],
})
export class CatsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CatslMiddleware).forRoutes(CatsController);
  }
}
