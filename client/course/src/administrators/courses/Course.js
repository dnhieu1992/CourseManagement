import { useState } from 'react';
import Grid from '../../shared/components/Grid';
import Modal from '../../shared/components/Modal'
import CourseSearchCriteria from './CourseSearchCriteria';

const Course = () => {
    const [pageSelected, setPageSelected] = useState(1);
    const [pageSizeSelected, setPageSizeSelected] = useState(10);
    const [isShow, setIsShow] = useState(false);
    const courses = [
        { id: 1, name: 'LEARNING TO TEACH ONLINE', createdBy: "administrator", createdAt: "01/11/2020", status: "Actived" },
        { id: 2, name: 'LEARNING TO TEACH ONLINE', createdBy: "administrator", createdAt: "01/11/2020", status: "Actived" },
        { id: 3, name: 'LEARNING TO TEACH ONLINE', createdBy: "administrator", createdAt: "01/11/2020", status: "Actived" },
        { id: 4, name: 'LEARNING TO TEACH ONLINE', createdBy: "administrator", createdAt: "01/11/2020", status: "Actived" },
        { id: 5, name: 'LEARNING TO TEACH ONLINE', createdBy: "administrator", createdAt: "01/11/2020", status: "Actived" },
        { id: 6, name: 'LEARNING TO TEACH ONLINE', createdBy: "administrator", createdAt: "01/11/2020", status: "Actived" },
        { id: 7, name: 'LEARNING TO TEACH ONLINE', createdBy: "administrator", createdAt: "01/11/2020", status: "Actived" },
        { id: 8, name: 'LEARNING TO TEACH ONLINE', createdBy: "administrator", createdAt: "01/11/2020", status: "Actived" },
        { id: 9, name: 'LEARNING TO TEACH ONLINE', createdBy: "administrator", createdAt: "01/11/2020", status: "Actived" },
        { id: 10, name: 'LEARNING TO TEACH ONLINE', createdBy: "administrator", createdAt: "01/11/2020", status: "Actived" },
        { id: 11, name: 'LEARNING TO TEACH ONLINE', createdBy: "administrator", createdAt: "01/11/2020", status: "Actived" },
        { id: 12, name: 'LEARNING TO TEACH ONLINE', createdBy: "administrator", createdAt: "01/11/2020", status: "Actived" },
        { id: 13, name: 'LEARNING TO TEACH ONLINE', createdBy: "administrator", createdAt: "01/11/2020", status: "Actived" },
        { id: 14, name: 'LEARNING TO TEACH ONLINE', createdBy: "administrator", createdAt: "01/11/2020", status: "Actived" },
        { id: 15, name: 'LEARNING TO TEACH ONLINE', createdBy: "administrator", createdAt: "01/11/2020", status: "Actived" },
        { id: 16, name: 'LEARNING TO TEACH ONLINE', createdBy: "administrator", createdAt: "01/11/2020", status: "Actived" },
        { id: 17, name: 'LEARNING TO TEACH ONLINE', createdBy: "administrator", createdAt: "01/11/2020", status: "Actived" },
        { id: 18, name: 'LEARNING TO TEACH ONLINE', createdBy: "administrator", createdAt: "01/11/2020", status: "Actived" },
        { id: 19, name: 'LEARNING TO TEACH ONLINE', createdBy: "administrator", createdAt: "01/11/2020", status: "Actived" }
    ];
    const columns = [
        { dataField: 'id', name: 'Id' },
        { dataField: 'name', name: 'Name', dataFormat: 'modal' },
        { dataField: 'status', name: 'Status' },
        { dataField: 'createdBy', name: 'Created By' },
        { dataField: 'createdAt', name: 'Created At' }
    ];
    const handleSort = () => {
        console.log("hande sort");
    };
    const changePageNumber = (pageNumber) => {
        console.log("changePageNumber");
        setPageSelected(pageNumber);
    };
    const handleChangePageSize = (pageSize) => {
        setPageSizeSelected(pageSize);
        console.log("handleChangePageSize");
    }
    const onHandleSelectRow = (row) => {
        console.log(row);
    };
    const onHandleClose = () => {
        setIsShow(false);
        console.log("onHandleClose");
    };
    const onHandleSubmit = () => {
        setIsShow(false);
        console.log("onHandleSubmit");
    };
    const addNew = () => {
        setIsShow(true);
    };
    return (
        <div className="content-wrapper" style={{ 'minHeight': '1203.6px' }}>
            <Modal title="Create Course"
                submitButtonName="Submit"
                onClose={onHandleClose}
                onSubmit={onHandleSubmit}
                isShow={isShow} >
                    <h1>test content</h1>
                </Modal>
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Courses</h1>
                        </div>
                    </div>
                </div>
            </section>

            <CourseSearchCriteria />
            <section className="content">
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header row">
                                    <div className="col-sm-6"><h3 className="card-title">DataTable with default features</h3></div>
                                    <div className="col-sm-6">
                                        <button type="button" className="btn btn-block btn-primary pull-right" data-toggle="modal" onClick={addNew} style={{ width: '100px' }}>Add New</button>
                                    </div>
                                </div>

                                <Grid columns={columns}
                                    data={courses}
                                    handleSort={handleSort}
                                    changePageNumber={changePageNumber}
                                    pageSelected={pageSelected}
                                    pageSizeSelected={pageSizeSelected}
                                    skip={(pageSelected - 1) * pageSizeSelected}
                                    changePageSize={handleChangePageSize}
                                    onSelectRow={onHandleSelectRow}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}
export default Course;