import { faker } from "@faker-js/faker";
import { ProductMemoryService } from "./src/products/product-memory.service";
import { ProductHttpService } from "./src/products/product-http.service";

(async () => {
    // const productRepository = new ProductMemoryService();
    const productRepository = new ProductHttpService();

    // Vamos a crear algunos porductos
    const quantity = 4;

    for (let idx = 0; idx < quantity; idx++) {
        await productRepository.create({
            title: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            price: faker.number.float({ min: 10, max: 100, precision: 0.01 }),
        });
    }

    // Consultamos los productos creados
    let products = await productRepository.findAll(5, 0);
    console.log('Created products: ', products);

    // Buscamos uno de los productos por id
    const idxToFind = faker.number.int({min: 0, max: quantity-1});
    let product = await productRepository.findOne(products[idxToFind].id);

    console.log('Product found: ', product);

    // Actualizamos el producto encontrado
    if (product) {
        product = await productRepository.update(product.id, {"description": "Producto actualizado"});

        console.log('Product updated: ', product);

        if (product) {
            // Eliminamos el producto encontrado
            const deletedProductId = await productRepository.delete(product.id);

            console.log('Product deleted: ', deletedProductId);

            // Consultamos los productos nuevamente
            products = await productRepository.findAll(5, 0);
            console.log('Products: ', products);
        }
    }
})();
