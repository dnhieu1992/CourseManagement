import { useState } from 'react';
import Grid from '../../shared/components/Grid';

const Course = () => {
    const [pageSelected, setPageSelected] = useState(1);
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
        { dataField: 'name', name: 'Name' },
        { dataField: 'status', name: 'Status' },
        { dataField: 'createdBy', name: 'Created By' },
        { dataField: 'createdAt', name: 'Created At' }
    ];
    const handleSort = () => {
        console.log("hande sort");
    };
    const changePageNumber = (pageNumber) => {
        debugger;
        console.log("changePageNumber");
        setPageSelected(pageNumber);
    }
    return (
        <div className="content-wrapper" style={{ 'minHeight': '1203.6px' }}>
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Courses</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active">DataTables</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <Grid columns={columns}
                                data={courses}
                                handleSort={handleSort}
                                changePageNumber={changePageNumber}
                                pageSelected={pageSelected}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Course;