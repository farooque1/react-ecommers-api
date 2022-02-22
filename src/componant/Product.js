import React,{useEffect,useState} from 'react'
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

function Product() {

const [data,setData]=useState([]);
const [filter, setfilter] = useState(data);
const [loading, setloading] = useState(false);

useEffect(() => {

    const getproduct= async ()=>{
        setloading(true);
        const response =await fetch("https://fakestoreapi.com/products");
            setData(await response.clone().json());
            setfilter(await response.json());
            setloading(false);
            //console.log(filter);
        };
        getproduct();
        },[]);


    const d={
        opacity:"0.5",
        backgroundColor:"black",
    }
    const style1={
        marginLeft: "0.5rem",
      }


      const filterproduct= (cat) =>{
          const updatelist = data.filter((x)=>x.category===cat);
          setfilter(updatelist);
      }
      const Loading = () => {
        return(
            <>
                <div className='col-md-6'>
                <Skeleton height={400} />    
                </div>            
                <div className="col-md-6" style={{lineHeight:2}}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} />
                    <Skeleton height={50} width={100} style={{marginLeft:6}} />
                </div>
            </>
        )  

      }

      const ShowProducts = () => {
    return (
    <>
        <div className='container my-1 py-2'>
            <div className='row'>
                <div className='col-12'>
                    <h1 className='text-center fw-bloder display-6'>LATEST PRODUCT</h1>
                       <hr style={d} />     
                </div>
            </div>
            <div className='justify-content-center mb-3 mt-5'>
                <button className='btn btn-outline-dark' style={style1} onClick={()=>setfilter(data)}>All</button>
                <button className='btn btn-outline-dark' style={style1} onClick={()=>filterproduct("men's clothing")}>Men's</button>
                <button className='btn btn-outline-dark' style={style1} onClick={()=>filterproduct("women's clothing")}>Women's</button>
                <button className='btn btn-outline-dark' style={style1} onClick={()=>filterproduct("electronics")}>Electronic</button>
                <button className='btn btn-outline-dark' style={style1} onClick={()=>filterproduct("jewelery")}>Jewelery</button>
            </div>
            </div>
        {filter.map((product)=>{
            
            return(
            <div className="col-md-3 mb-4">
                <div  key={product.id}>
            <div class="card h-100 text-center p-4">
                <img class="card-img-top" src={product.image} alt={product.title} height="250px" />
                <div class="card-body">
                <h5 class="card-title ">{product.title.substring(0,20)}...</h5>
                <NavLink to={`Products/${product.id}`} className='btn btn-outline-dark' style={style1}>
                Buy Now </NavLink>
                </div>
            </div>
            </div>
            </div>
            );
        })}
    </>
  )
};

return (

    <div>
      <div className="container my-5 py-5">

        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}


export default Product;
