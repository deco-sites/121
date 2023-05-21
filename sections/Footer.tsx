export type Img = {
  icon: { src: string; href: string; alt: string };
  title: string;
};

export type FooterItens = {
  item1: { title: string; href: string };
  item2: { title: string; href: string };
  item3: { title: string; href: string };
  item4: { title: string; href: string };
};

export interface Props {
  img: Img;
  footeritens: FooterItens;
}

export default function footer(
  {
    img = {
      icon: { src: "/favicon.ico", href: "/", alt: "121" },
      title: "121",
    },
    footeritens = {
      item1: { title: "home", href: "/" },
      item2: { title: "about", href: "/" },
      item3: { title: "pricing", href: "/" },
      item4: { title: "pictures", href: "/" },
    },
  }: Props,
) {
  return (
    <footer class="bg-white shadow dark:bg-gray-900 w-full absolute bottom-0">
      <div class="w-full max-w-screen-xl p-4 md:py-8 mx-auto">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            class="flex items-center mb-4 sm:mb-0"
          >
            <img
              src={img.icon.src}
              class="h-8 mr-3"
              alt={img.icon.alt}
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              {img.title}
            </span>
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a
                href={footeritens.item1.href}
                class="mr-4 hover:underline md:mr-6 "
              >
                {footeritens.item1.title}
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                {footeritens.item2.title}
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                {footeritens.item3.title}
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">{footeritens.item4.title}</a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href={img.icon.href} class="hover:underline">{img.title}</a>. All
          Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
