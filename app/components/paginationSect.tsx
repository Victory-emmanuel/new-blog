"use client";

import React, { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const PaginationSect = ({ maxPage }: { maxPage: number }) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [pageNum, setPageNum] = useState(0);

  const nextPage = () => {
    if (pageNum + 4 > maxPage) return;
    setPageNum((prev) => prev + 2);
    const params = new URLSearchParams(searchParams);
    params.set("page", (pageNum + 2).toString()); // Increment pageNum
    router.replace(`${pathname}?${params}`);
  };

  const previousPage = () => {
    if (pageNum < 1) return;
    setPageNum((prev) => prev - 2);
    const params = new URLSearchParams(searchParams);
    params.set("page", (pageNum - 2).toString()); // Decrement pageNum
    router.replace(`${pathname}?${params}`);
  };

  return (
    <>
      <Pagination>
        <PaginationContent className="dark:text-primary text-secondary">
          <PaginationItem>
            <PaginationPrevious
              className="dark:text-primary text-secondary"
              onClick={previousPage}
              href="#"
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              className="dark:text-primary text-secondary"
              href="#"
            >
              {pageNum}
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationNext
              className="dark:text-primary text-secondary"
              onClick={nextPage}
              href="#"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default PaginationSect;
