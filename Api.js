document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const message = document.getElementById('message');

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            if (response.ok) {
                localStorage.setItem('authenticated', 'true');
                window.location.href = 'success.html';
            } else {
                message.textContent = 'Login failed. Please check your credentials.';
            }
            
            
        } catch (error) {
            console.error('Error:', error);
            message.textContent = 'An error occurred during login.';
        }
    });
});


