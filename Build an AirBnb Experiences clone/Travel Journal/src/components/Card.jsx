export default function Card(props) {
  return (
    <>
      <div className='card'>
        <img
          src={props.item.imageUrl}
          alt='Main card image.'
          className='card-image'
        />
        <div className='card-detail'>
          <div className='map-info'>
            <img src='/map_icon.svg' alt='Map Icon' />
            <span>{props.item.location}</span>
            <a href={props.item.googleMapsUrl}>View on Google Maps</a>
          </div>
          <h2>{props.item.title}</h2>
          <p className='date'>
            <span>{props.item.startDate}</span> -{" "}
            <span>{props.item.endDate}</span>
          </p>
          <p className='description'>{props.item.description}</p>
        </div>
      </div>
      <div className='line' />
    </>
  );
}
