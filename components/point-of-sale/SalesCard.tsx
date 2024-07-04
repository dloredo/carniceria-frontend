import { Trash2 } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '../ui/card';
import Image from 'next/image';
import { Input } from '../ui/input';
import ProductCard from './ProductCard';

export default function SalesCart() {
  const products = [
    {
      id: 1,
      name: 'Filete de res',
      price: 110.0,
      quantity: 0.123,
      unit: 'kg'
    },
    {
      id: 2,
      name: 'Costilla de cerdo',
      price: 85.5,
      quantity: 0.246,
      unit: 'pz'
    },
    {
      id: 3,
      name: 'Chuleta de cordero',
      price: 120.75,
      quantity: 0.369,
      unit: 'kg'
    },
    {
      id: 4,
      name: 'Salchicha casera',
      price: 75.25,
      quantity: 0.492,
      unit: 'pz'
    },
    {
      id: 5,
      name: 'Cecina de venado',
      price: 150.0,
      quantity: 0.615,
      unit: 'kg'
    },
    {
      id: 6,
      name: 'Morcilla de cerdo',
      price: 80.0,
      quantity: 0.738,
      unit: 'pz'
    },
    {
      id: 7,
      name: 'Ternera en trozos',
      price: 125.5,
      quantity: 0.861,
      unit: 'kg'
    },
    {
      id: 8,
      name: 'Jamón serrano',
      price: 95.25,
      quantity: 0.984,
      unit: 'pz'
    },
    {
      id: 9,
      name: 'Corte de ribeye',
      price: 135.0,
      quantity: 1.107,
      unit: 'kg'
    },
    {
      id: 10,
      name: 'Salami italiano',
      price: 88.75,
      quantity: 1.23,
      unit: 'pz'
    }
  ];

  const defaultImage = '/images/default.jpg';

  const subtotal = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Venta</h2>
          <Button variant="outline" className="text-sm">
            <Trash2 size={16} className="mr-2" />
            Borrar todo
          </Button>
        </div>
      </CardHeader>

      <CardContent className="flex-1 overflow-y-auto">
        {products.length > 0 ? (
          <div className="space-y-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center text-center text-gray-500">
            <p>Tu carrito está vacío</p>
            <p>Agrega productos a tu venta</p>
            <div className="mt-4">
              <Button variant="outline" className="mr-2">
                Buscar productos
              </Button>
              <Button variant="outline">¡Escanea tus productos!</Button>
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex flex-col space-y-4 border-t p-4">
        <div className="flex w-full justify-end space-x-2 text-lg font-bold">
          <span>Subtotal </span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <Button className="w-full ">Cobrar ${subtotal.toFixed(2)}</Button>
      </CardFooter>
    </Card>
  );
}
