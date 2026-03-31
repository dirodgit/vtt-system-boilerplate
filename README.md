# VTT System Boilerplate

Este é o **Schema Padrão** para a criação de sistemas de RPG compatíveis com o Protocolo de VTT Agnostic. 

## 📂 Estrutura do Repositório

### `/rules`
- **manifest.json**: Define os metadados do sistema, como o dado base (D6, D20), modificadores suportados e o esquema de atributos (Ex: Força, Agilidade).
- **logic.js**: Contém a lógica de resolução matemática de sucessos e falhas, que será injetada no Kernel de Automação (n8n).

### `/templates`
- **actor.md**: Layout em Markdown utilizado para renderizar fichas de personagens e NPCs no chat do Telegram.

---
Desenvolvido por: @dirodgit
