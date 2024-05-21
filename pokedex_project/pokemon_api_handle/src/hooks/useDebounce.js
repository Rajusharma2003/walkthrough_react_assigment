// The useDebounce hook is used for interduce the delay in your input search to prevent the high network call.

function useDebounce(cb , delay = 2000) {

    let prvTime;
    return (...args) => {
    
        console.log(args);
        clearTimeout(prvTime)
        prvTime = setTimeout( () => {
            cb(...args)
            
        },delay)

    }

}


export default useDebounce