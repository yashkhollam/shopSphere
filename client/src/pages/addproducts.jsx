import React, { useEffect, useRef, useState } from "react";
import styles from "../css/addproduct.module.css";
import { AddimageIcon } from "../library/icons";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { uploadprodthunk } from "../components/redux/features/productSlice.js";

function Addproducts() {
  const dispatch = useDispatch();
  const ref=useRef()
  const [imgpreview, setImgpreview] = useState(null);
  const [selectedcategory, setseceltedcategory] = useState("");
  const [formdata, setFormdata] = useState({
    name: "",
    price: "",
    discountprice:"",
    description: "",
    category: "",
    subcategory: "",
    brand: "",
    stocks: "",
    image: "",
  });
  const handleform = (e) => {
    const { files, name, value } = e.target;
    if (files) {
      const imgurl = URL.createObjectURL(files[0]);
      setImgpreview(imgurl);

      setFormdata({ ...formdata, [name]: files[0] });
      console.log({ ...formdata, [name]: files[0] });
    } else {
      setFormdata({ ...formdata, [name]: value });
      console.log({ ...formdata, [name]: value });
    }

    if (name === "category") setseceltedcategory(value);
    // setFormdata({...formdata,subcategory:""})
  };

  const categoryData = {
    MobilesTablets: ["Smartphones", "Tablets", "Accessories"],
    LaptopsComputers: [
      "Gaming Laptop",
      "Business Laptop",
      "computers Gaming",
      "computers Business",
    ],

    AudioDevices: ["Headphones", "Earbuds", "Bluetooth Speakers", "Soundbars"],
    SmartGadgets: [
      "Smart Watches",
      "Fitness Bands",
      "Smart Home Devices",
      "VR Headsets",
    ],
    Gamings: [
      "Gaming Consoles",
      "Controllers",
      "Gaming Mouse & Keyboard",
      "Gaming Chairs",
    ],
  };

  // const handlecategory=(e)=>{

  // }

  const form = new FormData();
  form.append("name", formdata.name);
  form.append("price", formdata.price);
  form.append("discountprice", formdata.discountprice);
  form.append("description", formdata.description);
  form.append("category", formdata.category);
  form.append("subcategory", formdata.subcategory);
  form.append("brand", formdata.brand);
  form.append("stocks", formdata.stocks);
  form.append("image", formdata.image);

  // for (let key in formdata) {
  //   form.append(key, formdata[key]);
  // }  //optional

  const submitform = async (e) => {
    e.preventDefault();
    try {

      // let form=new FormData();

      // for(let key of formdata){
      //    form.append(key,formdata[key])
      // }
      const res = await dispatch(uploadprodthunk(form)).unwrap();
      const { message } = res;
      toast.success(message);

      setFormdata({
        name: "",
        price: "",
    discountprice:"",
        description: "",
        category: "",
        subcategory: "",
        brand: "",
        stocks: "",
        image: "",
      });

      ref.current.value="";
      setImgpreview(null)
      
    } catch (err) {
      toast.error(err);
      console.log(err);
    }
  };

  return (
    <>
      <div className={`container-fluid ${styles.form_wrapper}`}>
        <form action="" className={styles.form_container} onSubmit={submitform}>
          <h1 className="text-center mt-4 ">Add Products</h1>
          <div className="input-cont mt-3">
            <label className="form-label ">name :</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formdata.name}
              onChange={handleform}
            />
          </div>

          <div className="input-cont mt-3">
            <label className="form-label">price :</label>
            <input
              type="number"
              className="form-control"
              name="price"
              value={formdata.price}
              onChange={handleform}
            />
          </div>

           <div className="input-cont mt-3">
            <label className="form-label">discounted price :</label>
            <input
              type="number"
              className="form-control"
              name="discountprice"
              value={formdata.discountprice}
              onChange={handleform}
            />
          </div>

          <div className="input-cont mt-3">
            <label className="form-label">description :</label>
            <input
              type="text"
              className="form-control"
              name="description"
              value={formdata.description}
              onChange={handleform}
            />
          </div>

          <div className="input-cont mt-3  d-flex">
            <div className="row">
              <div className=" col-12 col-lg-6 ">
                <label className="form-label">category :</label>

                <select
                  name="category"
                  id=""
                  className="form-select"
                  value={formdata.category}
                  onChange={handleform}
                >
                
                 <option value="" disabled className="form-option">
                    select category
                  </option>

                  <option value="MobilesTablets" className="form-option">
                    Mobile & Tablets
                  </option>

                  <option value="LaptopsComputers">Laptops & Computers</option>

                  <option value="AudioDevices">Audio Devices</option>

                  <option value="SmartGadgets">Smart Gadgets</option>

                  <option value="Gamings">Gamings</option>
                </select>
              </div>

           

              <div className="col-12 col-lg-6 mt-3 m-lg-0">
                <label className="form-label">sub category :</label>
                <select
                  name="subcategory"
                  id=""
                  className="form-select"
                  value={formdata.subcategory}
                  onChange={handleform}
                >
                  <option value="" disabled>select Subcategory</option>
                  {categoryData[selectedcategory]?.map((subcat, index) => (
                    <option key={index}>{subcat}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

           {
              
               (formdata.category==="MobilesTablets"|| formdata.category==="LaptopsComputers") &&(
               <div className="d-flex  mt-4  justify-content-center d-md-block">

              <div className="w-50 ps-5 " >
                <label className="form-label bg-dark text-light p-2 rounded">RAM :</label>


             <div className="form-check">
                  <input type="radio"
                         className="form-check-input"
                         name="radioDefault" />
                  <label className="form-check-label">4GB </label>
                 </div>


                 <div className="form-check">
                  <input type="radio"
                         className="form-check-input"
                         name="radioDefault" />
                  <label className="form-check-label">8GB</label>
                 </div>

                  <div className="form-check">
                  <input type="radio"
                         className="form-check-input"
                         name="radioDefault" />
                  <label className="form-check-label">12GB</label>
                 </div>

                  
                  <div className="form-check">
                  <input type="radio"
                         className="form-check-input"
                         name="radioDefault" />
                  <label className="form-check-label">16GB</label>
                 </div>
              </div>
              
            <div className="w-50 ps-5">
                
                <label className="form-label bg-dark text-light p-2 rounded">Storage :</label>


             <div className="form-check">
                  <input type="radio"
                         className="form-check-input"
                         name="storageRadio" />
                  <label className="form-check-label">64GB</label>
                 </div>


                 <div className="form-check">
                  <input type="radio"
                         className="form-check-input"
                         name="storageRadio" />
                  <label className="form-check-label">128GB</label>
                 </div>

                  <div className="form-check">
                  <input type="radio"
                         className="form-check-input"
                         name="storageRadio" />
                  <label className="form-check-label">256GB</label>
                 </div>

                  
                  <div className="form-check">
                  <input type="radio"
                         className="form-check-input"
                         name="storageRadio" />
                  <label className="form-check-label">512GB</label>
                 </div>
        
            </div>
               

              </div>
              )
           
           }
             

          <div className="input-cont mt-3">
            <label className="form-label">brand :</label>
            <input
              type="text"
              className="form-control"
              name="brand"
              value={formdata.brand}
              onChange={handleform}
            />
          </div>

          <div className="input-cont mt-3">
            <label className="form-label">stocks :</label>
            <input
              type="number"
              className="form-control"
              name="stocks"
              value={formdata.stocks}
              onChange={handleform}
            />
          </div>

          <div className="input-cont mt-3">
            <label className="form-label">image :</label>
            <div className={styles.imgcontainer}>
              <img
                src={imgpreview}
                alt="img-preview"
                className={`img-fluid ${styles.imgpreview}`}
                
              />

              <input
                type="file"
                id="inputimage"
                className="form-control d-none"
                name="image"
                onChange={handleform}
                 ref={ref}
              />

              <label htmlFor="inputimage">
                <AddimageIcon className={styles.addimageIcon} />
              </label>
            </div>
          </div>

          <button
            className="btn bg-success text-light d-block m-auto mb-5"
            type="submit"
          >
            sumbit
          </button>
        </form>
      </div>
    </>
  );
}

export default Addproducts;
