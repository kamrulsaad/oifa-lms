import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useSticky = () => {
    const [headerSticky,setHeaderSticky] = useState(false);

    const router = useRouter()

    const stickyHeader = () => {
        if(window.scrollY > (router.pathname === '/' ? 120 : 20)){
            setHeaderSticky(true)
        }
        else{
            setHeaderSticky(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll',stickyHeader)
    },[]);

    return {
        headerSticky,
    }

}

export default useSticky;