const Dropdown = (props) => {
    const { name, inputName, className, value, dataSources, onChange } = props;

    const statusesRender = dataSources.map((data) => {
        return <option key={data} value={data}>{data}</option>
    });

    return (
        <div className="form-group">
            <label>{name}</label>
            <select className={className} name={inputName} value={value} onChange={onChange}>
                <option value=""></option>
                {statusesRender}
            </select>
        </div>
    );
}

export default Dropdown;