import { Card } from '../ui/card';
import { Input } from '../ui/input';

export default function ProductCard({ product }: { product: any }) {
  return (
    <Card className="flex items-center justify-between rounded-lg p-4 shadow-sm">
      <div className="flex items-center">
        <div>
          <h3 className="text-md font-medium">{product.name}</h3>
          <p className="text-sm text-muted-foreground">
            ${product.price.toFixed(2)} / {product.unit}
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Input
            type="number"
            defaultValue={product.quantity}
            className="no-arrows w-24 rounded-md border p-2 pr-8 text-left"
          />
          <span className="absolute right-2 top-1/2 -translate-y-1/2 transform text-muted-foreground">
            {product.unit}
          </span>
        </div>

        <span className="text-md font-medium">
          ${(product.price * product.quantity).toFixed(2)}
        </span>
      </div>
    </Card>
  );
}
