// Funcionalidade de toggle de senha
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    // Opcional: trocar ícone do olho (aberto/fechado)
    this.classList.toggle('active');
});

// Funcionalidade de validação do formulário
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');
const usernameInput = document.getElementById('username');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simular validação (para demonstração do mockup)
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    
    // Esconder mensagem de erro anterior
    errorMessage.style.display = 'none';
    
    // Validação básica
    if (!username || !password) {
        showError('Por favor, preencha todos os campos.');
        return;
    }
    
    // Simular credenciais inválidas para demonstração
    // Em produção, isso seria uma chamada à API
    if (username !== 'admin' && username !== 'demo@sou.com.br') {
        showError('Usuário ou senha incorretos. Tente novamente.');
        
        // Adicionar efeito de shake nos campos
        loginForm.classList.add('shake');
        setTimeout(() => {
            loginForm.classList.remove('shake');
        }, 500);
        
        return;
    }
    
    // Se chegou aqui, login seria bem-sucedido
    // Em produção, redirecionaria para o dashboard
    alert('Login bem-sucedido! (Mockup - em produção redirecionaria para o dashboard)');
    
    // Limpar campos
    loginForm.reset();
});

// Função para mostrar mensagem de erro
function showError(message) {
    const errorSpan = errorMessage.querySelector('span');
    errorSpan.textContent = message;
    errorMessage.style.display = 'flex';
    
    // Scroll suave para o topo do formulário
    errorMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Esconder mensagem de erro ao começar a digitar
usernameInput.addEventListener('input', hideError);
passwordInput.addEventListener('input', hideError);

function hideError() {
    if (errorMessage.style.display === 'flex') {
        errorMessage.style.display = 'none';
    }
}

// Adicionar animação de shake ao CSS dinamicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
    
    .shake {
        animation: shake 0.5s ease-in-out;
    }
`;
document.head.appendChild(style);

// Demonstração interativa: mostrar dica de credenciais válidas
console.log('=== MOCKUP DE LOGIN SOU ===');
console.log('Para testar o login bem-sucedido, use:');
console.log('Usuário: admin ou demo@sou.com.br');
console.log('Senha: qualquer valor');
console.log('========================');

// Adicionar tooltip informativo (opcional, para demonstração)
setTimeout(() => {
    const tooltip = document.createElement('div');
    tooltip.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #1F2937;
        color: white;
        padding: 12px 16px;
        border-radius: 8px;
        font-size: 13px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        max-width: 300px;
        line-height: 1.5;
    `;
    tooltip.innerHTML = `
        <strong>💡 Dica de teste:</strong><br>
        Usuário: <code style="background: rgba(255,255,255,0.1); padding: 2px 6px; border-radius: 4px;">admin</code> ou <code style="background: rgba(255,255,255,0.1); padding: 2px 6px; border-radius: 4px;">demo@sou.com.br</code><br>
        Senha: qualquer valor
    `;
    document.body.appendChild(tooltip);
    
    // Remover tooltip após 10 segundos
    setTimeout(() => {
        tooltip.style.transition = 'opacity 0.3s ease';
        tooltip.style.opacity = '0';
        setTimeout(() => tooltip.remove(), 300);
    }, 10000);
}, 1000);
