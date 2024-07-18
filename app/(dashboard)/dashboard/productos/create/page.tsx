'use client';

import React, { useState } from 'react';
import BreadCrumb from '@/components/breadcrumb';
import { buttonVariants } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

const formSchema = z.object({
  nombre: z.string().nonempty({ message: 'El nombre es requerido' }),
  categoria: z.string().optional(),
  codigo_barras: z.string().optional(),
  sku: z.string().optional(),
  foto: z.string().optional(),
  descripcion: z.string().optional(),
  unidad: z.string().nonempty({ message: 'La unidad es requerida' }),
  cantidad: z
    .number()
    .min(0, { message: 'La cantidad debe ser mayor o igual a 0' }),
  cantidad_minima: z
    .number()
    .min(0, { message: 'La cantidad mínima debe ser mayor o igual a 0' }),
  precio_compra: z.number().min(0, { message: 'El precio debe ser mayor a 0' })
});

export default function CreateProduct() {
  const [unit, setUnit] = useState('kilogramos'); // Estado para manejar la unidad seleccionada
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: '',
      categoria: '',
      codigo_barras: '',
      sku: '',
      foto: '',
      descripcion: '',
      unidad: 'kilogramos',
      cantidad: 0,
      cantidad_minima: 0,
      precio_compra: 0
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <BreadCrumb
          items={[
            { title: 'Dashboard', link: '/dashboard' },
            { title: 'Productos', link: '/dashboard/productos' },
            { title: 'Crear producto', link: '/dashboard/productos/create' }
          ]}
        />
        <div className="flex items-start justify-between">
          <Heading
            title="Agregar producto"
            description="Agrega un nuevo producto a la tienda."
          />
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Datos del producto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <FormField
                    name="nombre"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre del producto</FormLabel>
                        <FormControl>
                          <Input placeholder="Ej: Carne de cerdo" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="categoria"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Categoría</FormLabel>
                        <FormControl>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Opcional" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="">Sin categoria</SelectItem>
                              <SelectItem value="res">Res</SelectItem>
                              <SelectItem value="cerdo">Cerdo</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <FormField
                      name="codigo_barras"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Código de barras</FormLabel>
                          <FormControl>
                            <Input placeholder="Opcional" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      name="sku"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>SKU</FormLabel>
                          <FormControl>
                            <Input placeholder="Opcional" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Información adicional
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <FormField
                    name="foto"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Imagen del producto</FormLabel>
                        <FormControl>
                          <Input type="file" {...field} />
                        </FormControl>
                        <FormDescription>La imagen es opcional</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="descripcion"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Descripción</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={4}
                            placeholder="Descripción del producto"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Unidades</CardTitle>
              </CardHeader>
              <CardContent>
                <FormField
                  name="unidad"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Unidad de venta</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={(value) => {
                            field.onChange(value);
                            setUnit(value);
                          }}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona una unidad" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="kilogramos">
                              Kilogramos
                            </SelectItem>
                            <SelectItem value="piezas">Piezas</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Existencias</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <FormField
                    name="cantidad"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cantidad</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              className="no-arrows"
                              type={unit === 'kilogramos' ? 'number' : 'number'}
                              step={unit === 'kilogramos' ? '0.01' : '1'}
                              pattern={unit === 'piezas' ? '[0-9]*' : undefined}
                              placeholder="100"
                              {...field}
                            />
                            <span className="absolute right-2 top-1/2 -translate-y-1/2 transform text-muted-foreground">
                              {unit === 'kilogramos' ? 'kg' : 'pz'}
                            </span>
                          </div>
                        </FormControl>
                        <FormDescription>
                          Cantidad de productos en existencia
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="cantidad_minima"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cantidad mínima</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              className="no-arrows"
                              type={unit === 'kilogramos' ? 'number' : 'text'}
                              step={unit === 'kilogramos' ? '0.01' : '1'}
                              pattern={unit === 'piezas' ? '[0-9]*' : undefined}
                              placeholder="20"
                              {...field}
                            />
                            <span className="absolute right-2 top-1/2 -translate-y-1/2 transform text-muted-foreground">
                              {unit === 'kilogramos' ? 'kg' : 'pz'}
                            </span>
                          </div>
                        </FormControl>
                        <FormDescription>
                          Cantidad mínima para notificar
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Precio de compra</CardTitle>
              </CardHeader>
              <CardContent>
                <FormField
                  name="precio_compra"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Precio de compra</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            className="no-arrows w-36"
                            placeholder="99"
                            {...field}
                          />
                          <span className="absolute right-2 top-1/2 -translate-y-1/2 transform text-muted-foreground">
                            {unit === 'kilogramos' ? 'kg' : 'pz'}
                          </span>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
            <Button type="submit">Crear producto</Button>
          </form>
        </Form>
      </div>
    </ScrollArea>
  );
}
