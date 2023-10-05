import "regenerator-runtime";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./style.css";
import "./script/component/app-bar.js";
import "./script/component/my-footer.js";
import { main, search } from "./script/view/main.js";

document.addEventListener("DOMContentLoaded", search);
document.addEventListener("DOMContentLoaded", main);
