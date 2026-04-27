export const Header = () => {
  return (
    <header className="bg-white fixed text-xl w-full flex justify-center py-2 z-100">
      <nav className="w-full max-w-440 px-[10%] flex">
        <ul className="w-full flex flex-row justify-between overflow-hidden">
          <li className="h-10 flex items-center">
            <a href="/main" className="h-11 flex items-center gap-3">
              <img
                src="src/media/logo/loggo.png"
                className="object-cover w-full h-full"
              />
              <img
                src="src/media/logo/land.png"
                className="object-cover w-full h-[300%]"
              />
            </a>
          </li>
          <div className="flex flex-row gap-20 items-center">
            <li>
              <a href="/services">Услуги</a>
            </li>
            <li>
              <a href="/about">О нас</a>
            </li>
            <li>
              <a href="/contacts">Контакты</a>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};
