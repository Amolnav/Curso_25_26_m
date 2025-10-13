export function renderMainView(username) {
    return `
        <h1>Welcome, ${username}!</h1>
        <p>You are now logged in.</p>
        <button id="logoutBtn">Logout</button>
    `;
}