const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      price: 30,
      oldPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://www.fortywinks.com.au/getmedia/f4614e1e-9b00-476b-bdcd-e28afa3d34db/jackson_bed_frame-front.jpg?width=1200',
      favorites: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      price: 30,
      oldPrice: null,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/817%2BqPbDo8L._SX425_.jpg',
      favorites: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      price: 30,
      oldPrice: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://assets.weimgs.com/weimgs/rk/images/wcm/products/202040/0168/anton-solid-wood-bed-o.jpg',
      favorites: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      price: 30,
      oldPrice: null,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://ii1.pepperfry.com/media/catalog/product/k/o/1100x1210/kosmo-new-port-queen-size-bed-with-storage-in-vermount-finish-by-spacewood-kosmo-new-port-queen-size-tiaya2.jpg',
      favorites: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      price: 30,
      oldPrice: null,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      favorites: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      price: 30,
      oldPrice: 35,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/3753435/pexels-photo-3753435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      favorites: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      price: 30,
      oldPrice: null,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      favorites: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      price: 30,
      oldPrice: null,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      favorites: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      price: 30,
      oldPrice: null,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/3773581/pexels-photo-3773581.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      favorites: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      price: 30,
      oldPrice: null,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      favorites: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      price: 30,
      oldPrice: null,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/1879061/pexels-photo-1879061.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      favorites: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      price: 30,
      oldPrice: null,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/4119831/pexels-photo-4119831.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      favorites: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      price: 30,
      oldPrice: null,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/3144580/pexels-photo-3144580.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      favorites: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      price: 30,
      oldPrice: null,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/2029731/pexels-photo-2029731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      favorites: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      price: 30,
      oldPrice: null,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      favorites: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      price: 30,
      oldPrice: null,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/2705/bed-bedroom-room-furniture.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      favorites: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      price: 30,
      oldPrice: null,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/2416932/pexels-photo-2416932.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      favorites: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      price: 30,
      oldPrice: null,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/4276617/pexels-photo-4276617.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      favorites: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      price: 30,
      oldPrice: null,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/3935331/pexels-photo-3935331.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      favorites: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      price: 30,
      oldPrice: null,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/3935353/pexels-photo-3935353.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      favorites: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      price: 30,
      oldPrice: null,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/3773577/pexels-photo-3773577.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      favorites: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      price: 30,
      oldPrice: null,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/376531/pexels-photo-376531.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      favorites: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      price: 30,
      oldPrice: null,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      favorites: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      price: 30,
      oldPrice: null,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/2029722/pexels-photo-2029722.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      favorites: false,
      compare: false,
    },
    {
      id: 'banean-du-antique-1',
      name: 'Banean Du Antique 1',
      category: 'chair',
      price: 20,
      oldPrice: null,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      favorites: false,
      compare: false,
    },
    {
      id: 'banean-du-antique-2',
      name: 'Banean Du Antique 2',
      category: 'chair',
      price: 20,
      oldPrice: null,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/1321290/pexels-photo-1321290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      favorites: false,
      compare: false,
    },
    {
      id: 'banean-du-antique-3',
      name: 'Banean Du Antique 3',
      category: 'chair',
      price: 20,
      oldPrice: null,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/2180883/pexels-photo-2180883.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      favorites: false,
      compare: false,
    },
    {
      id: 'ulean-su-raqute-1',
      name: 'Ulean Su Raqute 1',
      category: 'sofa',
      price: 100,
      oldPrice: null,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      favorites: false,
      compare: false,
    },
    {
      id: 'ulean-su-raqute-2',
      name: 'Ulean Su Raqute 2',
      category: 'sofa',
      price: 100,
      oldPrice: null,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      favorites: false,
      compare: false,
    },
    {
      id: 'ulean-su-raqute-3',
      name: 'Ulean Su Raqute 3',
      category: 'sofa',
      price: 100,
      oldPrice: null,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      favorites: false,
      compare: false,
    },
    {
      id: 'argean-la-fata-1',
      name: 'Argean La Fata 1',
      category: 'table',
      price: 50,
      oldPrice: null,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/890669/pexels-photo-890669.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      favorites: false,
      compare: false,
    },
    {
      id: 'argean-la-fata-2',
      name: 'Argean La Fata 2',
      category: 'table',
      price: 50,
      oldPrice: null,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/842950/pexels-photo-842950.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      favorites: false,
      compare: false,
    },
    {
      id: 'argean-la-fata-3',
      name: 'Argean La Fata 3',
      category: 'table',
      price: 50,
      oldPrice: null,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/280471/pexels-photo-280471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      favorites: false,
      compare: false,
    },
    {
      id: 'dagadan-ge-jala-1',
      name: 'Dagadan Ge Jala 1',
      category: 'dining',
      price: 60,
      oldPrice: null,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      favorites: false,
      compare: false,
    },
    {
      id: 'dagadan-ge-jala-2',
      name: 'Dagadan Ge Jala 2',
      category: 'dining',
      price: 60,
      oldPrice: null,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      favorites: false,
      compare: false,
    },
    {
      id: 'dagadan-ge-jala-3',
      name: 'Dagadan Ge Jala 3',
      category: 'dining',
      price: 60,
      oldPrice: null,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/4577410/pexels-photo-4577410.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      favorites: false,
      compare: false,
    },
  ],
  cart: {
    products: [],
  },
};

export default initialState;
