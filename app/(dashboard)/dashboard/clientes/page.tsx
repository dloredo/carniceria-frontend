import BreadCrumb from '@/components/breadcrumb';
import { buttonVariants } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { cn } from '@/lib/utils';
import { DollarSign, Plus, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
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

export default async function ComprasGastosPage() {
  const data = await getData();

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <BreadCrumb
        items={[
          { title: 'Dashboard', link: '/dashboard' },
          { title: 'Clientes', link: '/dashboard/clientes' }
        ]}
      />
      <div className="flex items-start justify-between">
        <Heading title="Clientes" description="Administra tus clientes aquí." />
        <Link href="/" className={cn(buttonVariants({ variant: 'default' }))}>
          Nuevo cliente
          <Plus className="ml-2 h-4 w-4" />
        </Link>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
