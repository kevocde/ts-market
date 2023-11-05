import axios from 'axios';
import { ProductRepository } from "./product.repository";
import { Product } from './product.model';
import { faker } from '@faker-js/faker';
import { CreateProductDto, UpdateProductDto } from './product.dto';
import { BaseHttpCrudService } from '../shared/base-http-crud.service';

export class ProductHttpService extends BaseHttpCrudService<Product, CreateProductDto, UpdateProductDto> implements ProductRepository {
    constructor() {
        super('https://api.escuelajs.co/api/v1/products');
    }

    async create(product: CreateProductDto): Promise<Product> {
        const { data } = await axios.post<Product>(this.url, {
            ...product,
            categoryId: 1,
            images: [faker.image.url()]
        });
        return data;
    }
}