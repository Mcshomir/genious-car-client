import './banner.css'
const CaruselBanner = ({ slide }) => {
    const { image, id, prev, next } = slide;


    return (

        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carusel-img'>      <img src={image} alt='' className="w-full rounded-xl" /></div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24 right-5 top-1/4">
                <h1 className='text-6xl text-white'>Affordable <br />Price for car <br />servicing</h1>


            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24 right-5 w-5/12 top-1/2">

                <p className='text-xl text-white '>
                    There are many variations of passages of available, If you are came here to servicing your car,you are be satisfied !
                </p>

            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24 right-5 w-5/12 top-3/4">

                <button className="btn btn-active btn-primary mr-5">Secondary</button>
                <button className="btn btn-outline btn-primary">Secondary</button>


            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-4">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>

    );
};

export default CaruselBanner;