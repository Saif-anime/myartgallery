import React, { useState, useEffect } from 'react'
import Navbar from './component/Navbar'
import Sidebar from './component/Sidebar'
import { Link } from 'react-router-dom'
import Multiselect from 'multiselect-react-dropdown';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Product() {

    // curd operation 
    const [productData, setproductData] = useState({
        id: '',
        title: '',
        start_date: "",
        end_date: ""
    });

    const [data, setData] = useState([]);
    const [CateData, setCateData] = useState([]);
    const [SubCateData, setSubCateData] = useState([]);
    const [Fab, setFab] = useState([]);
    const [Occasion, setOccasion] = useState([]);
    const [Offer, setOffer] = useState([]);
    const [Discount, setDiscount] = useState([]);
    const [Uniform, setUniform] = useState([]);
    const [Blouse, setBlouse] = useState([]);
    const [bannerData, setBannerData] = useState({

        product_name: '',
        online_price: "",
        actual_price: "",
        gender: "",
        category_product: "",
        sub_category_product: "",
        size: "",
        quantity: "",
        fabric: "",
        dimension: "",
        wash_care: "",
        occasion: "",
        out_of_stock: "",
        premium: "",
        offer: "",
        uniform_type: "",
        age_lower_limit: "",
        age_upper_limit: "",
        blouse_added: "",
        blouse_dimension: "",
        blouse_type: "",
        discount: "",
        product_desc: ""
    });
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            const selectedFiles = Array.from(files);

            // if(selectedFiles.length > 0){

            //     selectedFiles.forEach((item)=>{
            //         setSelectedFile(item);
            //     });

            // }

            console.log(selectedFiles)
            setSelectedFile(selectedFiles)

        }
    };


    const [options, setoptions] = useState([]);

    const [selectedValues, setSelectedValues] = useState([]);


    const onSelect = (selectedList, selectedItem) => {
        setSelectedValues(selectedList);
        // Additional logic when an item is selected
        console.log(`Selected: ${selectedItem.Color_name}`);
    };

    const onRemove = (selectedList, removedItem) => {
        setSelectedValues(selectedList);
        // Additional logic when an item is removed
        console.log(`Removed: ${removedItem.Color_name}`);
    };






    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async (id) => {
        if (id) {
            try {
                const resp = await fetch(`${process.env.REACT_APP_API_FETCH_URL}/Admin/product/${id}`);
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
                const response = await fetch(`${process.env.REACT_APP_API_FETCH_URL}/Admin/product`);
                const cate_res = await fetch(`${process.env.REACT_APP_API_FETCH_URL}/Admin/Categories`);
                const subcate_res = await fetch(`${process.env.REACT_APP_API_FETCH_URL}/Admin/subcategory`);
                const fab_res = await fetch(`${process.env.REACT_APP_API_FETCH_URL}/Admin/Fabric`);
                const color_res = await fetch(`${process.env.REACT_APP_API_FETCH_URL}/Admin/color`);
                const occasion_res = await fetch(`${process.env.REACT_APP_API_FETCH_URL}/Admin/Occasion`);
                const offer_res = await fetch(`${process.env.REACT_APP_API_FETCH_URL}/Admin/Offer`);
                const discount_res = await fetch(`${process.env.REACT_APP_API_FETCH_URL}/Admin/Discount`);
                const uniform_res = await fetch(`${process.env.REACT_APP_API_FETCH_URL}/Admin/Uniform_type`);
                const blouse_res = await fetch(`${process.env.REACT_APP_API_FETCH_URL}/Admin/blouse`);
                if (response.ok && blouse_res.ok && cate_res.ok && subcate_res.ok && fab_res.ok && color_res.ok && occasion_res.ok && offer_res.ok && discount_res.ok) {
                    const jsonData = await response.json();
                    const catejsonData = await cate_res.json();
                    const fab_json_res = await fab_res.json();
                    const subcatejsonData = await subcate_res.json();
                    const color_json_data = await color_res.json();
                    const Occasion_json_data = await occasion_res.json();
                    const Offer_json_data = await offer_res.json();
                    const Discount_json_data = await discount_res.json();
                    const blouse_json_data = await blouse_res.json();
                    const uniform_json_data = await uniform_res.json();
                    setData(jsonData);
                    setCateData(catejsonData);
                    setSubCateData(subcatejsonData);
                    setFab(fab_json_res)
                    setoptions(color_json_data);
                    setOccasion(Occasion_json_data);
                    setOffer(Offer_json_data);
                    setDiscount(Discount_json_data);
                    setBlouse(blouse_json_data);
                    setUniform(uniform_json_data);
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


        const formData = new FormData();


        formData.append('product_name', bannerData.product_name)
        formData.append('online_price', bannerData.online_price)
        formData.append('actual_price', bannerData.actual_price)
        formData.append('gender', bannerData.gender)
        formData.append('product_category', bannerData.category_product)
        formData.append('product_subcategory', bannerData.sub_category_product)
        formData.append('sizes', bannerData.size)
        formData.append('quantity', bannerData.quantity)
        formData.append('fabric', bannerData.fabric)
        formData.append('dimension', bannerData.dimension)
        formData.append('wash_care', bannerData.wash_care)
        formData.append('occasion', bannerData.occasion)
        formData.append('out_of_stock', bannerData.out_of_stock)
        formData.append('premium', bannerData.premium)
        formData.append('offer', bannerData.offer)
        formData.append('uniform_type', bannerData.uniform_type)
        formData.append('age_lower_limit', bannerData.age_lower_limit)
        formData.append('age_upper_limit', bannerData.age_upper_limit)
        formData.append('blouse_added', bannerData.blouse_added)
        formData.append('blouse_dimesnion', bannerData.blouse_dimension)
        formData.append('blouse_type', bannerData.blouse_type)
        formData.append('discount', bannerData.discount)
        formData.append('product_desc', bannerData.product_desc)
        formData.append('colors', JSON.stringify(selectedValues))
        // Append each file to FormData
        selectedFile.forEach((file, index) => {
            formData.append(`file`, file);
        });




        try {
            const response = await fetch(`${process.env.REACT_APP_API_FETCH_URL}/Admin/product`, {
                method: 'POST',
                body: formData
            });

            console.log(response)

            if (response.ok) {
                // Reset form fields after successful submission
                setBannerData('');

                // Show success toast notification
                toast.success('Product added successfully!');

                // Fetch updated data
                fetchData();
            } else {
                toast.error('Failed to upload Product. Please try again.');
            }
        } catch (error) {
            console.error('Error uploading Product', error);
            toast.error('Failed to upload Product. Please try again.');
        }
    };


    // end curd operation 


    // Banner show / hide 


    const BannerShowFun = async (id, isActive) => {

        console.log(isActive)


        if (isActive === 1) {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_FETCH_URL}/Admin/product/${id}`, {
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
                const response = await fetch(`${process.env.REACT_APP_API_FETCH_URL}/Admin/product/${id}`, {
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

    //         const response = await fetch(`${process.env.REACT_APP_API_FETCH_URL}/Admin/product/${id}`, {
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


    // // Function to handle input changes
    // const UpdatehandleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setBannerData({
    //         ...bannerData,
    //         [name]: value
    //     });
    // };

    //   // Function to handle file upload
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


            <div class="modal fade" id="ExtralargeModal" tabindex="-1">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <form onSubmit={handleSubmit}>
                            <div class="modal-header">
                                <h5 class="modal-title">Product Add</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">

                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div class="row mb-3">
                                            <label for="inputText" class="col-sm-12 col-form-label">Product Name</label>
                                            <div class="col-sm-12">
                                                <input type="text" class="form-control" value={bannerData.product_name}
                                                    onChange={(e) => setBannerData({ ...bannerData, product_name: e.target.value })} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>

                                        <div class="row mb-3">
                                            <label for="inputText" class="col-sm-12 col-form-label">Online Price</label>
                                            <div class="col-sm-12">
                                                <input type="number" class="form-control" value={bannerData.online_price}
                                                    onChange={(e) => setBannerData({ ...bannerData, online_price: e.target.value })} />
                                            </div>
                                        </div>

                                    </div>

                                    <div className='col-md-6'>
                                        <div class="row mb-3">
                                            <label for="inputText" class="col-sm-12 col-form-label">Actual Price</label>
                                            <div class="col-sm-12">
                                                <input type="number" class="form-control" value={bannerData.actual_price}
                                                    onChange={(e) => setBannerData({ ...bannerData, actual_price: e.target.value })} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-md-6'>

                                        <div class="row mb-3">
                                            <label class="col-sm-12 col-form-label">Gender</label>
                                            <div class="col-sm-12">
                                                <select class="form-select" aria-label="Default select example" value={bannerData.gender}
                                                    onChange={(e) => setBannerData({ ...bannerData, gender: e.target.value })} >
                                                    <option value="0" selected>--------Select Gender -------</option>
                                                    <option value="1">Boy</option>
                                                    <option value="2">Girl</option>
                                                    <option value="3">Female</option>
                                                    <option value="3">Male</option>
                                                </select>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='col-md-6'>
                                        <div class="row mb-3">
                                            <label class="col-sm-12 col-form-label">Category</label>
                                            <div className='col-sm-12'>
                                                <select class="form-select" aria-label="Default select example" value={bannerData.category_product}
                                                    onChange={(e) => setBannerData({ ...bannerData, category_product: e.target.value })} >
                                                    <option selected>---------------Select Category----------------</option>

                                                    {
                                                        CateData.map((cateItem) => {
                                                            return cateItem.isActive == 1 ? <option key={cateItem._id} value={cateItem._id}>{cateItem.title}</option> : ""
                                                        })
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-md-6'>
                                        <div class="row mb-3">
                                            <label for="inputText" class="col-sm-12 col-form-label">Sub Category</label>
                                            <div className='col-sm-12'>
                                                <select class="form-select" aria-label="Default select example" value={bannerData.sub_category_product}
                                                    onChange={(e) => setBannerData({ ...bannerData, sub_category_product: e.target.value })}>
                                                    <option selected>------Select Sub Category----------</option>
                                                    {
                                                        SubCateData.map((cateItem) => {
                                                            return cateItem.isActive == 1 ? <option key={cateItem._id} value={cateItem._id}>{cateItem.title}</option> : ""
                                                        })
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                    </div>


                                    <div className='col-md-6'>
                                        <div class="row mb-3">
                                            <label for="inputText" class="col-sm-12 col-form-label">Size</label>
                                            <div className='col-sm-12'>
                                                <select class="form-select" aria-label="Default select example" value={bannerData.size}
                                                    onChange={(e) => setBannerData({ ...bannerData, size: e.target.value })} >
                                                    <option selected>------------Select Size--------------</option>
                                                    <option >XXS</option>
                                                    <option >XS</option>
                                                    <option >S</option>
                                                    <option >M</option>
                                                    <option >L</option>
                                                    <option >XL</option>
                                                    <option >XXL</option>
                                                    <option >XXXL</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div class="row mb-3">
                                            <label for="inputText" class="col-sm-12 col-form-label">Quantity</label>
                                            <div class="col-sm-12">
                                                <input type="number" class="form-control" value={bannerData.quantity}
                                                    onChange={(e) => setBannerData({ ...bannerData, quantity: e.target.value })} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-md-6'>
                                        <div class="row mb-3">
                                            <label for="inputText" class="col-sm-12 col-form-label">Fabric</label>
                                            <div className='col-sm-12'>
                                                <select class="form-select" aria-label="Default select example" value={bannerData.fabric}
                                                    onChange={(e) => setBannerData({ ...bannerData, fabric: e.target.value })} >
                                                    <option selected>-----------Select Fabric-----------</option>
                                                    {
                                                        Fab.map((cateItem) => {
                                                            return cateItem.is_Active == 1 ? <option key={cateItem._id} value={cateItem._id}>{cateItem.fabric_name}</option> : ""
                                                        })
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div class="row mb-3">
                                            <label for="inputText" class="col-sm-12 col-form-label">Dimension</label>
                                            <div class="col-sm-12">
                                                <input type="text" class="form-control" value={bannerData.dimension}
                                                    onChange={(e) => setBannerData({ ...bannerData, dimension: e.target.value })} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div class="row mb-3">
                                            <label for="inputText" class="col-sm-12 col-form-label">Color</label>

                                            <Multiselect
                                                options={options}
                                                selectedValues={selectedValues._id}
                                                onSelect={onSelect}
                                                onRemove={onRemove}
                                                displayValue="Color_name"
                                            />

                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div class="row mb-3">
                                            <label for="inputText" class="col-sm-12 col-form-label">Wash Care</label>
                                            <div className='col-sm-12'>
                                                <select class="form-select" aria-label="Default select example" value={bannerData.wash_care}
                                                    onChange={(e) => setBannerData({ ...bannerData, wash_care: e.target.value })} >
                                                    <option value={0} selected>-------------Select Wash Care------------</option>
                                                    <option value={1}>Dry Wash</option>
                                                    <option value={2}>Detergent Wash</option>

                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-md-6'>
                                        <div class="row mb-3">
                                            <label for="inputText" class="col-sm-12 col-form-label">Occasion</label>
                                            <div className='col-sm-12'>
                                                <select class="form-select" aria-label="Default select example" value={bannerData.occasion}
                                                    onChange={(e) => setBannerData({ ...bannerData, occasion: e.target.value })}>
                                                    <option selected>--------------Select Occasion--------------</option>
                                                    {
                                                        Occasion.map((cateItem) => {
                                                            return cateItem.is_Active == 1 ? <option key={cateItem._id} value={cateItem._id}>{cateItem.Occasion_name}</option> : ""
                                                        })
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div class="row mb-3">
                                            <label for="inputText" class="col-sm-12 col-form-label">Out of Stock ?</label>
                                            <div className='col-sm-12'>
                                                <select class="form-select" aria-label="Default select example" value={bannerData.out_of_stock}
                                                    onChange={(e) => setBannerData({ ...bannerData, out_of_stock: e.target.value })} >
                                                    <option selected>-------------Select Out of Stock-----------</option>
                                                    <option >Yes</option>
                                                    <option >No</option>

                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div class="row mb-3">
                                            <label for="inputText" class="col-sm-12 col-form-label">Premium ?</label>
                                            <div className='col-sm-12'>
                                                <select class="form-select" aria-label="Default select example" value={bannerData.premium}
                                                    onChange={(e) => setBannerData({ ...bannerData, premium: e.target.value })} >
                                                    <option selected>----------------Select Premium--------------</option>
                                                    <option >Yes</option>
                                                    <option >No</option>

                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div class="row mb-3">
                                            <label for="inputText" class="col-sm-12 col-form-label">Offer</label>
                                            <div className='col-sm-12'>
                                                <select class="form-select" aria-label="Default select example" value={bannerData.offer}
                                                    onChange={(e) => setBannerData({ ...bannerData, offer: e.target.value })} >
                                                    <option selected>---------------Select Offer ----------</option>
                                                    {
                                                        Offer.map((cateItem) => {
                                                            return cateItem.is_Active == 1 ? <option key={cateItem._id} value={cateItem._id}>{cateItem.Offer_name}</option> : ""
                                                        })
                                                    }

                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div class="row mb-3">
                                            <label for="inputText" class="col-sm-12 col-form-label">Discount</label>
                                            <div className='col-sm-12'>
                                                <select class="form-select" aria-label="Default select example" value={bannerData.discount}
                                                    onChange={(e) => setBannerData({ ...bannerData, discount: e.target.value })}>
                                                    <option selected>--------------Select Discount------------</option>
                                                    {
                                                        Discount.map((cateItem) => {
                                                            return cateItem.is_Active == 1 ? <option key={cateItem._id} value={cateItem._id}>{cateItem.Discount_name}</option> : ""
                                                        })
                                                    }

                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div class="row mb-3">
                                            <label for="inputText" class="col-sm-12 col-form-label">Uniform Type</label>
                                            <div className='col-sm-12'>
                                                <select class="form-select" aria-label="Default select example" value={bannerData.uniform_type}
                                                    onChange={(e) => setBannerData({ ...bannerData, uniform_type: e.target.value })} >
                                                    <option selected>-------------Select Uniform Types -------------</option>
                                                    {
                                                        Uniform.map((cateItem) => {
                                                            return cateItem.is_Active == 1 ? <option key={cateItem._id} value={cateItem._id}>{cateItem.Uniform_type_name}</option> : ""
                                                        })
                                                    }

                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div class="row mb-3">
                                            <label for="inputText" class="col-sm-12 col-form-label">Age Lower Limit</label>
                                            <div class="col-sm-12">
                                                <input type="number" class="form-control" value={bannerData.age_lower_limit}
                                                    onChange={(e) => setBannerData({ ...bannerData, age_lower_limit: e.target.value })} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div class="row mb-3">
                                            <label for="inputText" class="col-sm-12 col-form-label">Age Uper Limit</label>
                                            <div class="col-sm-12">
                                                <input type="number" class="form-control" value={bannerData.age_upper_limit}
                                                    onChange={(e) => setBannerData({ ...bannerData, age_upper_limit: e.target.value })} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div class="row mb-3">
                                            <label for="inputText" class="col-sm-12 col-form-label">Blouse Added</label>
                                            <div className='col-sm-12'>
                                                <select class="form-select" aria-label="Default select example" value={bannerData.blouse_added}
                                                    onChange={(e) => setBannerData({ ...bannerData, blouse_added: e.target.value })} >
                                                    <option selected>---------------Select Blouse Added-----------</option>
                                                    <option >Yes</option>
                                                    <option >No</option>

                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div class="row mb-3">
                                            <label for="inputText" class="col-sm-12 col-form-label">Blouse Dimension</label>
                                            <div class="col-sm-12">
                                                <input type="text" class="form-control" value={bannerData.blouse_dimension}
                                                    onChange={(e) => setBannerData({ ...bannerData, blouse_dimension: e.target.value })} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div class="row mb-3">
                                            <label for="inputText" class="col-sm-12 col-form-label">Blouse Type</label>
                                            <div className='col-sm-12'>
                                                <select class="form-select" aria-label="Default select example" value={bannerData.blouse_type}
                                                    onChange={(e) => setBannerData({ ...bannerData, blouse_type: e.target.value })} >
                                                    <option selected>--------------Select Blouse type--------------</option>
                                                    {
                                                        Blouse.map((cateItem) => {
                                                            return cateItem.is_Active == 1 ? <option key={cateItem._id} value={cateItem._id}>{cateItem.Blouse_name}</option> : ""
                                                        })
                                                    }

                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div class="row mb-3">
                                            <label for="inputNumber" class="col-sm-12 col-form-label">File Upload</label>
                                            <div class="col-sm-12">
                                                <input class="form-control" multiple type="file" id="formFile" onChange={handleFileChange} />
                                            </div>
                                        </div>
                                    </div>


                                    <div className='col-md-12'>
                                        <div class="row mb-3">
                                            <label for="inputText" class="col-sm-12 col-form-label">Product Description</label>
                                            <div class="col-sm-12">
                                                <textarea rows={5} class="form-control" value={bannerData.product_desc}
                                                    onChange={(e) => setBannerData({ ...bannerData, product_desc: e.target.value })}></textarea>
                                            </div>
                                        </div>
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
                            <h5 class="modal-title">Product Update</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                            <div class="row mb-3">
                                <label for="inputText" class="col-sm-12 col-form-label">Banner Title</label>
                                <div class="col-sm-12">
                                    <input type="text" class="form-control" />
                                </div>
                            </div>

                            <label for="basic-url" class="form-label">Your vanity URL</label>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
                                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
                            </div>
                            <div class="row mb-3">
                                <label for="inputNumber" class="col-sm-12 col-form-label">File Upload</label>
                                <div class="col-sm-12">
                                    <input class="form-control" type="file" multiple id="formFile" />
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


            <Navbar />

            <Sidebar />


            <main id="main" class="main">

                <div class="pagetitle">
                    <h1>Product</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li class="breadcrumb-item active">Product</li>
                        </ol>
                    </nav>
                </div>

                <section class="section dashboard">
                    <div className='d-flex justify-content-end mb-5'>
                        <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#ExtralargeModal">
                            Add Product
                        </button>
                    </div>
                    <div class="row">


                        <div class="col-lg-12">
                            <div class="row">




                                <div class="col-12">
                                    <div class="card top-selling overflow-auto">



                                        <div class="card-body pb-0">
                                            <h5 class="card-title">Product Table</h5>

                                            <table class="table table-borderless">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Preview</th>
                                                        <th scope="col">Product Name</th>
                                                        <th scope="col">Online Price</th>
                                                        <th scope="col">Actual Price</th>

                                                        
                                                        <th scope="col">Sub Category</th>

                                                        <th scope="col">Quantity</th>

                                                        <th scope="col">Color</th>
                                                        <th scope="col" colSpan={2}>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {
                                                        data.map((v) => {

                                                            console.log(v.product_Img[0].product_Img)
                                                            return <tr>
                                                                <th scope="row"><a href="#"><img src={v.product_Img[0].product_Img} alt="" /></a></th>
                                                                <td><a href="#" class="text-primary fw-bold">{v.product_name}</a></td>
                                                                <td>{v.Online_price}</td>
                                                                <td class="fw-bold">{v.Actual_price}</td>

                                                              

                                                                <td>{v.product_subcategory}</td>

                                                                <td>{v.quantity}</td>


                                                                <td>{v.colors}</td>


                                                                <td>
                                                                    <button type="button" className={`btn btn-sm ${v.isActive ? 'btn-success' : 'btn-danger'}`} onClick={() => BannerShowFun(v._id, v.isActive)}>
                                                                        {v.isActive ? (
                                                                            <i class="bi bi-eye-fill"></i>// Render this icon when active
                                                                        ) : (
                                                                            <i class="bi bi-eye-slash"></i> // Render this icon when inactive
                                                                        )}

                                                                    </button>

                                                                </td>
                                                                <td>
                                                                    <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#ExtralargeModal2" onClick={() => BannerSingleData(v._id)}>
                                                                        <i class="bi bi-pencil-square"></i>
                                                                    </button>
                                                                </td>

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
                    <ToastContainer />

                </section>

            </main >


        </>
    )
}

export default Product