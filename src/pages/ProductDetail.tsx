import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Check } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container py-16 text-center">
        <p className="text-muted-foreground">Product not found</p>
        <Button variant="outline" className="mt-4" onClick={() => navigate('/products')}>
          Back to Products
        </Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: 'Please select a size',
        variant: 'destructive'
      });
      return;
    }

    addToCart(product, selectedSize, quantity);
    toast({
      title: 'Added to cart',
      description: `${product.name} (${selectedSize}) x${quantity}`,
    });
  };

  return (
    <div className="container py-8">
      <Button
        variant="ghost"
        className="mb-6"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back
      </Button>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Image */}
        <div className="aspect-[3/4] rounded-lg overflow-hidden bg-secondary">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
            {product.category}
          </p>
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
            {product.name}
          </h1>
          <p className="text-2xl font-semibold mb-6">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-muted-foreground mb-8">
            {product.description}
          </p>

          {/* Size Selection */}
          <div className="mb-6">
            <label className="text-sm font-medium mb-3 block">Select Size</label>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`min-w-[3rem] px-4 py-2 text-sm rounded border transition-colors ${
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

          {/* Quantity */}
          <div className="mb-8">
            <label className="text-sm font-medium mb-3 block">Quantity</label>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
              >
                -
              </Button>
              <span className="w-12 text-center font-medium">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(q => q + 1)}
              >
                +
              </Button>
            </div>
          </div>

          {/* Add to Cart */}
          <Button size="lg" onClick={handleAddToCart} className="w-full md:w-auto">
            <ShoppingBag className="h-5 w-5 mr-2" />
            Add to Cart
          </Button>

          {/* Stock Info */}
          <p className="text-sm text-muted-foreground mt-4 flex items-center gap-2">
            <Check className="h-4 w-4 text-green-600" />
            {product.stock > 10 ? 'In Stock' : `Only ${product.stock} left`}
          </p>
        </div>
      </div>
    </div>
  );
}
