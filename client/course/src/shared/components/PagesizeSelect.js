const PagesizeSelect = (props) => {

    const { pageSizes, changePageSize, pageSizeSelected } = props;

    const lstPageSize = (pageSizes && pageSizes.length > 0) ? pageSizes : [10, 25, 50, 100];

    const pageSizeRender = lstPageSize.map((number) => {
        return (
            <option value={number} key={number}>{number}</option>
        );
    });

    const onHandlePageSizeSelected = (e) => {
        if (e && e.target) {
            changePageSize(e.target.value);
        };
    }

    return (
        <div className="dataTables_length" id="length">
            <label> Show
                <select name="length"
                    className="custom-select custom-select-sm form-control form-control-sm"
                    value={pageSizeSelected || 10}
                    onChange={onHandlePageSizeSelected}
                >
                    {pageSizeRender}
                </select> entries
            </label>
        </div>
    );
};

export default PagesizeSelect;