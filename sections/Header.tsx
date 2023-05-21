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
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href={img.icon.href} class="flex items-center">
          <img
            src={img.icon.src}
            class="h-8 mr-3"
            alt={img.icon.alt}
          />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            {img.title}
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            >
            </path>
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href={navitens.item1.href}
                class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                {navitens.item1.title}
              </a>
            </li>
            <li>
              <a
                href={navitens.item2.href}
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                {navitens.item2.title}
              </a>
            </li>
            <li>
              <a
                href={navitens.item3.href}
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                {navitens.item3.title}
              </a>
            </li>
            <li>
              <a
                href={navitens.item4.href}
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                {navitens.item4.title}
              </a>
            </li>
            <li>
              <a
                href={navitens.item5.href}
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                {navitens.item5.title}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
