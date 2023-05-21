export type FooterItens = {
  item1: { title: string; subitemTitle: string; subitemHref: string, subitemTitle2: string; subitemHref2: string};
  item2: { title: string; subitemTitle: string; subitemHref: string, subitemTitle2: string; subitemHref2: string};
  item3: { title: string; subitemTitle: string; subitemHref: string, subitemTitle2: string; subitemHref2: string};
};

export interface Props {
  footeritens: FooterItens;
}

export default function footer(
  {
    footeritens = {
      item1: {title: "Service", subitemTitle: "Branding", subitemHref: "#", subitemTitle2: "Marketing", subitemHref2: "#"},
      item2: {title: "Company", subitemTitle: "About us", subitemHref: "#", subitemTitle2: "Contact", subitemHref2: "#"},
      item3: {title: "Legal", subitemTitle: "Terms of use", subitemHref: "#", subitemTitle2: "Privacy policy", subitemHref2: "#"}
    }
  }: Props,
) {
  return (
    <footer class="footer p-10 bg-[#111827] text-neutral-content">
      <div>
        <span class="footer-title">{footeritens.item1.title}</span> 
        <a class="link link-hover" href={footeritens.item1.subitemHref}>{footeritens.item1.subitemTitle}</a>
        <a class="link link-hover" href={footeritens.item1.subitemHref2}>{footeritens.item1.subitemTitle2}</a>
      </div> 
      <div>
        <span class="footer-title">{footeritens.item2.title}</span> 
        <a class="link link-hover" href={footeritens.item2.subitemHref}>{footeritens.item2.subitemTitle}</a>
        <a class="link link-hover" href={footeritens.item2.subitemHref2}>{footeritens.item2.subitemTitle2}</a>
      </div> 
      <div>
        <span class="footer-title">{footeritens.item3.title}</span> 
        <a class="link link-hover" href={footeritens.item3.subitemHref}>{footeritens.item3.subitemTitle}</a>
        <a class="link link-hover" href={footeritens.item3.subitemHref2}>{footeritens.item3.subitemTitle2}</a>
      </div> 
    </footer>
  );
}
