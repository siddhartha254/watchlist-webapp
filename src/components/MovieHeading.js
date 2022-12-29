const MovieHeading = (props) => {

    const text=props.heading;

    return (
        <div className="heading">
            <h2>{text}</h2>
        </div>
    );
}
 
export default MovieHeading;