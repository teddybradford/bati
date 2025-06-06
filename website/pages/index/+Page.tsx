import { Logo } from "#components/Logo";
import { Widget } from "#components/Widget";

export default function Page() {
  return (
    <>
      <div class="mt-8 pb-8">
        <div class="w-full items-center flex justify-center gap-8">
          <a class="inline-block" href="/">
            <Logo size={96} />
          </a>
          <h1 class="font-sans font-bold text-8xl pb-4">Bâti</h1>
        </div>
        <div class="w-full items-center flex justify-center mt-8">
          <Widget widget={false} />
        </div>
      </div>
      <div class="fixed top-0 right-0">
        <a href="https://github.com/vikejs/bati" class="group" title="Github" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 250 250"
            class="fill-base-100 transition-all group-hover:scale-110"
          >
            <path d="M0 0l115 115h15l12 27 108 108V0z" class="fill-neutral-800 dark:fill-neutral-200" />
            <path
              class="octo-arm"
              d="M128 109c-15-9-9-19-9-19 3-7 2-11 2-11-1-7 3-2 3-2 4 5 2 11 2 11-3 10 5 15 9 16"
              style="-webkit-transform-origin: 130px 106px; transform-origin: 130px 106px"
            />
            <path
              class="octo-body"
              d="M115 115s4 2 5 0l14-14c3-2 6-3 8-3-8-11-15-24 2-41 5-5 10-7 16-7 1-2 3-7 12-11 0 0 5 3 7 16 4 2 8 5 12 9s7 8 9 12c14 3 17 7 17 7-4 8-9 11-11 11 0 6-2 11-7 16-16 16-30 10-41 2 0 3-1 7-5 11l-12 11c-1 1 1 5 1 5z"
            />
          </svg>
        </a>
      </div>
      <footer class="footer footer-center p-4 bg-base-200 text-base-content">
        <div class="flex">
          <a href="https://www.flaticon.com/free-icons/wall" target="_blank" title="wall icons">
            Wall icons created by Freepik - Flaticon
          </a>
        </div>
      </footer>
    </>
  );
}
