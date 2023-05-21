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
    <div class="navbar bg-[#111827] text-white">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabIndex={0} class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#111827] text-white rounded-box w-52"
          >
            <li>
              <a href={navitens.item1.href}>{navitens.item1.title}</a>
            </li>
            <li>
              <a href={navitens.item2.href}>{navitens.item2.title}</a>
            </li>
            <li>
              <a href={navitens.item3.href}>{navitens.item3.title}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="navbar-center">
        <a class="btn btn-ghost normal-case text-xl">{img.title}</a>
      </div>
      <div class="navbar-end">
        <button class="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <button class="btn btn-ghost btn-circle">
          <div class="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span class="badge badge-xs bg-white indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  );
}
