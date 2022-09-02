export const GifItem = ({ title, url }) => {
  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3  my-1">
        <div className="card">
            <div className="card-header">
                <img src={ url } alt={ title } />
            </div>
            <div className="card-footer">
                <h5>{ title }</h5>
            </div>
        </div>
    </div>
  )
}
