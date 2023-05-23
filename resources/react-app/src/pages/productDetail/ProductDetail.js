import React, { useState, useEffect, useRef } from "react";
import Banner from "../../components/banner/Banner";
import productBanner from "../../assets/product.png";
import axiosClient from "../../utils/axiosClient";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Loading from "../../components/loading/Loading";
import ImageGallery from "react-image-gallery";
import { Pagination, Navigation } from "swiper";
import { AiOutlineClose } from "react-icons/ai";
import "./product.css";
import { useParams } from "react-router-dom";

function ProductDetail() {
    const slug = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [imageArray, setImageArray] = useState();
    const [modal, setModal] = useState(false);

    const getProductHandler = async () => {
        await axiosClient
            .get(`/product-detail/${slug.slug}`)
            .then(function (response) {
                setData(response.data);
                setLoading(true);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(() => {
        getProductHandler();
    }, []);

    const images = [
        {
            original: "https://picsum.photos/id/1018/1000/600/",
            thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
            original: "https://picsum.photos/id/1015/1000/600/",
            thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
            original: "https://picsum.photos/id/1019/1000/600/",
            thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
    ];
    return !loading ? (
        <Loading />
    ) : (
        <>
            {modal && (
                <div className="fixed top-0 left-0 right-0 bottom-0 bg-black flex justify-center items-center">
                    <AiOutlineClose
                        className="text-white absolute top-8 right-8 text-4xl cursor-pointer z-50"
                        onClick={() => setModal(false)}
                    />
                    <Swiper
                        pagination={{
                            type: "progressbar",
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {data.image &&
                            data.image.map((item) => (
                                <SwiperSlide>
                                    <div className="w-1/4 max-xl:w-2/4 max-md:w-3/4">
                                        <img
                                            className="w-full h-[500px] object-cover max-md:h-[300px]"
                                            src={item.original}
                                            alt="as"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        {data.file &&
                            data.file.map((item) => (
                                <SwiperSlide>
                                    <video width="400" height="800" controls>
                                        <source
                                            src={item.original}
                                            type="video/mp4"
                                        />
                                        Your browser does not support the video
                                        tag.
                                    </video>
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            )}
            {!modal && (
                <>
                    <Banner image={productBanner} title={data.title} />

                    <div className="w-full flex justify-center items-center my-24 max-md:my-10">
                        <div className="w-full px-48 max-xl:px-24 max-lg:px-8 max-sm:px-1">
                            <div className="flex justify-center items-center my-12 w-11/12 max-2xl:w-full max-sm:flex-col">
                                <div className="w-1/4 max-2xl:w-full cursor-pointer">
                                    <img
                                        className="w-full h-72 object-cover"
                                        onClick={() => setModal(true)}
                                        src={data?.image[0].original}
                                        alt="Product"
                                    />
                                </div>
                                <div className="w-3/4 max-2xl:w-full min-h-[400px] flex justify-center items-start flex-col shadow shadow-neutral-300 px-14 cursor-pointer max-sm:py-5 max-md:px-5">
                                    <p className="text-xl font-bold">
                                        {data.title}
                                    </p>
                                    <p className="text-base font-medium text-stone-900 my-1">
                                        {data.description}
                                    </p>
                                    <p className="text-lg font-bold text-[#ffa800]">
                                        Prosesler:
                                    </p>
                                    <p
                                        className="text-base font-medium text-stone-900 my-1"
                                        dangerouslySetInnerHTML={{
                                            __html: data.process,
                                        }}
                                    />
                                    <p className="text-lg font-bold text-[#ffa800]">
                                        Teknik Özellikler
                                    </p>
                                    <p
                                        className="text-base font-medium text-stone-900 my-1"
                                        dangerouslySetInnerHTML={{
                                            __html: data.technical_info,
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default ProductDetail;
