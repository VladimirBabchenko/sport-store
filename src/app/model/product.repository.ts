import { Injectable } from "@angular/core";

import { Product } from "./product.model";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class ProductRepository {
    private products: Product[] = [];
    private categories: string[] = [];

    constructor(private dataSource: StaticDataSource) { 
        dataSource.getProducts()
            .subscribe(data => {
                this.products = data;
                this.categories = data.map(product => product.category)
                    .filter((catergory, i, arr) => arr.indexOf(catergory) === i)
                        .sort();
            })
    }

    getProducts(category: string = null): Product[] {
        return this.products.filter(product => category === null || 
            product.category === category);
    }

    getProduct(id: number): Product {
        return this.products.find(product => product.id === id);
    }

    getCategories(): string[] {
        return this.categories;
    }
}

