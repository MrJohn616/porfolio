import useTheme from "../changeTheme/useTheme";
import { ThemeContextType } from "../changeTheme";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (newTheme: ThemeContextType["theme"]) => {
    setTheme(newTheme);
  };

  return (
    <div className="dropdown">
      <span>
        Tema:
        {theme == "system"
          ? " Sistema"
          : theme == "dark"
          ? " Oscuro"
          : " Claro"}
      </span>
      <ul className="dropdown__content">
        <li>
          <button data-value="light" onClick={() => handleThemeChange("light")}>
            Tema Claro
          </button>
        </li>
        <li>
          <button data-value="dark" onClick={() => handleThemeChange("dark")}>
            Tema Oscuro
          </button>
        </li>
        <li>
          <button
            data-value="system"
            onClick={() => handleThemeChange("system")}
          >
            Tema del Sistema
          </button>
        </li>
      </ul>
    </div>
  );
}
