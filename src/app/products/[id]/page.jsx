const DynamicPage = ({params, searchParams}) => {
    console.log(searchParams)
    return(
        <div>
             <p> This is dynamic page {params?.id}</p>
             <p>Search by: {searchParams?.category}</p>
        </div>
    )}
export default DynamicPage;