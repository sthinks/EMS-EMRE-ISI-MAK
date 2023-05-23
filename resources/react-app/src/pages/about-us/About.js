import React, { useState, useEffect } from "react";
import AboutBanner from "../../assets/about.png";
import Banner from "../../components/banner/Banner";
import axiosClient from "../../utils/axiosClient";
import Loading from "../../components/loading/Loading";
function About() {
    const [referance, setReferance] = useState();
    const [loading, setLoading] = useState(false);
    const getRefHandler = async () => {
        await axiosClient
            .get(`/referance`)
            .then(function (response) {
                setReferance(response.data);
                setLoading(true);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(() => {
        getRefHandler();
    }, []);
    return !loading ? (
        <Loading />
    ) : (
        <>
            <Banner image={AboutBanner} title="Kurumsal" />
            <div className="w-full flex justify-center  my-24 max-sm:mt-5 flex-col">
                <div className="w-[80%] h-auto flex items-center shadow-md shadow-neutral-200 max-xl:w-full  max-sm:flex-col mt-12">
                    <div className="w-2/6 h-72 bg-[#fdab0c] flex justify-center items-center max-lg:h-96 max-sm:w-full max-sm:h-44">
                        <p className="text-4xl font-bold max-md:text-2xl">
                            Kurumsal
                        </p>
                    </div>
                    <div className="w-4/6 h-72 bg-white flex justify-start items-start flex-col p-5 max-lg:h-96 max-sm:h-auto max-sm:p-1 max-sm:w-full max-sm:px-2">
                        <p className="text-base font-bold text px-5">
                            Firmamız EMS EMRE ISI MAKİNALARI İMALAT SAN. TİC.
                            LTD. ŞTİ. olarak 1991 senesinden beri ENDÜSTRİYEL
                            FIRIN İMALATI alanında faaliyet göstermektedir.
                        </p>
                        <ul className="mt-5 text-base font-medium px-5">
                            <li>-Isıl İşlem Tesisleri</li>
                            <li>-Tav Fırınları</li>
                            <li>-Atmosfer Kontrollü Fırınlar</li>
                            <li>-Özel Proses Fırınları</li>
                            <li>-Kontinü Isıl İşlem Fırınlar</li>
                            <li>
                                -Metal Sanayinde Kurşun, Zamak, Alüminyum ve
                                Pirinç ergitme fırınları,
                            </li>
                            <li>
                                -Sıcak şekillendirme fırınları yapılmakta ve her
                                türlü bakım onarım servisi verilmektedir.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="w-full h-auto flex items-center shadow-md shadow-neutral-200   max-sm:flex-col mt-12">
                    <div className="w-1/4 h-96 bg-[#fdab0c] flex justify-center items-center max-lg:h-96 max-sm:w-full max-sm:h-44 max-xl:w-2/4">
                        <p className="text-4xl font-bold px-10 text-center max-md:text-2xl max-sm:px-0">
                            MİSYONUMUZ VE VİZYONUMUZ
                        </p>
                    </div>
                    <div className="w-3/4 max-xl:w-2/4 h-96 bg-[#fdab0c] flex justify-start items-start  p-5 max-md:h-96 max-sm:h-auto max-lg:p-1 max-sm:w-full max-sm:px-2 max-sm:flex-col max-sm:flex max-sm:justify-center max-sm:items-center">
                        <div className="w-full h-full flex justify-start items-center max-sm:w-full">
                            <div className="w-[75%] px-5 max-sm:w-full max-sm:my-3">
                                <p className="text-lg font-bold my-2 max-md:text-2xl">
                                    MİSYONUMUZ
                                </p>
                                <p className="font-medium text-stone-700">
                                    Farklılıklar yaratarak dünya kalite ve
                                    standartları üzerinde ürün ve hizmet sunarak
                                    kalıcı üstünlükler sağlamak.
                                </p>

                                <p className="text-lg font-bold my-2">
                                    VİZYONUMUZ
                                </p>
                                <p className="font-medium text-stone-700">
                                    Üstün iş ahlakı ile dürüst çalışma ilkeleri
                                    doğrultusunda rekabetçi ve sürdürülebilir
                                    potansiyeli olan portföyü ülke ekonomisine
                                    değer katacak ve farklılıklar yaratacak
                                    şekilde yönetmek.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[80%] h-auto flex items-center shadow-md shadow-neutral-200 max-xl:w-full  max-sm:flex-col mt-12">
                    <div className="w-2/6 h-96 bg-[#fdab0c] flex justify-center items-center max-md:h-96 max-sm:w-full max-sm:h-44">
                        <p className="text-4xl font-bold text-center max-md:text-2xl">
                            İŞ ORTAKLARIMIZ
                        </p>
                    </div>
                    <div className="w-4/6 h-96 bg-white flex justify-start items-start  p-5 max-md:h-96 max-sm:h-auto max-lg:p-1 max-sm:w-full max-sm:px-2 max-sm:flex-col max-sm:flex max-sm:justify-center max-sm:items-center">
                        <div className="w-5/6 max-sm:w-full">
                            <div className=" flex flex-wrap justify-center">
                                {referance?.map((item, i) => (
                                    <img
                                        className="w-36 max-xl:w-32 max-md:w-28"
                                        src={item.image}
                                        alt="referance"
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="w-1/6 h-full flex justify-end flex-col max-sm:w-auto">
                            <a
                                className="text-xl font-normal border-b-2 border-orange-200 cursor-pointer hover:scale-[1.08] transition delay-150 text-center"
                                href="/referanslar"
                            >
                                Tüm Referanslar
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
