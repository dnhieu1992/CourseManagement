import { Fragment } from 'react';
import GridColumn from './GridColumn';

const GridRow = (props) => {
    const {
        columns,
        data,
        onSelectRow
    } = props;

    const rowRender = data.map((item, index) => {
        return (
            <tr key={`row_${index}`} className="odd" >
                <GridColumn onRowSelect={onSelectRow} columns={columns} rowData={item} rowKey={`row_${index}`} />
            </tr>
        );
    });

    return (
        <Fragment>
            { rowRender}
        </Fragment>
    );
}

export default GridRow;