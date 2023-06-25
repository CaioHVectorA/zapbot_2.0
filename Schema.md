### Esquema de direcionamento de mensagem até a resposta

# Esquema simples -> Sem integração com Database.
1. Usuário envia a mensagem
2. Aplicação recebe e formata essa mensagem, tornando intendível e estável, passando pelo arquivo FormatMessage.ts
3. Depois de formatada, a mensagem é direcionada pro arquivo ProcessFunction.ts, onde ela vai ser identificada e a função que ela faz referência é chamada. As funções e seus referenciais estarão todos disponíveis no arquivo functionsData.ts
4. Ainda no ProcessFunction, assim que a resposta da função é disponibilizada, a resposta volta até o index.ts, onde é entregada para o usuário de volta.