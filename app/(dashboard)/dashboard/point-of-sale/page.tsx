import ProductSearch from '@/components/point-of-sale/ProductSearch';
import SalesCart from '@/components/point-of-sale/SalesCard';

export default function POS() {
  return (
    <div className="flex h-full">
      <div className="w-3/5 p-4">
        <ProductSearch />
      </div>
      <div className="flex-1 p-4">
        <SalesCart />
      </div>
    </div>
  );
}
