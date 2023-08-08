import { useState, useEffect } from 'react';

export default function useGetDocumentHeight() {
    const [documentHeight, setDocumentHeight] = useState(document.body.offsetHeight);

    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                setDocumentHeight(entry.target.offsetHeight);
            }
        });

        resizeObserver.observe(document.body);

        return () => {
            resizeObserver.unobserve(document.body);
        };
    }, []);

    return documentHeight;
}
