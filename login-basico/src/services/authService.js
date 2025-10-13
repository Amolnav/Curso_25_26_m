import { getUsuarios } from "../helpers/storage";
import bcrypt from "bcryptjs";

export function validarCredenciales(username, password) {
    if (!username || !password) throw new Error("No puede estar vacío");

    username = username.trim();
    password = password.trim();

    if (password.length < 8) throw new Error("Contraseña muy corta");

    const user = getUsuarios().find(
        (user) => user.username.toLowerCase() === username.toLowerCase()
    );
    if (!user) throw new Error("No existe el user");
    // Compara directamente la contraseña ingresada con el hash guardado
    const valid = bcrypt.compareSync(password, user.passwordHash);

    if (!valid) throw new Error("Contraseña incorrecta");

    return user; // credenciales válidas
}
