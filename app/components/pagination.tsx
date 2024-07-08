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

const Pagination = () => {
  const pathname = usePathname();
  const { replace } = useRouter;
  const searchParams = useSearchParams();
  const [pageNum, setPageNum] = useState(0);

  const nextPage = () => {
    setPageNum((prev) => prev + 1);
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNum.toString());
    replace(`${pathname}?${params}`);
  };

  const previousPage = () => {
    setPageNum((prev) => prev - 1);
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNum.toString());
    replace(`${pathname}?${params}`);
  };
  return (
    <>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={previousPage} href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext onClick={nextPage} href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default Pagination;
