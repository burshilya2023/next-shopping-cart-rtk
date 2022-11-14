//https://mockapi.io/docs form params

//!1)Fetch data
export type PizzaApi = {
    id: string | '0';
    title: string;
    price: number;
    imageUrl: string;
    sizes: number[];
    types: number[];
    rating: number; 
  }
  //! initialState PIIZA(1/3)
  export interface PizzaSliceState {
    items: PizzaApi[];
    status: Status;
  }

  export enum Status {
    LOADING = 'loading',
    SUCCESS = 'completed',
    ERROR = 'error',
  }

  //!2) params fetch request(?-&)
  export type SearchPizzaParams = {
    sortBy: string;
    order: string;
    category: string;
    search: string;
    currentPage: string;
  }
    //!2.1)select Sort params fetch 
    export enum SortPropertyEnum {
      RATING_DESC = 'rating',
      RATING_ASC = '-rating',
      TITLE_DESC = 'title',
      TITLE_ASC = '-title',
      PRICE_DESC = 'price',
      PRICE_ASC = '-price',
    }
    //!2.2)
  export type Sort = {
    sortName: string; //"popularity  | price | alphabet (ASC/DESC)
    sortProperty: SortPropertyEnum; //params
  };
  
  //!initialState FILTER (2/3)
  export interface FilterSliceState {
    searchValue: string;//input
    categoryId: number;//ul>li
    currentPage?: number;//pagination?
    sort: Sort; //filterSlice
  }
  //!add Pizza in Cart
  export type CartItemType = {
    id: string;
    date:string;
    title: string;
    price: number;
    imageUrl: string;
    type: string;
    size: number;
    count: number;
  };
  //!ALL count in Cart
  export type Count={
    count: number;
  }
  //!initialState CART (3/3)
  export interface CartSliceState {
    totalPrice: number;
    itemsCart: CartItemType[];
    totalCount:number;
  }
  
  export type FavoriteItem={
    id:string,
    date: string,
    title:string,
    price: number,
    imageUrl:string,
    toggle:boolean
  }