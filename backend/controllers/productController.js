import {v2 as cloudinary} from "cloudinary"
import productModel from "./../models/productModel.js"
    const addProduct = async (req, res) => {
        try {
             const { name, price, description, category,sizes,subCategory, bestSeller}=req.body
             const image1=req.files.image1 && req.files.image1[0]
             const image2=req.files.image1 && req.files.image2[0]
             const image3=req.files.image1 && req.files.image3[0]
             const image4=req.files.image1 && req.files.image4[0]

             //Now upload images to clodinary to get imageURLS
             const images=[image1,image2,image3,image4].filter((img) => img !== undefined)
             const imagesUrl=await Promise.all(
                images.map(async (img) => {
                    const result=await cloudinary.uploader.upload(img.path,{resource_type: "image"})
                    return result.secure_url
                })
             )
             const productData={
                name,
                description,
                price:Number(price),
                images: imagesUrl,
                category,
                subCategory,
                sizes:JSON.parse(sizes),//convert string to array
                bestSeller:bestSeller==="true"? true : false,
                date: Date.now()
             }

             console.log(productData);
             const product=new productModel(productData)
             await product.save() //added to database

             res.json({success:true,message: "Product added successfully",})

        } catch (error) {
            console.log(error);
            res.json({
                success: false,
                message: "Error in adding product",
                error: error.message
            })
            
        }
        
        
    }
    const listProduct = async (req, res) => {
        try {
            const products=await productModel.find({})
            res.json({success: true,message: "Product list",products})    
        } catch (error) {
            console.log(error);
            res.json({
                success: false,
                message: "Error in adding product",
                error: error.message
            }) 
        }
    }
    const removeProduct = async (req, res) => {
        try {
            const deletedProduct=await productModel.findByIdAndDelete(req.body.id)
            console.log(deletedProduct);
            res.json({success: true,message: "Product removed successfully",})
            
        } catch (error) {
            console.log(error);
            res.json({
                success: false,
                message: "Error in removing product",
                error: error.message
            })
        }

    }
    const getSingleProductInfo = async (req, res) => {

        try {
            const {productid}=req.body;
            const product = await productModel.findById(productid)
            console.log(product);
            res.json({success: true,message: "Product info now available",product})
            
        } catch (error) {
            console.log(error);
            res.json({
                success: false, 
                message: "Error in getting product",
                error: error.message
            })
            
        }

    }

    export {addProduct, listProduct, removeProduct, getSingleProductInfo}