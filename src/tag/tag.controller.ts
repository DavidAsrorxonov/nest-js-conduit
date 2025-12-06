import { Controller, Get } from '@nestjs/common';
import { TagService } from './tag.service';

@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get()
  async defFunc() {
    const allTags = await this.tagService.defFunc();
    const tags: string[] = allTags.map((tag) => tag.name);

    return { tags };
  }
}
