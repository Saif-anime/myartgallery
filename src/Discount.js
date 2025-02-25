import React, { useState, useEffect } from 'react'
import Navbar from './component/Navbar'
import Sidebar from './component/Sidebar'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Discount() {

    // curd operation 

    const [bannerTitle, setBannerTitle] = useState('');
    const [start_date, setstart_date] = useState('');

    const [end_date, setend_date] = useState('');
    const [data, setData] = useState([]);

    const [bannerData, setBannerData] = useState({
        id: '',
        title: '',
        start_date: "",
        end_date: ""
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async (id) => {
        if (id) {
            try {
                const resp = await fetch(`${process.env.REACT_APP_API_FETCH_URL}/Admin/Discount/${id}`);
                if (resp.ok) {
                    const jsonData = await resp.json();
                    setBannerData({
                        id: jsonData._id,
                        title: jsonData.title,
                        start_date: jsonData.start_date,
                        end_date: jsonData.end_date

                    });
                } else {
                    console.error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }


        } else {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_FETCH_URL}/Admin/Discount`);
                if (response.ok) {
                    const jsonData = await response.json();
                    setData(jsonData);
                } else {
                    console.error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            Discount_name: bannerTitle,
            start_date: start_date,
            end_date: end_date
        };

        console.log(formData);  // Verify formData object in console

        try {
            const response = await fetch(`${process.env.REACT_APP_API_FETCH_URL}/Admin/Discount`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)  // Convert formData to JSON string
            });

            if (response.ok) {
                // Reset form fields after successful submission
                setBannerTitle('');

                // Show success toast notification
                toast.success('Discount added successfully!');

                // Fetch updated data
                fetchData();
            } else {
                toast.error('Failed to upload Discount. Please try again.');
            }
        } catch (error) {
            console.error('Error uploading Discount', error);
            toast.error('Failed to upload Discount. Please try again.');
        }
    };


    // end curd operation 


    // Banner show / hide 


    const BannerShowFun = async (id, isActive) => {

        console.log(isActive)


        if (isActive === 1) {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_FETCH_URL}/Admin/Discount/${id}`, {
                    method: 'DELETE',
                    body: isActive,
                });

                if (response.ok) {

                    // Show success toast notification
                    toast.error('Discount Hide !');

                    // Fetch updated data
                    fetchData();
                } else {
                    toast.error('Failed to  Discount show. Please try again.');
                }
            } catch (error) {
                console.error('Error uploading Discount:', error);
                toast.error('Failed to upload Discount. Please try again.');
            }

        } else {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_FETCH_URL}/Admin/Discount/${id}`, {
                    method: 'DELETE',
                    body: isActive,
                });
                console.log(response.ok)
                if (response.ok) {

                    // Show success toast notification
                    toast.success('Discount Show !');

                    // Fetch updated data
                    fetchData();
                } else {
                    toast.error('Failed to Discount show. Please try again.');
                }
            } catch (error) {
                console.error('Error uploading Discount:', error);
                toast.error('Failed to upload Discount. Please try again.');
            }


        }
    }



    // const UpdatehandleSubmit = async (id) => {
    //     // Perform update logic using bannerData
    //     try {
    //         const formData = new FormData();
    //         formData.append('title', bannerData.title);
    //         formData.append('bannerLink', bannerData.vanityUrl);
    //         formData.append('file', bannerData.file);

    //         const response = await fetch(`${process.env.REACT_APP_API_FETCH_URL}/Admin/Discount/${id}`, {
    //             method: 'PUT',
    //             body: formData
    //         });

    //         if (response.ok) {
    //             console.log('Discount updated successfully!');
    //             // Show success toast notification
    //             toast.success('Discount update successfully!');
    //         } else {
    //             // Show success toast notification
    //             toast.success('failed to update Discount successfully!');
    //         }
    //     } catch (error) {
    //         console.error('Error updating Discount:', error);
    //     }
    // }


    // // // Function to handle input changes
    // const UpdatehandleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setBannerData({
    //         ...bannerData,
    //         [name]: value
    //     });
    // };

    // //   // Function to handle file upload
    // const UpdatehandleFileChange = (e) => {
    //     const file = e.target.files[0];
    //     setBannerData({
    //         ...bannerData,
    //         file: file
    //     });
    // };





    // const BannerSingleData = (id) => {
    //     try {
    //         fetchData(id);
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }









    return (
        <>

            {/* <!-- Extra Large Modal --> */}


            <div class="modal fade" id="ExtralargeModal" tabindex="-1">
                <div class="modal-dialog ">
                    <div class="modal-content">
                        <form onSubmit={handleSubmit}>
                            <div class="modal-header">
                                <h5 class="modal-title">Discount Add</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">

                                <div class="row mb-3">
                                    <label for="inputText" class="col-sm-12 col-form-label">Discount Name</label>
                                    <div class="col-sm-12">
                                        <input type="text" class="form-control" value={bannerTitle} onChange={(e) => setBannerTitle(e.target.value)} />
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="inputText" class="col-sm-12 col-form-label">Start Date</label>
                                    <div class="col-sm-12">
                                        <input type="date" class="form-control" value={start_date} onChange={(e) => setstart_date(e.target.value)} />
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="inputText" class="col-sm-12 col-form-label">End Date</label>
                                    <div class="col-sm-12">
                                        <input type="date" class="form-control" value={end_date} onChange={(e) => setend_date(e.target.value)} />
                                    </div>
                                </div>




                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-primary">Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="ExtralargeModal2" tabindex="-1">
                <div class="modal-dialog ">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Discount Update</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                            <div class="row mb-3">
                                <label for="inputText" class="col-sm-12 col-form-label">Discount Name</label>
                                <div class="col-sm-12">
                                    <input type="text" class="form-control" />
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="inputText" class="col-sm-12 col-form-label">Start Date</label>
                                <div class="col-sm-12">
                                    <input type="date" class="form-control" />
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="inputText" class="col-sm-12 col-form-label">End Date</label>
                                <div class="col-sm-12">
                                    <input type="date" class="form-control" />
                                </div>
                            </div>





                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Extra Large Modal--> */}


            <Navbar />

            <Sidebar />


            <main id="main" class="main">

                <div class="pagetitle">
                    <h1>Discount</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li class="breadcrumb-item active">Discount</li>
                        </ol>
                    </nav>
                </div>

                <section class="section dashboard">
                    <div className='d-flex justify-content-end mb-5'>
                        <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#ExtralargeModal">
                            Add Discount
                        </button>
                    </div>
                    <div class="row">


                        <div class="col-lg-12">
                            <div class="row">



                                <div class="col-12">
                                    <div class="card top-selling overflow-auto">



                                        <div class="card-body pb-0">
                                            <h5 class="card-title">Discount Table</h5>

                                            <table class="table table-borderless">
                                                <thead>
                                                    <tr>

                                                        <th scope="col">Discount </th>
                                                        <th scope="col">Start Date </th>
                                                        <th scope="col">End Date </th>
                                                        <th scope="col" colSpan={2}>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        data.map((v) => {
                                                            return <tr key={v._id}>
                                                                <td scope="row">{v.Discount_name}</td>
                                                                <td scope="row">{v.Start_Date}</td>
                                                                <td scope="row">{v.End_Date}</td>


                                                                <td>  <button type="button" className={`btn btn-sm ${v.is_Active ? 'btn-success' : 'btn-danger'}`} onClick={() => BannerShowFun(v._id, v.is_Active)}>
                                                                    {v.is_Active ? (
                                                                        <i class="bi bi-eye-fill"></i>// Render this icon when active
                                                                    ) : (
                                                                        <i class="bi bi-eye-slash"></i> // Render this icon when inactive
                                                                    )}

                                                                </button></td>
                                                                <td>        <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#ExtralargeModal2">
                                                                    <i class="bi bi-pencil-square"></i>
                                                                </button></td>

                                                            </tr>
                                                        })
                                                    }



                                                </tbody>
                                            </table>

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>




                    </div>


                </section>
                <ToastContainer />

            </main >


        </>
    )
}

export default Discount;