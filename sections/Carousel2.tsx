export type Img = {
    icon: { src: string; href: string; alt: string };
    title: string;
  };
  
  export type NavItens = {
    item1: { title: string; href: string };
    item2: { title: string; href: string };
    item3: { title: string; href: string };
    item4: { title: string; href: string };
    item5: { title: string; href: string };
  };
  
  export interface Props {
    img: Img;
    navitens: NavItens;
  }
  
  export default function header(
    {
      img = {
        icon: { src: "/favicon.ico", href: "/", alt: "121" },
        title: "121",
      },
      navitens = {
        item1: { title: "home", href: "/" },
        item2: { title: "about", href: "/" },
        item3: { title: "pricing", href: "/" },
        item4: { title: "pictures", href: "/" },
        item5: { title: "contact", href: "/" },
      },
    }: Props,
  ) {
    return (
                <div class="carousel w-full">
        <div id="slide1" class="carousel-item relative w-full">
            <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" class="w-full" />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" class="btn btn-circle">❮</a> 
            <a href="#slide2" class="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide2" class="carousel-item relative w-full">
            <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" class="w-full" />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle">❮</a> 
            <a href="#slide3" class="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide3" class="carousel-item relative w-full">
            <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" class="w-full" />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle">❮</a> 
            <a href="#slide4" class="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide4" class="carousel-item relative w-full">
            <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" class="w-full" />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" class="btn btn-circle">❮</a> 
            <a href="#slide1" class="btn btn-circle">❯</a>
            </div>
        </div>
        </div>
    );
  }
  