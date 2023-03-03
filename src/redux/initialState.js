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
      image: './images/furniture_images/bed_images/bed-1.jpg',
      oldPrice: 43,
      price: 30,
      stars: 2,
      userRating: true,
      promo: 'sale',
      newFurniture: true,
      isFavorite: true,
      isCompare: false,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dolor voluptas possimus saepe nam aspernatur deserunt voluptatem hic officiis, quae facilis esse, facere iste expedita magnam fuga! Odit, distinctio ut!',
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      image: './images/furniture_images/bed_images/bed-2.jpg',
      oldPrice: 40,
      price: 30,
      stars: 2,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dolor voluptas possimus saepe nam aspernatur deserunt voluptatem hic officiis, quae facilis esse, facere iste expedita magnam fuga! Odit, distinctio ut!',
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      image: './images/furniture_images/bed_images/bed-3.jpg',
      price: 30,
      stars: 2,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: true,
      isCompare: false,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dolor voluptas possimus saepe nam aspernatur deserunt voluptatem hic officiis, quae facilis esse, facere iste expedita magnam fuga! Odit, distinctio ut!',
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      image: './images/furniture_images/bed_images/bed-4.jpg',
      price: 30,
      stars: 2,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dolor voluptas possimus saepe nam aspernatur deserunt voluptatem hic officiis, quae facilis esse, facere iste expedita magnam fuga! Odit, distinctio ut!',
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      image: './images/furniture_images/bed_images/bed-5.jpg',
      price: 30,
      stars: 2,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dolor voluptas possimus saepe nam aspernatur deserunt voluptatem hic officiis, quae facilis esse, facere iste expedita magnam fuga! Odit, distinctio ut!',
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      image: './images/furniture_images/bed_images/bed-6.jpg',
      price: 30,
      stars: 2,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dolor voluptas possimus saepe nam aspernatur deserunt voluptatem hic officiis, quae facilis esse, facere iste expedita magnam fuga! Odit, distinctio ut!',
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      image: './images/furniture_images/bed_images/bed-7.jpg',
      price: 30,
      stars: 2,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dolor voluptas possimus saepe nam aspernatur deserunt voluptatem hic officiis, quae facilis esse, facere iste expedita magnam fuga! Odit, distinctio ut!',
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      image: './images/furniture_images/bed_images/bed-8.jpg',
      price: 30,
      stars: 2,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dolor voluptas possimus saepe nam aspernatur deserunt voluptatem hic officiis, quae facilis esse, facere iste expedita magnam fuga! Odit, distinctio ut!',
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      image: './images/furniture_images/bed_images/bed-9.jpg',
      price: 30,
      stars: 2,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dolor voluptas possimus saepe nam aspernatur deserunt voluptatem hic officiis, quae facilis esse, facere iste expedita magnam fuga! Odit, distinctio ut!',
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      image: './images/furniture_images/bed_images/bed-10.jpg',
      price: 30,
      stars: 2,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dolor voluptas possimus saepe nam aspernatur deserunt voluptatem hic officiis, quae facilis esse, facere iste expedita magnam fuga! Odit, distinctio ut!',
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      image: './images/furniture_images/bed_images/bed-11.jpg',
      price: 30,
      stars: 2,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dolor voluptas possimus saepe nam aspernatur deserunt voluptatem hic officiis, quae facilis esse, facere iste expedita magnam fuga! Odit, distinctio ut!',
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      image: './images/furniture_images/bed_images/bed-12.jpg',
      price: 30,
      stars: 2,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dolor voluptas possimus saepe nam aspernatur deserunt voluptatem hic officiis, quae facilis esse, facere iste expedita magnam fuga! Odit, distinctio ut!',
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      image: './images/furniture_images/bed_images/bed-1.jpg',
      price: 30,
      stars: 2,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dolor voluptas possimus saepe nam aspernatur deserunt voluptatem hic officiis, quae facilis esse, facere iste expedita magnam fuga! Odit, distinctio ut!',
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      image: './images/furniture_images/bed_images/bed-2.jpg',
      price: 30,
      stars: 2,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dolor voluptas possimus saepe nam aspernatur deserunt voluptatem hic officiis, quae facilis esse, facere iste expedita magnam fuga! Odit, distinctio ut!',
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      image: './images/furniture_images/bed_images/bed-3.jpg',
      price: 30,
      stars: 2,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dolor voluptas possimus saepe nam aspernatur deserunt voluptatem hic officiis, quae facilis esse, facere iste expedita magnam fuga! Odit, distinctio ut!',
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      image: './images/furniture_images/bed_images/bed-4.jpg',
      price: 30,
      stars: 2,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dolor voluptas possimus saepe nam aspernatur deserunt voluptatem hic officiis, quae facilis esse, facere iste expedita magnam fuga! Odit, distinctio ut!',
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      image: './images/furniture_images/bed_images/bed-5.jpg',
      price: 30,
      stars: 2,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dolor voluptas possimus saepe nam aspernatur deserunt voluptatem hic officiis, quae facilis esse, facere iste expedita magnam fuga! Odit, distinctio ut!',
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      image: './images/furniture_images/bed_images/bed-6.jpg',
      price: 30,
      stars: 2,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dolor voluptas possimus saepe nam aspernatur deserunt voluptatem hic officiis, quae facilis esse, facere iste expedita magnam fuga! Odit, distinctio ut!',
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      image: './images/furniture_images/bed_images/bed-7.jpg',
      price: 30,
      stars: 2,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dolor voluptas possimus saepe nam aspernatur deserunt voluptatem hic officiis, quae facilis esse, facere iste expedita magnam fuga! Odit, distinctio ut!',
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      image: './images/furniture_images/bed_images/bed-8.jpg',
      price: 30,
      stars: 2,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dolor voluptas possimus saepe nam aspernatur deserunt voluptatem hic officiis, quae facilis esse, facere iste expedita magnam fuga! Odit, distinctio ut!',
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      image: './images/furniture_images/bed_images/bed-9.jpg',
      price: 30,
      stars: 2,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dolor voluptas possimus saepe nam aspernatur deserunt voluptatem hic officiis, quae facilis esse, facere iste expedita magnam fuga! Odit, distinctio ut!',
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      image: './images/furniture_images/bed_images/bed-10.jpg',
      category: 'bed',
      price: 30,
      stars: 2,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dolor voluptas possimus saepe nam aspernatur deserunt voluptatem hic officiis, quae facilis esse, facere iste expedita magnam fuga! Odit, distinctio ut!',
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      image: './images/furniture_images/bed_images/bed-11.jpg',
      price: 30,
      stars: 2,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dolor voluptas possimus saepe nam aspernatur deserunt voluptatem hic officiis, quae facilis esse, facere iste expedita magnam fuga! Odit, distinctio ut!',
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      image: './images/furniture_images/bed_images/bed-12.jpg',
      price: 30,
      stars: 2,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dolor voluptas possimus saepe nam aspernatur deserunt voluptatem hic officiis, quae facilis esse, facere iste expedita magnam fuga! Odit, distinctio ut!',
    },
    {
      id: 'magic-chair-1',
      name: 'Magic chair 1',
      category: 'chair',
      image: './images/furniture_images/chair_images/chair-1.jpg',
      price: 30,
      stars: 2,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dolor voluptas possimus saepe nam aspernatur deserunt voluptatem hic officiis, quae facilis esse, facere iste expedita magnam fuga! Odit, distinctio ut!',
    },
    {
      id: 'magic-chair-2',
      name: 'Magic chair 2',
      category: 'chair',
      image: './images/furniture_images/chair_images/chair-2.jpg',
      price: 40,
      stars: 5,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dolor voluptas possimus saepe nam aspernatur deserunt voluptatem hic officiis, quae facilis esse, facere iste expedita magnam fuga! Odit, distinctio ut!',
    },
    {
      id: 'magic-chair-3',
      name: 'Magic chair 3',
      category: 'chair',
      image: './images/furniture_images/chair_images/chair-3.jpg',
      price: 33,
      stars: 3,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dolor voluptas possimus saepe nam aspernatur deserunt voluptatem hic officiis, quae facilis esse, facere iste expedita magnam fuga! Odit, distinctio ut!',
    },
    {
      id: 'magic-chair-4',
      name: 'Magic chair 4',
      category: 'chair',
      image: './images/furniture_images/chair_images/chair-4.jpg',
      price: 35,
      stars: 4,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dolor voluptas possimus saepe nam aspernatur deserunt voluptatem hic officiis, quae facilis esse, facere iste expedita magnam fuga! Odit, distinctio ut!',
    },
    {
      id: 'magic-chair-5',
      name: 'Magic chair 5',
      category: 'chair',
      image: './images/furniture_images/chair_images/chair-5.jpg',
      price: 35,
      stars: 3,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dolor voluptas possimus saepe nam aspernatur deserunt voluptatem hic officiis, quae facilis esse, facere iste expedita magnam fuga! Odit, distinctio ut!',
    },
    {
      id: 'magic-chair-6',
      name: 'Magic chair 6',
      category: 'chair',
      image: './images/furniture_images/chair_images/chair-6.jpg',
      price: 25,
      stars: 1,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dolor voluptas possimus saepe nam aspernatur deserunt voluptatem hic officiis, quae facilis esse, facere iste expedita magnam fuga! Odit, distinctio ut!',
    },
    {
      id: 'comfy-sofa-1',
      name: 'Comfy Sofa 1',
      category: 'sofa',
      image: './images/furniture_images/sofa_images/sofa-1.jpg',
      price: 30,
      stars: 2,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dolor voluptas possimus saepe nam aspernatur deserunt voluptatem hic officiis, quae facilis esse, facere iste expedita magnam fuga! Odit, distinctio ut!',
    },
    {
      id: 'comfy-sofa-2',
      name: 'Comfy Sofa 2',
      category: 'sofa',
      image: './images/furniture_images/sofa_images/sofa-2.jpg',
      price: 40,
      stars: 5,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dolor voluptas possimus saepe nam aspernatur deserunt voluptatem hic officiis, quae facilis esse, facere iste expedita magnam fuga! Odit, distinctio ut!',
    },
    {
      id: 'comfy-sofa-3',
      name: 'Comfy Sofa 3',
      category: 'sofa',
      image: './images/furniture_images/sofa_images/sofa-3.jpg',
      price: 34,
      stars: 3,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dolor voluptas possimus saepe nam aspernatur deserunt voluptatem hic officiis, quae facilis esse, facere iste expedita magnam fuga! Odit, distinctio ut!',
    },
    {
      id: 'comfy-sofa-4',
      name: 'Comfy Sofa 4',
      category: 'sofa',
      image: './images/furniture_images/sofa_images/sofa-4.jpg',
      price: 35,
      stars: 4,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dolor voluptas possimus saepe nam aspernatur deserunt voluptatem hic officiis, quae facilis esse, facere iste expedita magnam fuga! Odit, distinctio ut!',
    },
    {
      id: 'comfy-sofa-5',
      name: 'Comfy Sofa 5',
      category: 'sofa',
      image: './images/furniture_images/sofa_images/sofa-5.jpg',
      price: 35,
      stars: 3,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dolor voluptas possimus saepe nam aspernatur deserunt voluptatem hic officiis, quae facilis esse, facere iste expedita magnam fuga! Odit, distinctio ut!',
    },
    {
      id: 'comfy-sofa-6',
      name: 'Comfy Sofa 6',
      category: 'sofa',
      image: './images/furniture_images/sofa_images/sofa-6.jpg',
      price: 25,
      stars: 1,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dolor voluptas possimus saepe nam aspernatur deserunt voluptatem hic officiis, quae facilis esse, facere iste expedita magnam fuga! Odit, distinctio ut!',
    },
    {
      id: 'comfy-sofa-7',
      name: 'Comfy Sofa 7',
      category: 'sofa',
      image: './images/furniture_images/sofa_images/sofa-7.jpg',
      price: 25,
      stars: 5,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dolor voluptas possimus saepe nam aspernatur deserunt voluptatem hic officiis, quae facilis esse, facere iste expedita magnam fuga! Odit, distinctio ut!',
    },
    {
      id: 'stable-table-1',
      name: 'Stable Table 1',
      category: 'table',
      image: './images/furniture_images/table_images/table-1.jpg',
      price: 35,
      stars: 3,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dolor voluptas possimus saepe nam aspernatur deserunt voluptatem hic officiis, quae facilis esse, facere iste expedita magnam fuga! Odit, distinctio ut!',
    },
    {
      id: 'stable-table-2',
      name: 'Stable Table 2',
      category: 'table',
      image: './images/furniture_images/table_images/table-2.jpg',
      price: 25,
      stars: 1,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dolor voluptas possimus saepe nam aspernatur deserunt voluptatem hic officiis, quae facilis esse, facere iste expedita magnam fuga! Odit, distinctio ut!',
    },
    {
      id: 'stable-table-3',
      name: 'Stable Table 3',
      category: 'table',
      image: './images/furniture_images/table_images/table-3.jpg',
      price: 25,
      stars: 5,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dolor voluptas possimus saepe nam aspernatur deserunt voluptatem hic officiis, quae facilis esse, facere iste expedita magnam fuga! Odit, distinctio ut!',
    },
    {
      id: 'home-dining-1',
      name: 'Home Dining 1',
      category: 'dining',
      image: './images/furniture_images/dining_images/dining-1.jpg',
      price: 35,
      stars: 3,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dolor voluptas possimus saepe nam aspernatur deserunt voluptatem hic officiis, quae facilis esse, facere iste expedita magnam fuga! Odit, distinctio ut!',
    },
    {
      id: 'home-dining-2',
      name: 'Home Dining 2',
      category: 'dining',
      image: './images/furniture_images/dining_images/dining-2.jpg',
      price: 25,
      stars: 1,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dolor voluptas possimus saepe nam aspernatur deserunt voluptatem hic officiis, quae facilis esse, facere iste expedita magnam fuga! Odit, distinctio ut!',
    },
    {
      id: 'home-dining-3',
      name: 'Home Dining 3',
      category: 'dining',
      image: './images/furniture_images/dining_images/dining-3.jpg',
      price: 25,
      stars: 5,
      userRating: false,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dolor voluptas possimus saepe nam aspernatur deserunt voluptatem hic officiis, quae facilis esse, facere iste expedita magnam fuga! Odit, distinctio ut!',
    },
  ],
  cart: {
    products: [],
  },
  hotDealsProduct: {
    id: 'aenean-ru-bristique-10',
    name: 'Aenean Ru Bristique 10',
    category: 'bed',
    image: './images/furniture_images/bed_images/bed-10.jpg',
    oldPrice: 50,
    price: 30,
    stars: 2,
    promo: 'sale',
    newFurniture: true,
    isFavorite: false,
    isCompare: false,
  },
  promotedProduct: {
    image: './images/furniture_images/bed_images/bed-1.jpg',
    imageName: 'bedroom-bad',
    softTitle: 'indoor',
    strongTitle: 'furniture',
    description: 'save up 50% of all furniture',
  },
  viewport: {
    mode: '',
  },
  promotion: {
    firstImage: './images/promotion_images/first-image.jpg',
    firstAltName: 'sofa',
    firstTitle: 'GUEST ROOM',
    firstTitleStrong: 'SOFA',
    firstDiscountBox: '-20%',
    secondImage: './images/promotion_images/second-image.jpg',
    secondAltName: 'chair',
    secondTitleStrong: 'OFFICE',
    secondTitle: 'CHAIR',
    secondSubtitle: 'COLLECTION',
    secondPrice: '$200.00',
    thirdImage: './images/promotion_images/third-image.jpg',
    thirdAltName: 'couch',
    thirdTitleStrong: 'SPECIAL',
    thirdTitle: 'COLLECTION',
    thirdSubtitle: 'SAVE UP 45% OF FURNITURE',
  },
  brands: [
    { id: 2, image: './images/brands_logos/image_Siedzonko.jpg' },
    { id: 1, image: './images/brands_logos/image_Mebelek.jpg' },
    { id: 3, image: './images/brands_logos/image_TARTAK.jpg' },
    { id: 4, image: './images/brands_logos/image_Mebelek.jpg' },
    { id: 5, image: './images/brands_logos/image_Siedzonko.jpg' },
    { id: 6, image: './images/brands_logos/image_TARTAK.jpg' },
  ],
};

export default initialState;
