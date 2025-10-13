export function renderRegisterForm() {
    return `
    <h1>Resgister app</h1>
    <form id="registerForm">
        <label>Username: </label>
        <input type="text" id="usernameR" name="usernameR" required>
        <label>Password: </label>
        <input type="password" id="passwordR" name="passwordR" required>
        <button type="submit">Register</button>
    </form>
    <p id="messageR"></p>`;
}
