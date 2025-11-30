import { useParams, Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface OrderItem {
  name: string;
  size: string;
  quantity: number;
  price: number;
}

interface Order {
  id: string;
  items: OrderItem[];
  total: number;
  customer: {
    email: string;
    name: string;
  };
  date: string;
}

export default function OrderSuccess() {
  const { orderId } = useParams();
  
  // Get order from localStorage (will be replaced with database)
  const orders: Order[] = JSON.parse(localStorage.getItem('orders') || '[]');
  const order = orders.find(o => o.id === orderId);

  if (!order) {
    return (
      <div className="container py-16 text-center">
        <p className="text-muted-foreground">Order not found</p>
        <Link to="/">
          <Button className="mt-4">Go Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-16 max-w-2xl">
      <div className="text-center mb-8">
        <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
        <h1 className="font-display text-3xl font-bold mb-2">Order Confirmed!</h1>
        <p className="text-muted-foreground">
          Thank you for your purchase, {order.customer.name}
        </p>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex justify-between items-start mb-6 pb-6 border-b border-border">
          <div>
            <p className="text-sm text-muted-foreground">Order ID</p>
            <p className="font-mono font-semibold">{order.id}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Order Date</p>
            <p className="font-medium">{new Date(order.date).toLocaleDateString()}</p>
          </div>
        </div>

        <h2 className="font-semibold mb-4">Order Items</h2>
        <div className="space-y-3 mb-6">
          {order.items.map((item, index) => (
            <div key={index} className="flex justify-between text-sm">
              <span>
                {item.name} ({item.size}) x{item.quantity}
              </span>
              <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-4 flex justify-between font-semibold">
          <span>Total</span>
          <span>${order.total.toFixed(2)}</span>
        </div>

        <p className="text-sm text-muted-foreground mt-6 text-center">
          A confirmation email will be sent to {order.customer.email}
        </p>
      </div>

      <div className="flex gap-4 justify-center mt-8">
        <Link to="/products">
          <Button variant="outline">Continue Shopping</Button>
        </Link>
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    </div>
  );
}
