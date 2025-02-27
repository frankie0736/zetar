'use client';

import * as React from 'react';
import Link from 'next/link';
import { NavigationMenuLink } from '@/components/ui/navigation-menu';
import { type DropdownItem } from '@/constants/nav-link';
import { cn } from '@/lib/utils';

export interface ResourceMenuProps {
  resourceItems: DropdownItem[];
}

export function ResourceMenu({ resourceItems }: ResourceMenuProps) {
  return (
    <div className="w-[600px] p-6">
      <div className="grid grid-cols-2 gap-8">
        {resourceItems.map((resourceItem, resourceIndex) => {
          const hasChildren =
            resourceItem.dropdownItems && resourceItem.dropdownItems.length > 0;

          return (
            <div
              key={resourceIndex}
              className={cn(
                'space-y-4',
                hasChildren ? 'col-span-2 rounded-lg border p-4' : '',
              )}
            >
              <div className={cn('flex', hasChildren ? 'border-b pb-3' : '')}>
                <NavigationMenuLink asChild>
                  <Link
                    href={resourceItem.href}
                    className="hover:bg-muted/50 group flex w-full items-start gap-4 rounded-md p-2 transition-colors"
                  >
                    {resourceItem.icon && (
                      <div className="bg-muted group-hover:bg-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-md shadow-sm transition-colors">
                        <resourceItem.icon className="group-hover:text-primary h-6 w-6 transition-colors" />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="group-hover:text-primary text-base font-medium transition-colors">
                        {resourceItem.title}
                      </div>
                      {resourceItem.description && (
                        <p className="text-muted-foreground mt-1 line-clamp-2 text-sm">
                          {resourceItem.description}
                        </p>
                      )}
                    </div>
                  </Link>
                </NavigationMenuLink>
              </div>

              {hasChildren && (
                <div className="mt-2">
                  <div className="grid grid-cols-3 gap-3">
                    {resourceItem.dropdownItems?.map((subItem, subIndex) => (
                      <NavigationMenuLink key={subIndex} asChild>
                        <Link
                          href={subItem.href}
                          className="hover:text-primary hover:bg-muted/60 group flex items-center gap-2 rounded-md p-2 text-sm transition-colors"
                        >
                          {subItem.icon ? (
                            <subItem.icon className="text-muted-foreground group-hover:text-primary h-4 w-4 transition-colors" />
                          ) : (
                            <div className="bg-muted h-1.5 w-1.5 rounded-full" />
                          )}
                          <span>{subItem.title}</span>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
