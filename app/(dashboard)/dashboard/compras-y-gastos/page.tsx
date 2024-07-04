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

export default function ComprasGastosPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <BreadCrumb
        items={[
          { title: 'Dashboard', link: '/dashboard' },
          { title: 'Compras y gastos', link: '/dashboard/compras-y-gastos' }
        ]}
      />
      <div className="flex items-start justify-between">
        <Heading
          title="Compras"
          description="Registra tus compras para actualizar el stock de tus productos y tus gastos para llevar un control de tus egresos."
        />
        <DropdownMenu>
          <DropdownMenuTrigger
            className={cn(buttonVariants({ variant: 'default' }))}
          >
            Nueva compra o gasto
            <Plus className="ml-2 h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <Link href="/dashboard/compras-y-gastos">
              <DropdownMenuItem className="flex cursor-pointer items-center space-x-2">
                <DollarSign className="mr-2 h-4 w-4" />
                <div className="flex flex-col">
                  <span>Nuevo Gasto</span>
                  <span className="text-sm text-gray-500">
                    Registra gastos que no modifican tu stock
                  </span>
                </div>
              </DropdownMenuItem>
            </Link>
            <Link href="/dashboard/compras-y-gastos">
              <DropdownMenuItem className="flex cursor-pointer items-center space-x-2">
                <ShoppingBag className="mr-2 h-4 w-4" />
                <div className="flex flex-col">
                  <span>Nueva Compra</span>
                  <span className="text-sm text-gray-500">
                    Registra tus compras para actualizar el stock de tus
                    productos
                  </span>
                </div>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
