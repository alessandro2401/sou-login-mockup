# Instruções de Configuração DNS - Locaweb

## 🎯 Objetivo
Configurar o domínio **sou.inf.br** para apontar para o mockup de login hospedado no Vercel.

---

## ✅ Status Atual

- ✅ **Repositório GitHub criado:** https://github.com/alessandro2401/sou-login-mockup
- ✅ **Projeto Vercel configurado:** sou-login-mockup
- ✅ **Domínios adicionados no Vercel:**
  - `www.sou.inf.br` (Production)
  - `sou.inf.br` (Redirect 307 para www)
- ⏳ **Aguardando:** Configuração DNS na Locaweb

---

## 📋 Passo a Passo - Configuração DNS na Locaweb

### **1. Acessar Painel Locaweb**

1. Acesse https://painel.locaweb.com.br/
2. Faça login com suas credenciais
3. No menu lateral, clique em **"Domínios"**
4. Selecione o domínio **sou.inf.br**

### **2. Gerenciar DNS**

1. Clique em **"Gerenciar DNS"** ou **"Zona DNS"**
2. Você verá a lista de registros DNS existentes

### **3. Adicionar Registro CNAME**

**Adicione o seguinte registro:**

| Campo | Valor |
|-------|-------|
| **Tipo** | CNAME |
| **Nome** | www |
| **Valor/Destino** | `5d7740cf8d7d29e6.vercel-dns-016.com.` |
| **TTL** | 3600 (ou deixe o padrão) |

> ⚠️ **IMPORTANTE:** O valor deve terminar com ponto (`.`) no final: `5d7740cf8d7d29e6.vercel-dns-016.com.`

### **4. Adicionar Registro A (Opcional - para sou.inf.br sem www)**

Se quiser que `sou.inf.br` (sem www) também funcione diretamente:

| Campo | Valor |
|-------|-------|
| **Tipo** | A |
| **Nome** | @ (ou deixe vazio) |
| **Valor/IP** | `76.76.21.21` |
| **TTL** | 3600 |

> 📌 **Nota:** O Vercel já está configurado para redirecionar `sou.inf.br` → `www.sou.inf.br` automaticamente (redirect 307).

### **5. Salvar Alterações**

1. Clique em **"Salvar"** ou **"Adicionar Registro"**
2. Confirme as alterações

---

## ⏱️ Tempo de Propagação

- **Tempo estimado:** 15 minutos a 48 horas
- **Média:** 30 minutos a 2 horas
- **Verificação:** Use https://dnschecker.org/ para verificar a propagação global

---

## 🧪 Como Testar

### **1. Verificar DNS (após propagação)**

```bash
# Testar CNAME do www
nslookup www.sou.inf.br

# Deve retornar algo como:
# www.sou.inf.br canonical name = 5d7740cf8d7d29e6.vercel-dns-016.com.
```

### **2. Acessar no Navegador**

Após a propagação DNS, acesse:
- https://www.sou.inf.br
- https://sou.inf.br (deve redirecionar para www)

---

## ✅ Checklist de Validação

- [ ] Registro CNAME adicionado na Locaweb
- [ ] DNS propagado (verificado em dnschecker.org)
- [ ] https://www.sou.inf.br acessível
- [ ] https://sou.inf.br redireciona para www
- [ ] Certificado SSL ativo (cadeado verde no navegador)
- [ ] Mockup de login carregando corretamente

---

## 🔧 Troubleshooting

### **Problema: "DNS_PROBE_FINISHED_NXDOMAIN"**
- **Causa:** DNS ainda não propagou ou registro incorreto
- **Solução:** Aguarde mais tempo ou verifique se o registro CNAME está correto

### **Problema: "Invalid Configuration" no Vercel**
- **Causa:** DNS ainda não configurado ou propagação pendente
- **Solução:** Configure o DNS na Locaweb e aguarde propagação

### **Problema: Certificado SSL não ativo**
- **Causa:** Vercel ainda não emitiu o certificado (aguarda DNS)
- **Solução:** Após DNS propagar, Vercel emite SSL automaticamente (~5 minutos)

---

## 📞 Suporte

Se precisar de ajuda com a configuração DNS na Locaweb:
- **Suporte Locaweb:** https://www.locaweb.com.br/suporte/
- **Telefone:** 0800 888 6678
- **Chat:** Disponível no painel Locaweb

---

## 🎯 Próximos Passos (Após DNS Configurado)

1. **Validar acesso:** Teste https://www.sou.inf.br
2. **Verificar SSL:** Confirme que o cadeado verde aparece
3. **Testar funcionalidade:** Teste o formulário de login
4. **Integrar backend:** Conectar API de autenticação real

---

**Data da configuração:** 10/12/2025  
**Domínio:** sou.inf.br  
**Hospedagem:** Locaweb  
**Deploy:** Vercel  
**Repositório:** https://github.com/alessandro2401/sou-login-mockup
