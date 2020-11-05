import { useState } from "react";
import Input from '../../shared/components/Input';
import Dropdown from '../../shared/components/Dropdown';

const CourseSearchCriteria = (props) => {
    const [searchCriteria, setSearchCriteria] = useState({ status: '', courseName: '' });

    const statuses = ["Active", "Disable"];

    const onHandleChange = (event) => {
        if (event && event.target) {
            setSearchCriteria({ ...searchCriteria, [event.target.name]: event.target.value });
        }
    };
    const onHandeReset = () => {
        setSearchCriteria({ status: '', courseName: '' });
    };
    const onHandleSearch = () => {
        console.log(searchCriteria);
    };

    return (
        <section className="content">
            <div className="container-fluid">
                <div className="card card-default">
                    <div className="card-header">
                        <h3 className="card-title">Search Criteria</h3>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <Input
                                    name="Name"
                                    inputName="courseName"
                                    className="form-control"
                                    value={searchCriteria.courseName}
                                    onChange={onHandleChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <Dropdown className="form-control"
                                    name="Status"
                                    inputName="status"
                                    value={searchCriteria.status}
                                    dataSources={statuses}
                                    onChange={onHandleChange} />
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="row ">
                            <div className="col-sm-3 offset-sm-6">
                                <button type="button" className="btn btn-block btn-primary" onClick={onHandleSearch}>Search</button>
                            </div>
                            <div className="col-sm-3">
                                <button type="button" className="btn btn-block btn-primary" onClick={onHandeReset}>Reset</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default CourseSearchCriteria;