import PageLink from "./PageLink";
import './Pagination.css'
import { getPaginatedItems } from "../lib/pagination";

export type Props = {
    currentPage: number;
    lastPage: number;
    maxLength: number;
    setCurrentPage: (page: number) => void;
}

export default function Pagination({
    currentPage,
    lastPage,
    maxLength,
    setCurrentPage,
}: Props) {
    const pageNums = getPaginatedItems(currentPage, lastPage, maxLength);

    return (
        <nav className="pagination" aria-label="Pagination">
            <PageLink
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
            >
                Previous
            </PageLink>

            {   pageNums.map((pageNum, index) => (
                    <PageLink
                        key={index}
                        active={currentPage === pageNum}
                        disabled={isNaN(pageNum)}
                        onClick={() => setCurrentPage(pageNum)}
                    >
                        {!isNaN(pageNum) ? pageNum : '...'}
                    </PageLink>
            ))  }

            <PageLink
                disabled={currentPage === lastPage}
                onClick={() => setCurrentPage(currentPage + 1)}
            >
                Next
            </PageLink>
        </nav>
    )
}