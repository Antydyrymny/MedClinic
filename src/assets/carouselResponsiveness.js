export const carouselBreakpoints = [
    { breakpoint: 2500, settings: { slidesToShow: '2.8' } },
    { breakpoint: 2400, settings: { slidesToShow: '2.7' } },
    { breakpoint: 2300, settings: { slidesToShow: '2.6' } },
    { breakpoint: 2200, settings: { slidesToShow: '2.5' } },
    { breakpoint: 2100, settings: { slidesToShow: '2.4' } },
    { breakpoint: 2000, settings: { slidesToShow: '2.3' } },
    { breakpoint: 1900, settings: { slidesToShow: '2.2' } },
    { breakpoint: 1800, settings: { slidesToShow: '2.1' } },
    { breakpoint: 1700, settings: { slidesToShow: '2.0' } },
    { breakpoint: 1600, settings: { slidesToShow: '1.9' } },
    { breakpoint: 1500, settings: { slidesToShow: '1.8' } },
    { breakpoint: 1400, settings: { slidesToShow: '1.7' } },
    { breakpoint: 1300, settings: { slidesToShow: '1.6' } },
    { breakpoint: 1200, settings: { slidesToShow: '1.5' } },
    { breakpoint: 1100, settings: { slidesToShow: '1.4' } },
    { breakpoint: 1000, settings: { slidesToShow: '1.3' } },
    { breakpoint: 900, settings: { slidesToShow: '1.2' } },
    { breakpoint: 800, settings: { slidesToShow: '1.1' } },
];
let startSlides = 2.8;
const responsive = [];
for (let i = 2500; i >= 800; i -= 100) {
    responsive.push({
        breakpoint: i,
        settings: { slidesToShow: startSlides.toFixed(1) },
    });
    startSlides -= 0.1;
}
// console.log(responsive);
