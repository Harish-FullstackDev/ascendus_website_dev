"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export default function Breadcrumbs({ className = "" }) {
    const pathname = usePathname();
    const items = buildBreadcrumbItems(pathname);

    if (items.length < 2) return null;

    return (
        <nav
            aria-label="Breadcrumb"
            className={`w-full px-6 sm:px-10 lg:px-[64px] py-3 text-sm ${className}`}
        >
            <ol className="flex flex-wrap items-center gap-1.5">
                {items.map((crumb, index) => {
                    const isLast = index === items.length - 1;
                    return (
                        <li key={crumb.item} className="flex items-center gap-1.5">
                            {index > 0 && (
                                <ChevronRight className="w-3.5 h-3.5 text-current/50" aria-hidden="true" />
                            )}
                            {isLast ? (
                                <span aria-current="page" className="font-medium">
                                    {crumb.name}
                                </span>
                            ) : (
                                <Link href={crumb.item} className="hover:underline">
                                    {crumb.name}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
