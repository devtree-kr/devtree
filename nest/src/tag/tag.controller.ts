import { Controller, Get, Param, Query } from '@nestjs/common';
import { TagService } from './tag.service';

@Controller('tag')
export class TagController {
  constructor(private tagService: TagService) {}
  @Get()
  public async getTagsByCondition(@Query() params: object) {
    console.log(params);
    return await this.tagService.searchTags(params?.['keyword'] || '');
  }
}
