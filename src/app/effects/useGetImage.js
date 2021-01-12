import { useEffect } from 'react'
import lozad from 'lozad';
const useGetImage = (imgRef) => {
    useEffect(()=> {
        const option = {
            load: (element) => {
                element.src = element.getAttribute('data-img-src')
            },
            threshold: 0.5,
            rootMargin: '0px 0px 30px 0px', 
        }
        const observer = lozad(imgRef.current, option)
        observer.observe(imgRef.current)
    }, []);
}
export default useGetImage;