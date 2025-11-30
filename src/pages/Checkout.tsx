import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';

export default function Checkout() {
  const { items, totalPrice, clearCart } = useCart();
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    email: user?.email || '',
    name: user?.name || '',
    address: '',
    city: '',
    zipCode: '',
  });

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.name || !formData.address || !formData.city || !formData.zipCode) {
      toast({ title: 'Please fill all fields', variant: 'destructive' });
      return;
    }

    setLoading(true);
    
    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Generate order ID
    const orderId = `ORD-${Date.now()}`;
    
    // Store order in localStorage (will be replaced with database)
    const order = {
      id: orderId,
      items: items.map(item => ({
        name: item.product.name,
        size: item.size,
        quantity: item.quantity,
        price: item.product.price
      })),
      total: totalPrice,
      customer: formData,
      date: new Date().toISOString(),
      status: 'confirmed'
    };
    
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    clearCart();
    toast({ title: 'Order placed successfully!' });
    navigate(`/order/${orderId}`);
    
    setLoading(false);
  };

  return (
    <div className="container py-8 max-w-4xl">
      <h1 className="font-display text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Form */}
        <div>
          <h2 className="font-semibold mb-4">Shipping Information</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Email</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Full Name</label>
              <Input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Address</label>
              <Input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                placeholder="123 Main St"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">City</label>
                <Input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                  placeholder="New York"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">ZIP Code</label>
                <Input
                  type="text"
                  value={formData.zipCode}
                  onChange={(e) => setFormData(prev => ({ ...prev, zipCode: e.target.value }))}
                  placeholder="10001"
                />
              </div>
            </div>

            <Button type="submit" className="w-full mt-6" size="lg" disabled={loading}>
              {loading ? 'Processing...' : `Place Order - $${totalPrice.toFixed(2)}`}
            </Button>
          </form>

          {!isAuthenticated && (
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Already have an account?{' '}
              <button onClick={() => navigate('/login')} className="text-accent hover:underline">
                Sign in
              </button>
            </p>
          )}
        </div>

        {/* Order Summary */}
        <div>
          <h2 className="font-semibold mb-4">Order Summary</h2>
          <div className="bg-card border border-border rounded-lg p-4">
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {items.map((item) => (
                <div key={`${item.product.id}-${item.size}`} className="flex gap-3">
                  <div className="w-16 h-20 rounded bg-secondary overflow-hidden flex-shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{item.product.name}</p>
                    <p className="text-xs text-muted-foreground">Size: {item.size}</p>
                    <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                    <p className="text-sm font-medium">${(item.product.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-border mt-4 pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-semibold pt-2 border-t border-border">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
