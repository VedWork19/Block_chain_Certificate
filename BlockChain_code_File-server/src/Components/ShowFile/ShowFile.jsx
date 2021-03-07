import React, { useState ,useEffect} from 'react'; 
import { Document, Page,pdfjs } from "react-pdf"; 
import "./showFile.css";  


export default function Test(params) { 
  
    
  
  pdfjs.GlobalWorkerOptions.workerSrc =  
  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`; 
  const [numPages, setNumPages] = useState(null); 
  const [pageNumber, setPageNumber] = useState(1); 
  
  
  document.addEventListener("contextmenu", (event) => { 
    event.preventDefault(); 
  }); 
    
  
  function onDocumentLoadSuccess({ numPages }) { 
    setNumPages(numPages); 
    setPageNumber(1); 
  } 
  

  

  useEffect(()=>{
    // console.log(`../../Files/pdf/${url}`)
  },[])
  
  return ( 
    <> 
    <div className="main showFile"> 
      <Document 
        file={`/Files/Pdf/${params.url}`}
        onLoadSuccess={onDocumentLoadSuccess} 
      > 
        <Page pageNumber={pageNumber} /> 
      </Document> 
      <div className="buttonIsShow">
          <button onClick={()=>{}} className="btn icon_btn"><a  href={`/Files/Pdf/${params.url}`} target="_blank" download><i className="large material-icons">get_app</i><a  type="button">Download pdf</a></a></button>
      </div>
      </div> 
    </> 
  ); 
}

