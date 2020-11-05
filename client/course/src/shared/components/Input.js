const Input = (props) => {
    const { name, inputName, placeHolder, value, className, onChange, error } = props;

    return (
        <div className="form-group">
            <label>{name}</label>
            <input name={inputName}
                className={`${className} ${error && 'is-invalid'}`}
                value={value}
                placeholder={placeHolder || ''}
                onChange={onChange} />
            {
                error &&
                (
                    <span id="exampleInputEmail1-error" class="error invalid-feedback">
                        {error}
                    </span>
                )
            }
        </div>
    );
}
export default Input;