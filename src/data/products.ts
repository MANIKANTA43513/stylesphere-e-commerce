export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'Men' | 'Women' | 'Kids';
  sizes: string[];
  stock: number;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic White T-Shirt',
    description: 'Essential cotton t-shirt with a relaxed fit. Perfect for everyday wear.',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
    category: 'Men',
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 50
  },
  {
    id: '2',
    name: 'Denim Jacket',
    description: 'Vintage-style denim jacket with brass buttons. A timeless classic.',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500',
    category: 'Men',
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 30
  },
  {
    id: '3',
    name: 'Floral Summer Dress',
    description: 'Light and breezy floral print dress perfect for warm days.',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500',
    category: 'Women',
    sizes: ['XS', 'S', 'M', 'L'],
    stock: 25
  },
  {
    id: '4',
    name: 'Slim Fit Jeans',
    description: 'Modern slim fit jeans in dark indigo wash. Comfortable stretch fabric.',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500',
    category: 'Men',
    sizes: ['28', '30', '32', '34', '36'],
    stock: 45
  },
  {
    id: '5',
    name: 'Cozy Hoodie',
    description: 'Soft fleece hoodie with kangaroo pocket. Stay warm in style.',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500',
    category: 'Men',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 60
  },
  {
    id: '6',
    name: 'Leather Biker Jacket',
    description: 'Premium leather jacket with asymmetric zip. Edgy and sophisticated.',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500',
    category: 'Women',
    sizes: ['XS', 'S', 'M', 'L'],
    stock: 15
  },
  {
    id: '7',
    name: 'Kids Dinosaur T-Shirt',
    description: 'Fun dinosaur print t-shirt for little adventurers.',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=500',
    category: 'Kids',
    sizes: ['3-4Y', '5-6Y', '7-8Y', '9-10Y'],
    stock: 40
  },
  {
    id: '8',
    name: 'Striped Blazer',
    description: 'Tailored blazer with subtle stripes. Perfect for smart casual looks.',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500',
    category: 'Men',
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 20
  },
  {
    id: '9',
    name: 'High-Waist Yoga Pants',
    description: 'Stretchy and comfortable yoga pants with moisture-wicking fabric.',
    price: 44.99,
    image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500',
    category: 'Women',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stock: 55
  },
  {
    id: '10',
    name: 'Kids Rainbow Hoodie',
    description: 'Colorful rainbow stripe hoodie for kids. Soft and cozy.',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=500',
    category: 'Kids',
    sizes: ['3-4Y', '5-6Y', '7-8Y', '9-10Y'],
    stock: 35
  },
  {
    id: '11',
    name: 'Cashmere Sweater',
    description: 'Luxurious cashmere sweater in classic navy. Incredibly soft.',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500',
    category: 'Women',
    sizes: ['XS', 'S', 'M', 'L'],
    stock: 18
  },
  {
    id: '12',
    name: 'Cargo Shorts',
    description: 'Practical cargo shorts with multiple pockets. Perfect for summer.',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500',
    category: 'Men',
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 42
  },
  {
    id: '13',
    name: 'Maxi Skirt',
    description: 'Flowing maxi skirt in bohemian print. Effortlessly elegant.',
    price: 54.99,
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0uj5a?w=500',
    category: 'Women',
    sizes: ['XS', 'S', 'M', 'L'],
    stock: 28
  },
  {
    id: '14',
    name: 'Kids Denim Overalls',
    description: 'Classic denim overalls for kids. Durable and stylish.',
    price: 44.99,
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500',
    category: 'Kids',
    sizes: ['3-4Y', '5-6Y', '7-8Y', '9-10Y'],
    stock: 32
  },
  {
    id: '15',
    name: 'Polo Shirt',
    description: 'Classic polo shirt in premium cotton. Timeless style.',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1625910513413-5fc18a5a7e39?w=500',
    category: 'Men',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 48
  },
  {
    id: '16',
    name: 'Wrap Dress',
    description: 'Flattering wrap dress in solid color. Versatile for any occasion.',
    price: 74.99,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500',
    category: 'Women',
    sizes: ['XS', 'S', 'M', 'L'],
    stock: 22
  },
  {
    id: '17',
    name: 'Winter Puffer Jacket',
    description: 'Warm puffer jacket with hood. Essential for cold days.',
    price: 119.99,
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500',
    category: 'Men',
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 25
  },
  {
    id: '18',
    name: 'Kids Party Dress',
    description: 'Sparkly party dress for special occasions. Makes every girl feel special.',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=500',
    category: 'Kids',
    sizes: ['3-4Y', '5-6Y', '7-8Y', '9-10Y'],
    stock: 20
  },
  {
    id: '19',
    name: 'Linen Shirt',
    description: 'Breathable linen shirt perfect for warm weather. Relaxed fit.',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500',
    category: 'Men',
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 33
  },
  {
    id: '20',
    name: 'Tailored Trousers',
    description: 'Smart tailored trousers for a polished look. Comfortable stretch.',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500',
    category: 'Women',
    sizes: ['XS', 'S', 'M', 'L'],
    stock: 27
  },
  {
    id: '21',
    name: 'Graphic Sweatshirt',
    description: 'Bold graphic print sweatshirt. Express your style.',
    price: 54.99,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500',
    category: 'Men',
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 38
  },
  {
    id: '22',
    name: 'Kids Sports Set',
    description: 'Comfortable sports set for active kids. Includes top and shorts.',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=500',
    category: 'Kids',
    sizes: ['3-4Y', '5-6Y', '7-8Y', '9-10Y'],
    stock: 45
  }
];

export const categories = ['All', 'Men', 'Women', 'Kids'] as const;
export const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36', '3-4Y', '5-6Y', '7-8Y', '9-10Y'] as const;
