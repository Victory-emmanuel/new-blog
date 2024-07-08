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

const PaginationSect = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [pageNum, setPageNum] = useState(0);

  const nextPage = () => {
    setPageNum((prev) => prev + 1);
    const params = new URLSearchParams(searchParams);
    params.set("page", (pageNum + 1).toString()); // Increment pageNum
    router.replace(`${pathname}?${params}`);
  };

  const previousPage = () => {
    if (pageNum < 1) return;
    setPageNum((prev) => prev - 1);
    const params = new URLSearchParams(searchParams);
    params.set("page", (pageNum - 1).toString()); // Decrement pageNum
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
          {/* <PaginationItem>
            <PaginationLink
              className="dark:text-primary text-secondary"
              href="#"
            >
              {!pageNum ? pageNum + 2 : pageNum}
            </PaginationLink>
          </PaginationItem> */}
          <PaginationItem>
            <PaginationEllipsis />
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
