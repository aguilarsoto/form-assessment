interface Props {
  imgUrl?: string;
  description?: string;
}


function BandHeader({imgUrl, description = ""}: Props){
 return (
   <>
     <p>
       <img src={imgUrl} alt="band-logo" height="200" />
     </p>
     <div dangerouslySetInnerHTML={{ __html: description }}/>
   </>
 );
}

export default BandHeader;
