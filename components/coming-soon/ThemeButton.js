function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const [enabled, setEnabled] = useState(theme !== "dark");

    // const regex = new RegExp(`^/(${locales.join("|")})`);

    // router.push(router.pathname, router.asPath.replace(regex, `/${language}`));

    function onSwitch() {
      setTheme(theme === "dark" ? "light" : "dark");
      setEnabled();
    }
  }
  function onSwitch() {
    setTheme(theme === "dark" ? "light" : "dark");
    setEnabled();
  }
  return (
    <div className="mb-5 md:mb-0 overflow-hidden ">
      <button className="h-6 w-6 text-pink focus:outline-none">
        {theme === "dark" ? (
          <SunSolid onClick={() => setTheme("light")} />
        ) : (
          <MoonSolid onClick={() => setTheme("dark")} />
        )}
      </button>
    </div>
  );
}
