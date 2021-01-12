import { useEffect } from 'react'
import lozad from 'lozad';
const useGetMp3Audio = (audioRef) => {
    useEffect(()=> {
        const option = {
            load: (element) => element.src = element.getAttribute('data-src'),
            threshold: 0.5,
            rootMargin: '0px 0px 30px 0px', 
        }
        const observer = lozad(audioRef.current, option)
        observer.observe(audioRef.current);
    }, []);
}
export default useGetMp3Audio;