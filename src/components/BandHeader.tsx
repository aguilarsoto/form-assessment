interface Props {
  date?: number;
  location?: string;
}

function BandHeader({date, location}: Props){
  const prettyDate = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric'
}).format(date);

  return (
   <>
     <p>{prettyDate}</p>
     <p>{location}</p>
   </>
 );
}

export default BandHeader;
