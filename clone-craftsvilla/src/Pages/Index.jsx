import styled from "@emotion/styled"
import './Home.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useState,useEffect } from 'react';

const data1 = [
    {
        "id": 1,
        "image": "http://lh3.googleusercontent.com/9ObthFmAMkQ-gkpSgE5D52_wVa7gTGDQNK9aSy5VLW617hjuK_8xvPJLPJGmGCrGcF-od6atsAAYahxEBQGB2UE4JJaN",
        "title": "MANISHAS BAKERY 24x7",
        "distance": "Distance 0.94KM"
    },
    {
        "id": 2,
        "image": "http://lh3.googleusercontent.com/mcQJiWzBipp4HtPe2PU5J7ylbwMaEWuNRwZ99vJDdxy_R89qvwzrdZ3CjzVSf4LjpatDmWpkIeJiMKY1ZwadT0vDzfQV",
        "title": "PUNJABI GRILL",
        "distance": "Distance 0.94KM"
    },
    {
        "id": 3,
        "image": "http://lh3.googleusercontent.com/P4O79x1nhcCe64dhl6v4HBMPrSuNf-0PGU5nuKYJ2QuDBg6ZpoGw38kv3DZWXfTzxf_KsAt80stKncDCx8oQwi4XgQ",
        "title": "DA PIZZA YUM",
        "distance": "Distance 0.99KM"
    },
    {
        "id": 4,
        "image": "https://lh3.googleusercontent.com/wZzuX6nuUmXmbkAa8ccmAdhGxACmo1ys9-MUcop5Gw9MZU-PfU2vprnFt4qOwUz0B5Hsd2km3EfvuxkfFdcYfX4oLdoZAFMQccBEEARz",
        "title": "THE GOOD BOWL",
        "distance": "Distance 1.12KM"
    },
    {
        "id": 5,
        "image": "https://www.uengage.in/images/addo/logos/image-1670933552.jpg",
        "title": "SCOOP ZONE RESTAURANT",
        "distance": "Distance 0.57KM"
    },
    {
        "id": 6,
        "image": "https://lh3.googleusercontent.com/oaXVpSfGQNsqx8-_TvrbRaPdgOLdbI52-dZlEzeXqU1c0N-fG3n_iZ23_wvhjSfopSXjkG1OSOMTb_WFNmS2MKApCiCzVcc4-zdTeBV5",
        "title": "CHILLI PILLI",
        "distance": "Distance 0.82KM"
    },
    {
        "id": 7,
        "image": "http://lh3.googleusercontent.com/D3YM0j5qwFL6YXNBpS1yOfVCTC_r-NmdrTtZBeIJmXCUKHT9s5yB7-ypmHnjA2ZfxziVtOk91VRczV990acaoCoj5i3QQ5bfpRvW0P4",
        "title": "NYC FooDIES",
        "distance": " Distance 0.93KM"
    },
    {
        "id": 8,
        "image": "http://lh3.googleusercontent.com/dnc-pYvp-dz8zyltQhoJ85PUVZtcD_8I1RQKLCI7SrbrEPDrbMXlHzLTdXkaS9pa_ci1YD6wqXipEQAhYyQ_-nWV-Dk",
        "title": "BEAR BURGER",
        "distance": "Distance 1.31KM"
    }
]
const data2 = [{ id: 1, img: "https://cdn.plotch.io/image/upload/C/V/1676285382_MS5wbmc=.png" }
    , { id: 2, img: "https://cdn.plotch.io/image/upload/C/V/1676285387_Mi5wbmc=.png" },
{ id: 3, img: "https://cdn.plotch.io/image/upload/C/V/1676285392_My5wbmc=.png" },
{ id: 4, img: "https://cdn.plotch.io/image/upload/C/V/1676285398_NC5wbmc=.png" },
{ id: 5, img: "https://cdn.plotch.io/image/upload/C/V/1676285404_NS5wbmc=.png" },
{ id: 6, img: "https://cdn.plotch.io/image/upload/C/V/1676285409_Ni5wbmc=.png" },
{ id: 7, img: "https://cdn.plotch.io/image/upload/C/V/1676285414_Ny5wbmc=.png" },
{ id: 8, img: "https://cdn.plotch.io/image/upload/C/V/1676285421_OC5wbmc=.png" }]

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const responsive2 = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const data3 = [{ id: 1, "image": "https://cdn.plotch.io/image/upload/C/V/1671110234_SG9tZWRlY29yLnBuZw==.png" },
{ id: 2, "image": "https://cdn.plotch.io/image/upload/C/V/1671110241_NS5wbmc=.png" },
{ id: 3, "image": "https://cdn.plotch.io/image/upload/C/V/1671110248_Ni5wbmc=.png" },
{ id: 4, "image": "https://cdn.plotch.io/image/upload/C/V/1671110264_My5wbmc=.png" }
]

function Home() {
    const images = [
        "https://cdn.plotch.io/image/upload/C/V/1671110178_SG9tZWRlY29yLnBuZw==.png",
        "https://cdn.plotch.io/image/upload/C/V/1676097252_Q1JBRlRTVklMTEEyLU5FV0hFUk9CQU5ORVJTLnBuZw==.png",
        "https://cdn.plotch.io/image/upload/C/V/1676286917_Q1JBRlRTVklMTEEyLU5FV0hFUk9CQU5ORVJTLnBuZw==.png",
        "https://cdn.plotch.io/image/upload/C/V/1671110155_NC5wbmc=.png",
        "https://cdn.plotch.io/image/upload/C/V/1671110161_Mi5wbmc=.png"
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentIndex === images.length - 1) {
                setCurrentIndex(0);
            }
            else {
                setCurrentIndex(currentIndex + 1);
            }
        }, 2000)

        return () => clearInterval(intervalId);
    }, [currentIndex])

    // console.log(currentIndex)
    return (
        <DIV>
        <div>
            <br />
            <h3><span>Stores Near Me</span></h3>
            <Carousel responsive={responsive2}>
                {data1.map((item) => (
                    <div className='landing1' key={item.id}>
                        <img width="20%" src={item.image} alt="not loaded" />

                        <p>{item.title}</p>
                        <p>{item.distance}</p>

                    </div>
                ))}
            </Carousel>
            <h3><span>Stores By Category</span></h3>
            <Carousel responsive={responsive}>
                {data2.map((item) => (
                    <div style={{ marginTop: "20px" }} key={item.id}>
                        <img width="85%" src={item.img} alt="not loaded" />
                    </div>
                ))}
            </Carousel>;
            <div>
                <img width="100%" src={images[currentIndex]} />
            </div>
            <div className='landing2'>
            {data3.map((item) => (
                <div key={item.id}>
                    <img width="70%" src={item.image} alt="not loading" />
                </div>
            ))}
            </div>
        </div>
        </DIV>
    )
}
const DIV=styled.div`@media (min-width:0px) and (max-width:600px){
    .landing2{
        display:grid;
        grid-template-columns:repeat(1,1fr)
    }
}

`
export default Home