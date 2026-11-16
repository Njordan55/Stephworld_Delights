import {catalogProducts, selectCatalogProducts} from './products';

export type {ProductPresentation as FeaturedProduct} from './products';

// Homepage and catalog share a single source of product and media records.
export const featuredProducts = selectCatalogProducts(catalogProducts).filter((product) => product.featured);
