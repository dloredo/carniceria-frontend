import ProductSearch from '@/components/point-of-sale/ProductSearch';
import SalesCart from '@/components/point-of-sale/SalesCard';

export default function POS() {
  return (
    <div className="flex h-full flex-col lg:flex-row">
      <div className="w-full p-4 lg:w-3/5">
        <ProductSearch />
      </div>
      <div className="w-full p-4 lg:flex-1">
        <SalesCart />
      </div>
    </div>
  );
}
