import { useState } from 'react';
import GridRow from './GridRow';
import PagesizeSelect from './PagesizeSelect';
import Pagination from './Pagination';

import 'datatables.net-bs4/css/dataTables.bootstrap4.css';
import '../../administrators/layout/admin.css';

const Grid = (props) => {

    const {
        columns,
        data,
        handleSort,
        classNames,
        pageSizes,
        totals,
        skip,
        changePageSize,
        changePageNumber,
        pageSelected,
        pageSizeSelected,
        onSelectRow
    } = props;

    const [sortColumn, setSortColumn] = useState({});

    const classRender = (column) => {
        let classNames = "";

        if (sortColumn.name && column.name === sortColumn.name) {
            classNames = sortColumn.sort === "DESC" ? "sorting_desc" : "sorting_asc";
        } else {
            classNames = "sorting";
        }
        return `${classNames}`;
    }

    const handeColumnSort = (event, column) => {
        event.preventDefault();
        let sortOperation = "ASC";
        if (sortColumn.name && column.name === sortColumn.name) {
            sortOperation = sortColumn.sort === "ASC" ? "DESC" : "ASC";
        } else {
            sortOperation = "DESC";
        }
        handleSort({ name: column.name, sort: sortOperation });
        setSortColumn({ name: column.name, sort: sortOperation });
    }

    const headerColumnRender = columns.map((column, index) => {
        const classNames = classRender(column);
        return (
            <th className={classNames}
                tabIndex="0"
                aria-controls="example1"
                rowSpan="1"
                colSpan="1"
                aria-sort="ascending"
                aria-label="Rendering engine: activate to sort column descending"
                key={`${column.name}_${index}`}
                onClick={(event) => handeColumnSort(event, column)}>
                {column.name}
            </th>
        );
    });

    return (
        <div className="card-body">
            <div id="example1_wrapper" className="dataTables_wrapper dt-bootstrap4">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <PagesizeSelect pageSizes={pageSizes}
                            changePageSize={changePageSize}
                            pageSizeSelected={pageSizeSelected} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <table id="example1" className="table table-bordered table-striped dataTable dtr-inline" role="grid" aria-describedby="example1_info">
                            <thead>
                                <tr role="row">
                                    {headerColumnRender}
                                </tr>
                            </thead>
                            <tbody>
                                <GridRow onSelectRow={onSelectRow} columns={columns} data={data} />
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-5">
                        <div className="dataTables_info" id="example1_info" role="status" aria-live="polite">
                            Showing {skip ? parseInt(skip) + 1 : 1} to {(skip && pageSizeSelected) ? (parseInt(skip) + parseInt(pageSizeSelected)) : 10} of {totals} entries
                            </div>
                    </div>
                    <div className="col-sm-12 col-md-7">
                        <Pagination changePageNumber={changePageNumber}
                            pageSelected={pageSelected} />
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Grid;