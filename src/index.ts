import { handleMouseDown } from "./core/events";

const div = document.getElementById("test");

div?.addEventListener("mousedown", handleMouseDown);
