import BreadCrumb from '@/components/breadcrumb';
import { buttonVariants } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import Link from 'next/link';

import { Payment, columns } from './columns';
import { DataTable } from './data-table';

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com'
    }
  ];
}

export default async function Productos() {
  const data = await getData();
  return (
    <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
      <BreadCrumb
        items={[
          { title: 'Dashboard', link: '/dashboard' },
          { title: 'Productos', link: '/dashboard/productos' }
        ]}
      />
      <div className="flex items-start justify-between">
        <Heading
          title="Productos"
          description="Productos disponibles en la tienda."
        />

        <Link
          href={'/dashboard/productos/create'}
          className={cn(buttonVariants({ variant: 'default' }))}
        >
          <Plus className="mr-2 h-4 w-4" /> Agregar producto
        </Link>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
