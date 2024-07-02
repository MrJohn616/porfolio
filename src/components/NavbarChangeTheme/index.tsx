import useTheme from "../changeTheme/useTheme"; // Asegúrate de ajustar la ruta si es necesario

export default function MyComponent() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      {/* Usa el valor de 'theme' para aplicar estilos condicionales */}
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Cambiar tema
      </button>
    </div>
  );
}
