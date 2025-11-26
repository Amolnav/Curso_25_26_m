import { App } from './app';
import './style.css'
document.addEventListener('DOMContentLoaded', () => {
  const appContainer = document.getElementById("app");
  const app = App()
  appContainer.appendChild(app)
  console.log("App inicial");
})

