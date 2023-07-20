import { throttle } from './throttle';

export function addDragNDrop(slider, container) {
    return function (event) {
        event.preventDefault();
        const shiftX = event.clientX - slider.getBoundingClientRect().left;
        const minLeft = container.getBoundingClientRect().right - slider.offsetWidth;

        const onPointerMoveThrottled = throttle(onPointerMove, 50);

        document.addEventListener('pointermove', onPointerMoveThrottled);
        document.addEventListener('pointerup', onPointerUp);

        function onPointerMove(event) {
            let newLeft = event.clientX - shiftX - container.getBoundingClientRect().left;
            if (newLeft < minLeft) newLeft = minLeft;
            if (newLeft > 0) newLeft = 0;
            slider.style.left = newLeft + 'px';
        }

        function onPointerUp() {
            document.removeEventListener('pointermove', onPointerMoveThrottled);
            document.removeEventListener('pointerup', onPointerUp);
        }
    };
}
