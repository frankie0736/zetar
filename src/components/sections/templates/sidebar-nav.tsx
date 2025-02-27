'use client';

import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useMemo, useState } from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import { navLinks } from '@/constants/nav-link';
import { type DropdownItem, type NavLink } from '@/constants/nav-link';
interface RouteItem {
  title: string;
  href?: string;
  items?: RouteItem[];
}

const MotionLink = motion(Link);
const MotionAccordionContent = motion(AccordionContent);

export function SidebarNav() {
  const pathname = usePathname();

  // Get dynamic route items from navLinks
  const dynamicRoutes = useMemo(() => getServicesRouteItems(navLinks), []);

  const expandedValue = useMemo(
    () => findExpandedValues(dynamicRoutes, pathname)[0],
    [dynamicRoutes, pathname],
  );

  // Track which third-level section should be expanded with parent context
  const [expandedSection, setExpandedSection] = useState<string>(() => {
    let expanded = '';
    dynamicRoutes.forEach((route) => {
      route.items?.forEach((item, itemIndex) => {
        if (
          item.items &&
          item.items.length > 0 &&
          item.items.some(
            (subItem) => subItem.href && pathname.startsWith(subItem.href),
          )
        ) {
          expanded = `${route.title}-${itemIndex}`;
        }
      });
    });
    return expanded;
  });

  const toggleSection = (sectionId: string) => {
    setExpandedSection((prev) => (prev === sectionId ? '' : sectionId));
  };

  // Filter routes into those with children (for accordion) and those without (for direct links)
  const routesWithChildren = dynamicRoutes.filter(
    (route) => route.items && route.items.length > 0,
  );
  const routesWithoutChildren = dynamicRoutes.filter(
    (route) => !route.items || route.items.length === 0,
  );

  return (
    <div className="w-full space-y-2">
      {/* Render direct links for routes without children */}
      {routesWithoutChildren.map((route, index) => (
        <MotionLink
          key={`direct-${index}`}
          href={route.href ?? '#'}
          className={cn(
            'hover:bg-muted/50 flex items-center gap-2 rounded-md px-4 py-3 text-sm font-medium transition-colors',
            pathname.startsWith(route.href ?? '') && 'bg-muted/50 text-primary',
          )}
          initial="initial"
          animate="animate"
          whileHover="hover"
          variants={linkVariants}
          transition={{ duration: 0.2 }}
        >
          <span className="h-4 w-4" />
          {route.title}
        </MotionLink>
      ))}

      {/* Render accordion for routes with children */}
      {routesWithChildren.length > 0 && (
        <Accordion
          type="single"
          defaultValue={expandedValue}
          collapsible
          className="w-full space-y-1 border-0"
        >
          {renderRouteItems(
            routesWithChildren,
            pathname,
            expandedSection,
            toggleSection,
          )}
        </Accordion>
      )}
    </div>
  );
}

function findExpandedValues(items: RouteItem[], currentPath: string): string[] {
  const expandedValues: string[] = [];

  items.forEach((route, index) => {
    const checkItems = (items: RouteItem[] | undefined) => {
      if (!items || items.length === 0) return;

      items.forEach((item) => {
        if (item.href && currentPath.startsWith(item.href)) {
          expandedValues.push(`item-${index}`);
        }
        if (item.items && item.items.length > 0) {
          checkItems(item.items);
        }
      });
    };

    checkItems(route.items);
  });

  return expandedValues;
}

const accordionItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

const linkVariants = {
  initial: { x: -10, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  hover: { x: 4 },
};

/**
 * Renders an Overview link for a menu item
 */
function renderOverviewLink(
  href: string | undefined,
  currentPath: string,
  extraClasses = '',
  delay = 0,
) {
  if (!href) return null;

  return (
    <MotionLink
      href={href}
      className={cn(
        'text-muted-foreground hover:text-foreground hover:bg-muted/50 text-sm font-medium',
        'border-border mb-1 flex items-center gap-2 border-b px-8 py-2 transition-all',
        currentPath === href && 'text-primary bg-muted/30',
        extraClasses,
      )}
      initial="initial"
      animate="animate"
      whileHover="hover"
      variants={linkVariants}
      transition={{ duration: 0.2, delay }}
    >
      <Home className="text-muted-foreground h-3.5 w-3.5" />
      Overview
    </MotionLink>
  );
}

function renderRouteItems(
  items: RouteItem[],
  currentPath: string,
  expandedSection: string,
  toggleSection: (id: string) => void,
) {
  return items.map((route, index) => {
    // All routes passed to this function now have children
    return (
      <AccordionItem
        key={index}
        value={`item-${index}`}
        className="[&[data-state=open]]:bg-muted/50 overflow-hidden rounded-md border-b-0 data-[state=open]:mb-2"
      >
        <AccordionTrigger className="hover:bg-muted/50 group px-4 py-3 text-sm transition-colors hover:no-underline [&>svg]:hidden">
          <span className="flex items-center gap-2">
            <ChevronRight className="text-muted-foreground h-4 w-4 shrink-0 transition-transform duration-200 ease-in-out group-data-[state=open]:rotate-90" />
            {route.title}
          </span>
        </AccordionTrigger>
        <MotionAccordionContent
          className="pb-1"
          initial="hidden"
          animate="visible"
          variants={accordionItemVariants}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          <div className="flex flex-col">
            {/* Add "Overview" link first if route has a href */}
            {renderOverviewLink(route.href, currentPath)}

            {route.items?.map((item, itemIndex) => {
              if (item.items && item.items.length > 0) {
                const sectionId = `${route.title}-${itemIndex}`;
                const isExpanded = expandedSection === sectionId;

                return (
                  <motion.div
                    key={itemIndex}
                    className="flex flex-col"
                    initial="hidden"
                    animate="visible"
                    variants={accordionItemVariants}
                    transition={{ delay: itemIndex * 0.05, ease: 'easeOut' }}
                  >
                    <button
                      onClick={() => toggleSection(sectionId)}
                      className="hover:bg-muted/50 flex w-full items-center gap-2 px-4 py-2 text-left text-sm font-medium transition-colors"
                    >
                      <ChevronRight
                        className={cn(
                          'text-muted-foreground h-3 w-3 transition-transform duration-200',
                          isExpanded && 'rotate-90',
                        )}
                      />
                      {item.title}
                    </button>
                    <motion.div
                      className="flex flex-col overflow-hidden"
                      initial="hidden"
                      animate={isExpanded ? 'visible' : 'hidden'}
                      variants={{
                        visible: { height: 'auto', opacity: 1 },
                        hidden: { height: 0, opacity: 0 },
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Add "Overview" link for second-level items with children */}
                      {renderOverviewLink(item.href, currentPath, 'ml-2')}

                      {item.items.map((subItem, subIndex) => (
                        <MotionLink
                          key={subIndex}
                          href={subItem.href ?? '#'}
                          className={cn(
                            'text-muted-foreground hover:text-foreground hover:bg-muted/50 text-sm',
                            'flex items-center gap-2 px-8 py-2 transition-all',
                            subItem.href &&
                              currentPath.startsWith(subItem.href) &&
                              'text-primary bg-muted/30 font-medium',
                          )}
                          initial="initial"
                          animate="animate"
                          whileHover="hover"
                          variants={linkVariants}
                          transition={{
                            duration: 0.2,
                            delay: subIndex * 0.05,
                          }}
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-current opacity-40" />
                          {subItem.title}
                        </MotionLink>
                      ))}
                    </motion.div>
                  </motion.div>
                );
              }
              return (
                <MotionLink
                  key={itemIndex}
                  href={item.href ?? '#'}
                  className={cn(
                    'text-muted-foreground hover:text-foreground hover:bg-muted/50 text-sm',
                    'flex items-center gap-2 px-8 py-2 transition-all',
                    item.href &&
                      currentPath.startsWith(item.href) &&
                      'text-primary bg-muted/30 font-medium',
                  )}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  variants={linkVariants}
                  transition={{ duration: 0.2, delay: itemIndex * 0.05 }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current opacity-40" />
                  {item.title}
                </MotionLink>
              );
            })}
          </div>
        </MotionAccordionContent>
      </AccordionItem>
    );
  });
}

/**
 * Converts a DropdownItem from nav-link.ts to a RouteItem for the RouteList component
 */
function convertDropdownItemToRouteItem(item: DropdownItem): RouteItem {
  const routeItem: RouteItem = {
    title: item.title,
    href: item.href,
  };

  if (item.dropdownItems && item.dropdownItems.length > 0) {
    routeItem.items = item.dropdownItems.map(convertDropdownItemToRouteItem);

    // If all children were filtered out, don't include an empty items array
    if (routeItem.items.length === 0) {
      delete routeItem.items;
    }
  }

  return routeItem;
}

/**
 * Extracts the services items from navLinks and converts them to RouteItems
 */
export function getServicesRouteItems(navLinks: NavLink[]): RouteItem[] {
  // Find the Services nav link
  const servicesNavLink = navLinks.find((link) => link.label === 'Services');

  if (!servicesNavLink?.dropdownItems) {
    return [];
  }

  // Convert each service item to a RouteItem
  return servicesNavLink.dropdownItems.map((item) => {
    return convertDropdownItemToRouteItem(item);
  });
}
