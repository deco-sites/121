export interface Props {
   title: string, 
   description: string, 
   button: string,
   url: string 
}

export default function footer(
 {
   title = "Box Office News!",
   description =
     "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",
   button = "Get started", 
   url = "/drawer.svg"
 }: Props,
) {
 return (
   <div class="hero min-h-screen bg-base-200">
   <div class="hero-content flex-col lg:flex-row">
     <img src={url} class="max-w-sm rounded-lg shadow-2xl" />
     <div>
       <h1 class="text-5xl font-bold">{title}</h1>
       <p class="py-6">{description}</p>
       <button class="btn btn-primary">{button}</button>
     </div>
   </div>
 </div>
 );
}
