import { Product } from "./product.model";

/**
 * La instrucción Omit<Product, 'id'> crea un nuevo tipo que es igual al tipo Product, excepto que no tiene la propiedad id.
 */
export interface CreateProductDto extends Omit<Product, 'id'> {}

/**
 * La instrucción Partial<Product> crea un nuevo tipo que es igual al tipo Product, excepto que todas sus propiedades son opcionales.
 */
export interface UpdateProductDto extends Partial<Product> {}

/**
 * La instrucción Readonly<Partial<Omit<Product, 'id'>>>:
 *  1. Omit<Product, 'id'>: crea un nuevo tipo que es igual al tipo Product, excepto que no tiene la propiedad id.
 *  2. Partial<Omit<Product, 'id'>>: crea un nuevo tipo que es igual al tipo Omit<Product, 'id'>, excepto que todas sus propiedades son opcionales.
 *  3. Readonly<Partial<Omit<Product, 'id'>>>: crea un nuevo tipo que es igual al tipo Partial<Omit<Product, 'id'>>, excepto que todas sus propiedades son de solo lectura.
 */
export interface FindProductDto extends Readonly<Partial<Omit<Product, 'id'>>> {}