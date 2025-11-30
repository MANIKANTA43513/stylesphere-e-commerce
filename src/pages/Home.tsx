import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';

export default function Home() {
  const featuredProducts = products.slice(0, 8);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-secondary overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600)' }}
        />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            New Season Arrivals
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Discover the latest trends in fashion. Quality clothing for everyone.
          </p>
          <Link to="/products">
            <Button size="lg" className="px-8">
              Shop Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 container">
        <h2 className="font-display text-3xl font-bold text-center mb-12">Shop by Category</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {['Men', 'Women', 'Kids'].map((category) => (
            <Link
              key={category}
              to={`/products?category=${category}`}
              className="group relative h-64 rounded-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary/80" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-3xl font-bold text-primary-foreground group-hover:scale-110 transition-transform">
                  {category}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-secondary/50">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-display text-3xl font-bold">Featured Products</h2>
            <Link to="/products" className="text-sm font-medium hover:text-accent transition-colors flex items-center gap-1">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container text-center">
          <p className="font-display text-2xl font-bold mb-4">CLOTHIFY</p>
          <p className="text-muted-foreground text-sm">
            © 2024 Clothify. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
