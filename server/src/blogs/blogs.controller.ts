import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { BlogResponseDto } from './dto/blog-response.dto';
import { FindAllBlogsDto } from './dto/find-all-blogs.dto';
import { Public } from 'src/auth/public.decorator';
import { Roles } from 'src/auth/roles.decorator';
import { URoles } from 'src/users/users.schema';

@ApiBearerAuth()
@ApiTags('blogs')
@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Public()
  @Get()
  async findAll(@Body() params: FindAllBlogsDto): Promise<BlogResponseDto[]> {
    return await this.blogsService.findAll(params);
  }

  @Public()
  @Get(':slug')
  async findOne(@Param('slug') slug: string): Promise<BlogResponseDto> {
    return this.blogsService.findOne(slug);
  }

  @Post()
  @Roles(URoles.lead, URoles.advisor, URoles.domain_lead)
  async create(@Body() createBlogDto: CreateBlogDto) {
    return await this.blogsService.create(createBlogDto);
  }

  @Patch(':id')
  @Roles(URoles.lead, URoles.advisor, URoles.domain_lead)
  async update(
    @Param('id') id: string,
    @Body() updateBlogDto: UpdateBlogDto,
  ): Promise<BlogResponseDto> {
    return await this.blogsService.update(id, updateBlogDto);
  }

  @Delete(':id')
  @Roles(URoles.lead, URoles.advisor, URoles.domain_lead)
  remove(@Param('id') id: string): Promise<BlogResponseDto> {
    return this.blogsService.remove(id);
  }
}
