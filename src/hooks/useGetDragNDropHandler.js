import { useState, useEffect } from 'react';
import { addDragNDrop } from '../utils/DragNDrop';

export default function useGetDragNDropHandler(sliderRef, containerRef) {
    const [slidingDragNDropFunc, setSlidingDragNDropFunc] = useState(null);

    useEffect(() => {
        if (sliderRef.current && containerRef.current) {
            setSlidingDragNDropFunc(() =>
                addDragNDrop(sliderRef.current, containerRef.current)
            );
        }
    }, [sliderRef, containerRef]);

    return slidingDragNDropFunc;
}
