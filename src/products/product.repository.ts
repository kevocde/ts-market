import { CreateProductDto, UpdateProductDto } from "./product.dto";
import { Product } from "./product.model";

export interface ProductRepository {
    findAll(limit: number, offset: number): Promise<Product[]>;
    findOne(id: number): Promise<Product | undefined>;
    create(product: CreateProductDto): Promise<Product>;
    update(id: number, product: UpdateProductDto): Promise<Product | undefined>;
    delete(id: number): Promise<number | undefined>;
}