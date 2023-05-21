export type Img = {
 icon: { src: string; href: string; alt: string };
 title: string;
};

export type Itens = {
   item1: {
       title: string;
       value: string;
   };
   item2: {
       title: string;
       value: string;
   };
   item3: {
       title: string;
       value: string;
   };
};

export interface Props {
   itens: Itens;
}

export default function header(
 { itens }: Props,
) {
 return (
   <div class="w-full flex justify-center my-15">
     <div class="stats stats-vertical lg:stats-horizontal shadow">
       <div class="stat">
         <div class="stat-title">Downloads</div>
         <div class="stat-value">31K</div>
         <div class="stat-desc">Jan 1st - Feb 1st</div>
       </div>

       <div class="stat">
         <div class="stat-title">New Users</div>
         <div class="stat-value">4,200</div>
         <div class="stat-desc">↗︎ 400 (22%)</div>
       </div>

       <div class="stat">
         <div class="stat-title">New Registers</div>
         <div class="stat-value">1,200</div>
         <div class="stat-desc">↘︎ 90 (14%)</div>
       </div>
     </div>
   </div>
 );
}