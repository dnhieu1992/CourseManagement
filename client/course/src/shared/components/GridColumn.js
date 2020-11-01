import { Fragment } from 'react';

const GridColumn = (props) => {
    const { columns, rowData, rowKey } = props;

    const columnRender = columns.map((column) => {
        return (
            <td tabIndex="0" className="sorting_1" key={`${rowKey}_${column.name}`}>{rowData[column.dataField]}</td>
        );
    });

    return (
        <Fragment>
            { columnRender}
        </Fragment>
    );
}

export default GridColumn;