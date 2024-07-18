import { Button } from '../ui/button';
import { Card, CardHeader, CardContent } from '../ui/card';
import { Input } from '../ui/input';

export default function ProductSearch() {
  return (
    <div className="flex h-full flex-col">
      <Card className="mb-4 flex-1">
        <CardHeader>
          <h2 className="text-lg font-semibold">Buscar productos</h2>
        </CardHeader>
        <CardContent>
          <Input placeholder="Buscar por nombre, categoría, SKU o código de barras" />
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Button variant="outline">Crear producto</Button>
        <Button variant="outline">Añadir descuento</Button>
        <Button variant="outline">Entrada manual</Button>
        <Button variant="outline">Añadir cliente</Button>
      </div>
    </div>
  );
}
