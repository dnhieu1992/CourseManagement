
const PagesizeSelect = (props) => {

    const { pageSizes, changePageSize } = props;
    const lstPageSize =(pageSizes && pageSizes.length > 0) ? pageSizes : [10, 25, 50, 100];

    const pageSizeRender = lstPageSize.map((number) => {
        return (
            <option value={number} key={number}>{number}</option>
        );
    });

    return (
        <div class="dataTables_length" id="length">
            <label> Show
                <select name="length"
                    class="custom-select custom-select-sm form-control form-control-sm"
                    onChange={event => changePageSize(event.target.value)}>
                    {pageSizeRender}
                </select> entries
            </label>
        </div>
    );
};

export default PagesizeSelect;