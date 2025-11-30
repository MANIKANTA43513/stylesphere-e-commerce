import { Link } from 'react-router-dom';
import { ShoppingBag, User, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const { totalItems } = useCart();
  const { isAuthenticated, user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="font-display text-2xl font-bold tracking-tight">
          CLOTHIFY
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/products" className="text-sm font-medium hover:text-accent transition-colors">
            Shop All
          </Link>
          <Link to="/products?category=Men" className="text-sm font-medium hover:text-accent transition-colors">
            Men
          </Link>
          <Link to="/products?category=Women" className="text-sm font-medium hover:text-accent transition-colors">
            Women
          </Link>
          <Link to="/products?category=Kids" className="text-sm font-medium hover:text-accent transition-colors">
            Kids
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <div className="hidden md:flex items-center gap-3">
              <span className="text-sm text-muted-foreground">Hi, {user?.name}</span>
              <Button variant="ghost" size="sm" onClick={logout}>
                Logout
              </Button>
            </div>
          ) : (
            <Link to="/login" className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors">
              <User className="h-5 w-5" />
              Login
            </Link>
          )}

          <Link to="/cart" className="relative p-2 hover:bg-secondary rounded-full transition-colors">
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link to="/products" className="py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>
              Shop All
            </Link>
            <Link to="/products?category=Men" className="py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>
              Men
            </Link>
            <Link to="/products?category=Women" className="py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>
              Women
            </Link>
            <Link to="/products?category=Kids" className="py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>
              Kids
            </Link>
            {isAuthenticated ? (
              <Button variant="outline" onClick={() => { logout(); setMobileMenuOpen(false); }}>
                Logout
              </Button>
            ) : (
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full">Login</Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
