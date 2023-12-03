import { createContext } from 'react';

export const WishlistContext = createContext({

  products: [],
  setProducts: (value) => console.log(value)

});

