import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookEntity } from './entities/book.entity';
import { createBook } from './dto/createBook';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookEntity)
    private readonly bookRepository: Repository<BookEntity>,
  ) {}

  async findAll(): Promise<BookEntity[] | { Message: string }> {
    const data = await this.bookRepository.find();
    if (data.length > 0) {
      return data;
    }
    throw new NotFoundException('No Data Found');
  }

  async createBook(bookData: createBook): Promise<BookEntity> {
    const dataToBeCreated = this.bookRepository.create(bookData);
    return this.bookRepository.save(dataToBeCreated);
  }

  async findBookByID(ID: number): Promise<BookEntity> {
    const data = await this.bookRepository.findOne({
      where: { ID },
    });
    if (data) {
      return data;
    }
    throw new NotFoundException('Specified book does not exist!');
  }

  async deleteBookByID(ID: number): Promise<{ deletedRecordCount: number }> {
    await this.findBookByID(ID);
    const deletedData = await this.bookRepository.delete({ ID });
    return { deletedRecordCount: deletedData.affected };
  }

  async updateBookByID(
    ID: number,
    updateBookByID: createBook,
  ): Promise<BookEntity> {
    await this.findBookByID(ID);
    const dataToBeUpdated = await this.bookRepository.preload({
      ID,
      ...updateBookByID,
    });
    return this.bookRepository.save(dataToBeUpdated);
  }
}