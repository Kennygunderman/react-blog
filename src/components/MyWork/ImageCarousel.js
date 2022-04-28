import Carousel from "react-material-ui-carousel";
import * as React from "react";

export function ImageCarousel(props) {
    return (
        <div style={{marginLeft: '10%', width: '80%', height: 960}}>
            <Carousel
                navButtonsAlwaysVisible={true}
                autoPlay={false}
            >
                {
                    props.images.map((_, i) => (
                        <img src={props.images[i]} style={{
                            height: 640,
                            width: '80%',
                            maxWidth: '960px',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            display: 'block',
                            overflow: 'hidden',
                            objectFit: 'cover',
                        }} alt={''}/>
                    ))
                }
            </Carousel>
        </div>
    )
}