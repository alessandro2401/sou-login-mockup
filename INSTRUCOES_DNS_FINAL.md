# 🌐 Instruções Finais: Configuração DNS na Locaweb

## ✅ Status Atual

O mockup de login SOU está **funcionando perfeitamente** no Vercel:

- **URL Vercel:** https://sou-login-mockup.vercel.app/ ✅ FUNCIONANDO
- **Domínio Personalizado:** www.sou.inf.br ⏳ AGUARDANDO DNS

---

## 📋 Configuração DNS na Locaweb

Para que o mockup fique acessível através de **www.sou.inf.br**, você precisa configurar o DNS na Locaweb.

### **Registro DNS Necessário:**

```
Tipo: CNAME
Nome: www
Valor: 1f1d0f7d2daa0116.vercel-dns-016.com.
TTL: 3600 (ou padrão)
```

---

## 🔧 Passo a Passo Detalhado

### **1. Acessar Painel Locaweb**
- Acesse: https://painel.locaweb.com.br/
- Faça login com suas credenciais

### **2. Navegar para Gerenciamento DNS**
- Vá para **Domínios** → **Gerenciar DNS**
- Selecione o domínio **sou.inf.br**

### **3. Adicionar Registro CNAME**
- Clique em **"Adicionar Registro"** ou **"Novo Registro"**
- Preencha os campos:
  * **Tipo:** CNAME
  * **Nome/Host:** www
  * **Valor/Destino:** `1f1d0f7d2daa0116.vercel-dns-016.com.`
  * **TTL:** 3600 (ou deixe o padrão)

### **4. Salvar Alterações**
- Clique em **"Salvar"** ou **"Aplicar Alterações"**
- Aguarde a confirmação do sistema

### **5. Aguardar Propagação DNS**
- **Tempo estimado:** 15-30 minutos (pode levar até 48 horas em casos raros)
- Durante a propagação, o site pode ficar intermitente

---

## 🔍 Como Validar

### **Teste 1: Verificar DNS**
Após configurar, aguarde 15-30 minutos e execute no terminal:

```bash
nslookup www.sou.inf.br
```

**Resultado esperado:**
```
www.sou.inf.br  canonical name = 1f1d0f7d2daa0116.vercel-dns-016.com.
```

### **Teste 2: Acessar o Site**
1. Abra o navegador
2. Acesse: **https://www.sou.inf.br**
3. Você deve ver a tela de login do SOU

### **Teste 3: Verificar Redirect**
1. Acesse: **https://sou.inf.br** (sem www)
2. Deve redirecionar automaticamente para **https://www.sou.inf.br**

---

## ⚠️ Troubleshooting

### **Problema: "Site não encontrado" após 30 minutos**

**Solução 1: Verificar configuração DNS**
- Acesse o painel Locaweb
- Confirme que o registro CNAME foi salvo corretamente
- Verifique se não há espaços extras no valor

**Solução 2: Limpar cache DNS local**
```bash
# Windows
ipconfig /flushdns

# Mac/Linux
sudo dscacheutil -flushcache
```

**Solução 3: Testar em modo anônimo**
- Abra uma aba anônima/privada no navegador
- Tente acessar www.sou.inf.br novamente

### **Problema: "Certificado SSL inválido"**

**Solução:**
- Aguarde mais 10-15 minutos
- O Vercel provisiona certificados SSL automaticamente após a propagação DNS
- O certificado pode levar um pouco mais de tempo que o DNS

---

## 📊 Resumo Técnico

| Item | Status | Detalhes |
|------|--------|----------|
| **Deployment Vercel** | ✅ Concluído | https://sou-login-mockup.vercel.app/ |
| **Domínio Configurado** | ✅ Concluído | www.sou.inf.br + sou.inf.br (redirect) |
| **DNS Locaweb** | ⏳ Pendente | Aguardando configuração manual |
| **Certificado SSL** | ⏳ Automático | Será provisionado após DNS |

---

## 🎯 Próximos Passos (Após DNS Configurado)

1. **Integração Backend**
   - Conectar formulário à API de autenticação real
   - Implementar JWT/sessões
   - Criar fluxo de recuperação de senha

2. **Domínio Profissional para Manual da Marca**
   - Configurar `marca.administradoramutual.com.br` ou `marca.sou.inf.br`
   - Apontar para o manual de marca no Vercel

3. **Analytics e Monitoramento**
   - Integrar Google Analytics ou Vercel Analytics
   - Monitorar acessos e performance

---

## 📞 Suporte

Se tiver dificuldades com a configuração DNS na Locaweb:
- **Suporte Locaweb:** https://ajuda.locaweb.com.br/
- **Telefone:** 3003-3312 (capitais) ou 0800 888 3312 (demais regiões)

---

**Última atualização:** 10/12/2025  
**Versão do mockup:** c38f0af (Remove vercel.json to fix deployment)
