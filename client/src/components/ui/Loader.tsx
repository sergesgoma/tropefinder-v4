import React from 'react';
import LoaderSVG from "../../assets/img/spinner.svg";

export default function Loader() {
    return(
     <div>
        <img src={LoaderSVG} alt="loader"/>
     </div>   
    )
}