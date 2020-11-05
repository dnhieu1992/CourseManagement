import { Fragment } from 'react';

const GridColumn = (props) => {
    const { columns, rowData, rowKey, onRowSelect } = props;

    const renderValue = (dataFormat, value) => {
        switch (dataFormat) {
            case "modal":
                return (<a href="#" onClick={() => onRowSelect(rowData)}>{value}</a>);
            default:
                return value;
        };
    }

    const columnRender = columns.map((column) => {
        const value = rowData[column.dataField];
        return (
            <td tabIndex="0" className="sorting_1" key={`${rowKey}_${column.name}`}>
                {renderValue(column.dataFormat, value)}
            </td>
        );
    });

    return (
        <Fragment>
            { columnRender}
        </Fragment>
    );
}

export default GridColumn;