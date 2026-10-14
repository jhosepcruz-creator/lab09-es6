import estudiantes, { curso } from "./datos.js";
import { reporte } from "./calculos.js";

// Modificación de un objeto y combinación de arreglos usando Spread (...)
const nuevo = { ...estudiantes[0], nombre: "Ana María" };
const todos = [...estudiantes, nuevo];

// Mostrar curso en consola y HTML
console.log(`Curso: ${curso}`);
document.querySelector("#curso").textContent = `Curso: ${curso}`;

// Renderizar reportes en consola y en la lista de HTML
const listaReportes = document.querySelector("#reportes");

todos.forEach((estudiante) => {
  const lineaReporte = reporte(estudiante);
  console.log(lineaReporte);
  
  const li = document.createElement("li");
  li.textContent = lineaReporte;
  listaReportes.appendChild(li);
});