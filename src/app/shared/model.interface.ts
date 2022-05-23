export interface Product {
    id: number;
    name: string;
    price: number;
    discount: number;
    img: Image[];
    size: Size[];
}
export interface Image {
    id: number;
    source: string;
}
export interface Material {
    id: number;
    title: string;
    content: string;
    products: Product[];
}
export interface Size {
    id: number;
    sizeName: string;
    quantity: number;
}
