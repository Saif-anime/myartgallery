import React, { useState, useEffect } from 'react'
import Navbar from './component/Navbar'
import Sidebar from './component/Sidebar'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function SubCategory() {

    const [categorydata, setcategorydata] = useState([]);
    const [data, setData] = useState([])


    const [bannerTitle, setBannerTitle] = useState('');
    
    const [bannerData, setBannerData] = useState({
        id: '',
        title: '',
        file: null
    });
    const [category, setcategory] = useState('');




    useEffect(() => {
        fetchData();

    }, []);

    const fetchData = async (id) => {
        if (id) {
            // try {
            //     const resp = await fetch(`${process.env.REACT_APP_API_FETCH_URL}/Admin/Banner/${id}`);
            //     if (resp.ok) {
            //         const jsonData = await resp.json();
            //         setBannerData({
            //             id: jsonData._id,
            //             title: jsonData.title,
            //             vanityUrl: jsonData.BannerLink,

            //             file: null // Reset file field, assuming file upload should not be pre-populated
            //         });
            //     } else {
            //         console.error('Failed to fetch data');
            //     }
            // } catch (error) {
            //     console.error('Error fetching data:', error);
            // }


        } else {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_FETCH_URL}/Admin/subcategory`);
                const resp = await fetch(`${process.env.REACT_APP_API_FETCH_URL}/Admin/Categories`)
                if (response.ok || resp.ok) {
                    const jsonData = await response.json();
                    const jsonCateData = await resp.json();
                    setData(jsonData);
                    setcategorydata(jsonCateData)
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

        // const formData = new FormData();


        // formData.append('title', bannerTitle);
        // formData.append('category', category);
        const formData = {
            title: bannerTitle,
            category: category
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_API_FETCH_URL}/Admin/subcategory`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)  // Convert formData to JSON string
            });

            if (response.ok) {
                // Reset form fields after successful submission

                setBannerTitle('');
                setcategory('');


                // Show success toast notification
                toast.success('Add Sub Category uploaded successfully!');

                // Fetch updated data
                fetchData();
            } else {
                toast.error('Failed to Add Sub category. Please try again.');
            }
        } catch (error) {
            console.error('Error uploading file:', error);
            toast.error('Failed to upload banner. Please try again.');
        }
    };
   // Banner show / hide 


   const BannerShowFun = async (id, isActive) => {

    console.log(isActive)


    if (isActive === 1) {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_FETCH_URL}/Admin/subcategory/${id}`, {
                method: 'DELETE',
                body: isActive,
            });

            if (response.ok) {

                // Show success toast notification
                toast.error('Sub Category Hide !');

                // Fetch updated data
                fetchData();
            } else {
                toast.error('Failed to banner show. Please try again.');
            }
        } catch (error) {
            console.error('Error uploading file:', error);
            toast.error('Failed to upload banner. Please try again.');
        }

    } else {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_FETCH_URL}/Admin/subcategory/${id}`, {
                method: 'DELETE',
                body: isActive,
            });
            console.log(response.ok)
            if (response.ok) {

                // Show success toast notification
                toast.success('Sub Category Show !');

                // Fetch updated data
                fetchData();
            } else {
                toast.error('Failed to Sub Category show. Please try again.');
            }
        } catch (error) {
            console.error('Error Sub Category:', error);
            toast.error('Failed to Sub Category. Please try again.');
        }


    }
}



const UpdatehandleSubmit = async (id) => {
    // Perform update logic using bannerData
    try {
        const formData = new FormData();
        formData.append('title', bannerData.title);
        formData.append('bannerLink', bannerData.vanityUrl);
        formData.append('file', bannerData.file);

        const response = await fetch(`${process.env.REACT_APP_API_FETCH_URL}/Admin/Banner/${id}`, {
            method: 'PUT',
            body: formData
        });

        if (response.ok) {
            console.log('Banner updated successfully!');
            // Show success toast notification
            toast.success('Banner update successfully!');
        } else {
            // Show success toast notification
            toast.success('failed to update uploaded successfully!');
        }
    } catch (error) {
        console.error('Error updating banner:', error);
    }
}


// // Function to handle input changes
const UpdatehandleInputChange = (e) => {
    const { name, value } = e.target;
    setBannerData({
        ...bannerData,
        [name]: value
    });
};

//   // Function to handle file upload
const UpdatehandleFileChange = (e) => {
    const file = e.target.files[0];
    setBannerData({
        ...bannerData,
        file: file
    });
};





const BannerSingleData = (id) => {
    try {
        fetchData(id);
    } catch (error) {
        console.log(error)
    }
}








    return (
        <>

            {/* <!-- Extra Large Modal --> */}


            <div class="modal fade" id="ExtralargeModal" tabindex="-1">
                <div class="modal-dialog ">
                    <div class="modal-content">
                        <form onSubmit={handleSubmit} >

                            <div class="modal-header">
                                <h5 class="modal-title">Sub Category Add</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">

                                <div class="row mb-3">
                                    <label for="inputText" class="col-sm-12 col-form-label">Sub Category Title</label>
                                    <div class="col-sm-12">
                                        <input type="text" class="form-control" value={bannerTitle}
                                            onChange={(e) => setBannerTitle(e.target.value)} />
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="inputText" class="col-sm-12 col-form-label">Category</label>
                                    <div className='col-sm-12'>
                                        <select class="form-select" value={category}
                                            onChange={(e) => setcategory(e.target.value)} aria-label="Default select example">
                                            <option selected>---------Select Category-----------</option>

                                            {
                                                categorydata.map((v) => {

                                                    return v.isActive == 1 ? <option key={v._id} value={v._id}>{v.title}</option> : ""

                                                })
                                            }

                                        </select>
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
                            <h5 class="modal-title">Sub Category Update</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                            <div class="row mb-3">
                                <label for="inputText" class="col-sm-12 col-form-label">Category Title</label>
                                <div class="col-sm-12">
                                    <input type="text" class="form-control" />
                                </div>
                            </div>


                            <div class="row mb-3">
                                <label for="inputText" class="col-sm-12 col-form-label">Category</label>
                                <div className='col-sm-12'>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Select Category</option>
                                        {
                                            categorydata.map((v) => {

                                                return <option key={v._id} value={v._id}>{v.title}</option>

                                            })
                                        }

                                    </select>
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
                    <h1>Sub Category</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li class="breadcrumb-item active">Sub Category</li>
                        </ol>
                    </nav>
                </div>

                <section class="section dashboard">
                    <div className='d-flex justify-content-end mb-5'>
                        <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#ExtralargeModal">
                            Add Sub Category
                        </button>
                    </div>
                    <div class="row">


                        <div class="col-lg-12">
                            <div class="row">



                                <div class="col-12">
                                    <div class="card top-selling overflow-auto">



                                        <div class="card-body pb-0">
                                            <h5 class="card-title">Sub Category Table</h5>

                                            <table class="table table-borderless">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Preview</th>
                                                        <th scope="col">Sub Category </th>
                                                        <th scope="col">Category </th>

                                                        <th scope="col" colSpan={2}>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>



                                                    {
                                                        data.map((v) => {
                                                            // Find the matching category for the current item 'v'
                                                            const matchingCategory = categorydata.find((vc) => vc._id === v.category);

                                                            return <tr key={v._id}>
                                                                <th scope="row">{v._id}</th>
                                                                <td>{v.title}</td>
                                                                <td>{matchingCategory ? matchingCategory.title : 'Unknown Category'}</td>
                                                                <td> <button type="button" className={`btn btn-sm ${v.isActive ? 'btn-success' : 'btn-danger'}`} onClick={() => BannerShowFun(v._id, v.isActive)} >
                                                                    {v.isActive ? (
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

export default SubCategory;