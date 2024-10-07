import { RefObject, useEffect, useState } from 'react';

interface IUseHover {
    onMouseOver?: () => void;
    onMouseLeave?: () => void;
}

const useHover = <T extends Element>(ref: RefObject<T>, params: IUseHover) => {

    const [isHovered, setIsHovered] = useState<boolean>(false)

    useEffect(() => {

        const el: T | null = ref.current;

        if (!el) {
            return
        }

        const handleMouseOver = () => {

            setIsHovered(true)

            typeof params.onMouseOver === 'function' && params.onMouseOver()
        }
        
        const handleMouseLeave = () => {

            setIsHovered(false)

            typeof params.onMouseLeave === 'function' && params.onMouseLeave()
        }

        if (el) {
            el.addEventListener('mouseover', handleMouseOver);
            el.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {

            if (el) {
                el.removeEventListener('mouseover', handleMouseOver);
                el.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, [params.onMouseOver, params.onMouseLeave]);

    return isHovered
};

export default useHover;
