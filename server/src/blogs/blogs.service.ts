import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Blog, BlogDocument } from './blogs.schema';
import { FindAllBlogsDto } from './dto/find-all-blogs.dto';

@Injectable()
export class BlogsService {
  constructor(
    @InjectModel(Blog.name)
    private model: Model<BlogDocument>,
  ) {}

  async create(createBlogDto: CreateBlogDto): Promise<Blog> {
    const createdBlog = new this.model(createBlogDto);
    return await createdBlog.save();
  }

  async findAll(params: FindAllBlogsDto): Promise<Blog[]> {
    console.log(params);
    return await this.model.find().exec();
  }

  async findOne(slug: string): Promise<Blog> {
    return await this.model.findOne({ slug: slug });
  }

  async update(id: string, updateBlogDto: UpdateBlogDto): Promise<Blog> {
    return await this.model.findByIdAndUpdate(id, updateBlogDto, {
      upsert: true,
    });
  }

  async remove(id: string): Promise<Blog> {
    return await this.model.findByIdAndDelete(id);
  }
}
