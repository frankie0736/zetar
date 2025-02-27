'use client';

import * as React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { NavigationMenuLink } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { type MegaMenuSectionProps } from './types';
import { type DropdownItem } from '@/constants/nav-link';

export function MegaMenuSection({ item, className }: MegaMenuSectionProps) {
  const [hoveredItemIndex, setHoveredItemIndex] = React.useState<number | null>(
    null,
  );
  const hasChildren = item.dropdownItems && item.dropdownItems.length > 0;
  const hoverTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (index: number, hasSubItems: boolean) => {
    if (!hasSubItems) return;

    // Clear any existing timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    // Set a small delay before showing the submenu to prevent accidental triggers
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredItemIndex(index);
    }, 50);
  };

  const handleMouseLeave = () => {
    // Clear any existing timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    // Set a small delay before hiding the submenu to prevent flickering
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredItemIndex(null);
    }, 100);
  };

  // Clean up timeout on unmount
  React.useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className={cn(
        'hover:bg-muted/50 rounded-md p-0 transition-colors',
        className,
      )}
    >
      <div className="w-full">
        <NavigationMenuLink asChild>
          <Link
            href={item.href}
            className="hover:text-primary flex w-full items-start gap-3 p-3 text-base font-medium transition-colors"
          >
            {item.icon && (
              <div className="bg-muted flex h-9 w-9 shrink-0 items-center justify-center rounded-md">
                <item.icon className="h-5 w-5" />
              </div>
            )}
            <div className="min-w-0 flex-1">
              <span className="text-sm leading-none font-medium">
                {item.title}
              </span>
              {item.description && (
                <p className="text-muted-foreground mt-1 line-clamp-2 text-xs">
                  {item.description}
                </p>
              )}
            </div>
          </Link>
        </NavigationMenuLink>
      </div>

      {hasChildren && (
        <ul className="space-y-2 p-3 pt-0">
          {item.dropdownItems?.map((child: DropdownItem, childIndex) => {
            const hasSubItems = Boolean(
              child.dropdownItems && child.dropdownItems.length > 0,
            );

            return (
              <li
                key={childIndex}
                className="group relative text-sm"
                onMouseEnter={() => handleMouseEnter(childIndex, hasSubItems)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="w-full">
                  <NavigationMenuLink asChild>
                    <Link
                      href={child.href}
                      className="hover:text-primary hover:bg-muted/50 flex w-full items-center justify-between gap-1 rounded-sm px-2 py-1.5 transition-colors"
                    >
                      <div className="flex items-center gap-1.5">
                        {child.icon && (
                          <child.icon className="text-muted-foreground h-3.5 w-3.5" />
                        )}
                        <span>{child.title}</span>
                      </div>
                      {hasSubItems && (
                        <ChevronRight className="text-muted-foreground h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      )}
                    </Link>
                  </NavigationMenuLink>

                  {hasSubItems &&
                    hoveredItemIndex === childIndex &&
                    child.dropdownItems && (
                      <div
                        className="bg-popover animate-in fade-in-0 zoom-in-95 absolute top-0 left-full z-10 ml-1 w-56 rounded-md border p-2 shadow-md"
                        style={{ marginTop: '-4px' }}
                      >
                        <div className="mb-1 border-b pb-1 text-xs font-medium">
                          {child.title}
                        </div>
                        <ul className="space-y-1">
                          {child.dropdownItems.map(
                            (subChild: DropdownItem, subChildIndex) => (
                              <li key={subChildIndex} className="text-sm">
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={subChild.href}
                                    className="hover:text-primary hover:bg-muted/50 flex w-full items-center gap-1 rounded-sm px-1 py-1 transition-colors"
                                  >
                                    {subChild.icon && (
                                      <subChild.icon className="text-muted-foreground h-3.5 w-3.5" />
                                    )}
                                    <span>{subChild.title}</span>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                    )}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
