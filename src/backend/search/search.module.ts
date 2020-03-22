import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Search } from './search.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Search])],
  providers: [SearchService],
  controllers: [SearchController],
})
export class SearchModule {
}
