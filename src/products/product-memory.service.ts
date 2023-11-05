import { faker } from "@faker-js/faker";

import { CreateProductDto, UpdateProductDto } from "./product.dto";
import { Product } from "./product.model";
import { ProductRepository } from "./product.repository";

export class ProductMemoryService implements ProductRepository {
    private products: Product[] = [];

    async findAll(limit: number, offset: number): Promise<Product[]> {
        return this.products;
    }

    async findOne(id: number): Promise<Product | undefined> {
        return this.products.find(product => product.id === id);
    }

    async create(product: CreateProductDto): Promise<Product> {
        const newProduct = new Product(
            faker.number.int({ min: 1000, max: 9999}),
            product.title,
            product.description,
            product.price,
        );
        this.products.push(newProduct);
        return newProduct;
    }

    async update(id: number, product: UpdateProductDto): Promise<Product | undefined> {
        const index = this.products.findIndex(product => product.id === id);
        if (index === -1) {
            return undefined;
        }
        const updatedProduct = { ...this.products[index], ...product };
        this.products[index] = updatedProduct;
        return updatedProduct;
    }

    async delete(id: number): Promise<number | undefined> {
        const index = this.products.findIndex(product => product.id === id);
        if (index === -1) {
            return undefined;
        }
        this.products.splice(index, 1);
        return id;
    }
}