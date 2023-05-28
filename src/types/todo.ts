export type Product = {
    id: number;
    title: string
    category: string,
    upvotes: number,
    status: string,
    description: string,
    comments: any[]
}

export interface ItodoState {
    productRequests: Product[];
    isLoading: boolean,
    error: null | string,
}

export interface List {
    products: Product[];
}



