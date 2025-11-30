import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { categories } from '@/data/products';

interface FiltersProps {
  search: string;
  setSearch: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
  selectedSize: string;
  setSelectedSize: (value: string) => void;
  minPrice: string;
  setMinPrice: (value: string) => void;
  maxPrice: string;
  setMaxPrice: (value: string) => void;
  clearFilters: () => void;
  hasActiveFilters: boolean;
}

const filterSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

export function Filters({
  search,
  setSearch,
  category,
  setCategory,
  selectedSize,
  setSelectedSize,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  clearFilters,
  hasActiveFilters
}: FiltersProps) {
  return (
    <div className="space-y-6 p-4 bg-card rounded-lg border border-border">
      {/* Search */}
      <div>
        <label className="text-sm font-medium mb-2 block">Search</label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Category */}
      <div>
        <label className="text-sm font-medium mb-2 block">Category</label>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat === 'All' ? '' : cat)}
              className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${
                (cat === 'All' && !category) || category === cat
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'border-border hover:border-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Size */}
      <div>
        <label className="text-sm font-medium mb-2 block">Size</label>
        <div className="flex flex-wrap gap-2">
          {filterSizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(selectedSize === size ? '' : size)}
              className={`w-10 h-10 text-sm rounded border transition-colors ${
                selectedSize === size
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'border-border hover:border-primary'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <label className="text-sm font-medium mb-2 block">Price Range</label>
        <div className="flex gap-2 items-center">
          <Input
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-24"
          />
          <span className="text-muted-foreground">-</span>
          <Input
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-24"
          />
        </div>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <Button
          variant="outline"
          onClick={clearFilters}
          className="w-full"
        >
          <X className="h-4 w-4 mr-2" />
          Clear Filters
        </Button>
      )}
    </div>
  );
}
