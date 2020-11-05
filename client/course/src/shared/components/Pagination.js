import { useState } from "react";

const Pagination = (props) => {
    const { pageNumbers, changePageNumber, pageSelected } = props;

    const pageNumberSelected = pageSelected || 1;

    const lstpageNumber = pageNumbers || [1, 2, 3, 4, 5, 6, 7];

    const handleSelectedPageNumber = (number) => {
        changePageNumber(number);
    }

    const handleNextPage = () => {
        if (pageNumberSelected < Math.max(...lstpageNumber)) {
            handleSelectedPageNumber(pageNumberSelected + 1);
        }
    }
    const handlePreviousPage = () => {
        if (pageNumberSelected > 1) {
            handleSelectedPageNumber(pageNumberSelected - 1);
        }
    }

    const lstPageLinkRender = lstpageNumber.map((number) => {
        return (
            <li className={"paginate_button page-item " + (pageNumberSelected === number ? "active" : "")} key={number} onClick={() => handleSelectedPageNumber(number)}>
                <p className="page-link">
                    {number}
                </p>
            </li>
        );
    });

    return (
        <div className="dataTables_paginate paging_simple_numbers" id="example1_paginate">
            <ul className="pagination">
                <li className="paginate_button page-item previous disabled" id="previousPage" onClick={handlePreviousPage}>
                    <div className="page-link">Previous</div>
                </li>
                {lstPageLinkRender}
                <li className="paginate_button page-item next" id="nextPage" onClick={handleNextPage}>
                    <div className="page-link">Next</div>
                </li>
            </ul>
        </div>
    );
}
export default Pagination;