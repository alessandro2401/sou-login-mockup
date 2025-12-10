# 🚀 Guia Completo: Deploy no Vercel + Domínio sou.inf.br

Este guia detalha o processo completo para fazer deploy do mockup de login no Vercel e configurar o domínio **sou.inf.br** (hospedado na Locaweb).

---

## 📋 Pré-requisitos

- ✅ Conta no GitHub (já configurada)
- ✅ Repositório criado: https://github.com/alessandro2401/sou-login-mockup
- ⬜ Conta no Vercel (criar se necessário)
- ⬜ Acesso ao painel DNS da Locaweb

---

## PARTE 1: Deploy no Vercel

### Passo 1: Criar Conta no Vercel (se necessário)

1. Acesse: https://vercel.com/signup
2. Clique em **"Continue with GitHub"**
3. Autorize o Vercel a acessar sua conta GitHub
4. Complete o cadastro

### Passo 2: Importar Repositório

1. No dashboard do Vercel, clique em **"Add New..."** → **"Project"**
2. Na lista de repositórios, localize **"sou-login-mockup"**
3. Clique em **"Import"**

### Passo 3: Configurar Projeto

Na tela de configuração:

| Campo | Valor |
|-------|-------|
| **Project Name** | `sou-login` |
| **Framework Preset** | Other (ou deixe em branco) |
| **Root Directory** | `./ ` (raiz do projeto) |
| **Build Command** | (deixe vazio) |
| **Output Directory** | (deixe vazio) |
| **Install Command** | (deixe vazio) |

**Não é necessário configurar Environment Variables.**

### Passo 4: Deploy

1. Clique em **"Deploy"**
2. Aguarde o build (leva ~30 segundos)
3. Quando concluído, você verá: **"Congratulations! 🎉"**
4. Anote a URL temporária do Vercel (ex: `sou-login-xxxxx.vercel.app`)

---

## PARTE 2: Configurar Domínio Personalizado no Vercel

### Passo 1: Adicionar Domínio

1. No projeto implantado, vá para **"Settings"** → **"Domains"**
2. No campo **"Add Domain"**, digite: `www.sou.inf.br`
3. Clique em **"Add"**
4. O Vercel vai detectar que você não é o proprietário e pedir configuração DNS

### Passo 2: Configurar Domínio Raiz (Opcional)

Se quiser que `sou.inf.br` (sem www) também funcione:

1. Adicione também: `sou.inf.br`
2. Clique em **"Add"**

### Passo 3: Obter Registros DNS

O Vercel mostrará os registros DNS necessários. Anote-os:

**Para www.sou.inf.br:**
```
Tipo: CNAME
Nome: www
Valor: cname.vercel-dns.com
```

**Para sou.inf.br (raiz):**
```
Tipo: A
Nome: @ (ou deixe vazio)
Valor: 76.76.21.21
```

---

## PARTE 3: Configurar DNS na Locaweb

### Passo 1: Acessar Painel Locaweb

1. Acesse: https://painel.locaweb.com.br/
2. Faça login com suas credenciais
3. Vá para **"Domínios"** → **"Gerenciar DNS"**
4. Selecione o domínio **sou.inf.br**

### Passo 2: Adicionar Registro CNAME (www)

1. Clique em **"Adicionar Entrada"** ou **"Nova Zona"**
2. Preencha:
   - **Tipo:** CNAME
   - **Nome/Host:** `www`
   - **Destino/Valor:** `cname.vercel-dns.com`
   - **TTL:** 3600 (ou padrão)
3. Clique em **"Salvar"** ou **"Adicionar"**

### Passo 3: Adicionar Registro A (raiz - opcional)

1. Clique em **"Adicionar Entrada"**
2. Preencha:
   - **Tipo:** A
   - **Nome/Host:** `@` (ou deixe vazio para raiz)
   - **Destino/Valor:** `76.76.21.21`
   - **TTL:** 3600
3. Clique em **"Salvar"**

### Passo 4: Remover Registros Conflitantes (se necessário)

Se já existirem registros A ou CNAME para `www` ou `@`, você precisará:
1. Localizá-los na lista de entradas DNS
2. Clicar em **"Editar"** ou **"Excluir"**
3. Substituir pelos valores do Vercel

---

## PARTE 4: Validação e Testes

### Passo 1: Aguardar Propagação DNS

- **Tempo estimado:** 5 minutos a 48 horas (geralmente 15-30 minutos)
- **Verificar propagação:** https://dnschecker.org/

Digite `www.sou.inf.br` e verifique se o CNAME aponta para `cname.vercel-dns.com`

### Passo 2: Verificar no Vercel

1. Volte para **Settings** → **Domains** no Vercel
2. O status do domínio deve mudar para **"Valid Configuration"** ✅
3. O Vercel automaticamente provisiona certificado SSL (HTTPS)

### Passo 3: Testar Acesso

Acesse no navegador:
- https://www.sou.inf.br
- https://sou.inf.br (se configurou o raiz)

Você deve ver a tela de login do SOU! 🎉

---

## 📊 Checklist de Configuração

| Etapa | Status | Observações |
|-------|--------|-------------|
| Conta Vercel criada | ⬜ | |
| Repositório importado | ⬜ | |
| Deploy realizado | ⬜ | |
| Domínio adicionado no Vercel | ⬜ | www.sou.inf.br |
| CNAME configurado na Locaweb | ⬜ | www → cname.vercel-dns.com |
| Registro A configurado (opcional) | ⬜ | @ → 76.76.21.21 |
| DNS propagado | ⬜ | Verificar em dnschecker.org |
| SSL ativo | ⬜ | HTTPS funcionando |
| Site acessível | ⬜ | https://www.sou.inf.br |

---

## 🔧 Troubleshooting

### Problema: "Domain is not configured correctly"

**Solução:**
- Verifique se o CNAME está correto na Locaweb
- Aguarde mais tempo para propagação DNS
- Use `nslookup www.sou.inf.br` para verificar

### Problema: "SSL Certificate Error"

**Solução:**
- O Vercel leva alguns minutos para provisionar SSL
- Aguarde 5-10 minutos após DNS validado
- Limpe cache do navegador (Ctrl+Shift+R)

### Problema: "Site não carrega"

**Solução:**
- Verifique se o deploy foi bem-sucedido no Vercel
- Acesse a URL temporária do Vercel primeiro
- Verifique logs no dashboard do Vercel

### Problema: "Redirect loop" ou "Too many redirects"

**Solução:**
- Remova qualquer redirecionamento HTTP→HTTPS na Locaweb
- O Vercel já faz isso automaticamente
- Verifique se não há regras .htaccess conflitantes

---

## 🚀 Próximos Passos Após Deploy

### 1. Configurar Redirects (Opcional)

Se quiser redirecionar `sou.inf.br` → `www.sou.inf.br`:

No Vercel, vá para **Settings** → **Domains** e configure o redirect automático.

### 2. Configurar Analytics (Opcional)

1. No Vercel, vá para **Analytics**
2. Ative o Vercel Analytics (gratuito)
3. Monitore acessos, performance e erros

### 3. Configurar Notificações

1. **Settings** → **Notifications**
2. Configure alertas para:
   - Deploy failures
   - Domain issues
   - SSL certificate renewal

### 4. Proteção Adicional (Opcional)

Considere adicionar:
- **Vercel Firewall** (plano pago)
- **DDoS Protection** (incluído)
- **Rate Limiting** via `vercel.json`

---

## 📞 Suporte

### Vercel
- Documentação: https://vercel.com/docs
- Suporte: https://vercel.com/support

### Locaweb
- Central de Ajuda: https://ajuda.locaweb.com.br/
- Suporte DNS: Ticket via painel

### Repositório GitHub
- https://github.com/alessandro2401/sou-login-mockup
- Issues: Para reportar problemas

---

## 📝 Informações Técnicas

### URLs do Projeto

| Tipo | URL |
|------|-----|
| **Produção** | https://www.sou.inf.br |
| **Vercel Preview** | https://sou-login.vercel.app |
| **Repositório** | https://github.com/alessandro2401/sou-login-mockup |

### Registros DNS Configurados

```
# CNAME para www
www.sou.inf.br.  3600  IN  CNAME  cname.vercel-dns.com.

# A para raiz (opcional)
sou.inf.br.      3600  IN  A      76.76.21.21
```

### Configuração Vercel

- **Framework:** Static (HTML/CSS/JS)
- **Build Command:** None
- **Output Directory:** Root
- **Node.js Version:** N/A
- **SSL:** Automatic (Let's Encrypt)
- **CDN:** Global Edge Network

---

## ✅ Conclusão

Após seguir este guia, o mockup de login estará:

- ✅ Hospedado no Vercel com deploy automático
- ✅ Acessível via https://www.sou.inf.br
- ✅ Protegido com SSL/HTTPS
- ✅ Distribuído globalmente via CDN
- ✅ Com deploy automático a cada push no GitHub

**Tempo total estimado:** 15-30 minutos (+ tempo de propagação DNS)

---

**Desenvolvido por:** Manus AI  
**Data:** 10 de dezembro de 2025  
**Versão do Guia:** 1.0
