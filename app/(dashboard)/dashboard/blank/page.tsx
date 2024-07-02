import BreadCrumb from '@/components/breadcrumb';
import { buttonVariants } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import Link from 'next/link';

export default function BlankPage() {
  return (
    <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
      <BreadCrumb
        items={[
          { title: 'Dashboard', link: '/dashboard' },
          { title: 'Blank', link: '/dashboard/blank' }
        ]}
      />
      <div className="flex items-start justify-between">
        <Heading
          title="Pagina en blanco"
          description="Esta es una pagina en blanco para que puedas empezar a trabajar en tu proyecto."
        />

        <Link
          href={'/dashboard/employee/new'}
          className={cn(buttonVariants({ variant: 'default' }))}
        >
          <Plus className="mr-2 h-4 w-4" /> Boton de prueba
        </Link>
      </div>
    </div>
  );
}
