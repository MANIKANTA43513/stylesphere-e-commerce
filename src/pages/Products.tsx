import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { Filters } from '@/components/Filters';
import { Button } from '@/components/ui/button';

const ITEMS_PER_PAGE = 10;

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [category, setCategory] = useState(searchParams.get('category') || '');
  const [selectedSize, setSelectedSize] = useState(searchParams.get('size') || '');
  const [minPrice, setMinPrice] = useState(searchParams.get('minPrice') || '');
  const [maxPrice, setMaxPrice] = useState(searchParams.get('maxPrice') || '');
  const [page, setPage] = useState(Number(searchParams.get('page')) || 1);

  // Sync URL params with state
  useEffect(() => {
    const params = new URLSearchParams();
    if (search) params.set('search', search);
    if (category) params.set('category', category);
    if (selectedSize) params.set('size', selectedSize);
    if (minPrice) params.set('minPrice', minPrice);
    if (maxPrice) params.set('maxPrice', maxPrice);
    if (page > 1) params.set('page', page.toString());
    setSearchParams(params, { replace: true });
  }, [search, category, selectedSize, minPrice, maxPrice, page, setSearchParams]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Search filter
      if (search) {
        const searchLower = search.toLowerCase();
        if (
          !product.name.toLowerCase().includes(searchLower) &&
          !product.description.toLowerCase().includes(searchLower)
        ) {
          return false;
        }
      }

      // Category filter
      if (category && product.category !== category) {
        return false;
      }

      // Size filter
      if (selectedSize && !product.sizes.includes(selectedSize)) {
        return false;
      }

      // Price filters
      if (minPrice && product.price < Number(minPrice)) {
        return false;
      }
      if (maxPrice && product.price > Number(maxPrice)) {
        return false;
      }

      return true;
    });
  }, [search, category, selectedSize, minPrice, maxPrice]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const clearFilters = () => {
    setSearch('');
    setCategory('');
    setSelectedSize('');
    setMinPrice('');
    setMaxPrice('');
    setPage(1);
  };

  const hasActiveFilters = !!(search || category || selectedSize || minPrice || maxPrice);

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-display text-3xl font-bold">
          {category || 'All Products'}
        </h1>
        <Button
          variant="outline"
          className="md:hidden"
          onClick={() => setShowMobileFilters(true)}
        >
          <SlidersHorizontal className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>

      <div className="flex gap-8">
        {/* Desktop Filters */}
        <aside className="hidden md:block w-64 flex-shrink-0">
          <Filters
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            minPrice={minPrice}
            setMinPrice={setMinPrice}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            clearFilters={clearFilters}
            hasActiveFilters={hasActiveFilters}
          />
        </aside>

        {/* Mobile Filters */}
        {showMobileFilters && (
          <div className="fixed inset-0 z-50 md:hidden">
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setShowMobileFilters(false)} />
            <div className="absolute right-0 top-0 h-full w-80 bg-background p-4 shadow-lg animate-slide-in">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold">Filters</h2>
                <Button variant="ghost" size="icon" onClick={() => setShowMobileFilters(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <Filters
                search={search}
                setSearch={setSearch}
                category={category}
                setCategory={setCategory}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
                minPrice={minPrice}
                setMinPrice={setMinPrice}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
                clearFilters={clearFilters}
                hasActiveFilters={hasActiveFilters}
              />
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="flex-1">
          <p className="text-sm text-muted-foreground mb-6">
            {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
          </p>

          {paginatedProducts.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {paginatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No products found matching your criteria.</p>
              <Button variant="outline" className="mt-4" onClick={clearFilters}>
                Clear Filters
              </Button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <Button
                variant="outline"
                disabled={page === 1}
                onClick={() => setPage(p => p - 1)}
              >
                Previous
              </Button>
              <span className="px-4 text-sm">
                Page {page} of {totalPages}
              </span>
              <Button
                variant="outline"
                disabled={page === totalPages}
                onClick={() => setPage(p => p + 1)}
              >
                Next
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
