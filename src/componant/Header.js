import React from 'react'

const Header = () => {

    const style1={
        marginRight:"500px",

    }
    return (
    
    <div>
        <div class="card bg-dark text-white">
        <img class="card-img" src="/bg.jpg" alt="bg" height="580px" />
        <div class="card-img-overlay d-flex flex-column justify-content-center">
            <div class="container">   
            <h4 class="card-title display-4 fw-bolder" style={style1}>MAX COLLECTION</h4>
            <h4 class="card-title display-4 fw-bolder" style={style1}>NEW SEASON ARRIVALS</h4>
            <p class="card-text lead fs-2" style={style1}>CHECK OUT ALL THE TRENDS</p>
            </div>
        </div>
        </div>
     </div>
  )
}

export default Header;