import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/user';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PostModule } from './post/post.module';
import { Post } from './post/post';
import { TagModule } from './tag/tag.module';
import { Tag } from './tag/tag';
import { PostTagMapModule } from './post-tag-map/post-tag-map.module';
import { PostTagMap } from './post-tag-map/post-tag-map';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST_NAME,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [User, Post, Tag, PostTagMap],
      synchronize: false,
    }),
    UserModule,
    AuthModule,
    PostModule,
    TagModule,
    PostTagMapModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
