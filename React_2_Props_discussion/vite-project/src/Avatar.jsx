
// function Avatar(props){
function Avatar({src , width , height , children}){  // destructure   
    return (
        <>

        <img src={src} width={width}  height={height}/>
        {children}

        </>
    )
}


export default Avatar