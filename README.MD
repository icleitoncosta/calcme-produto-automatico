# CalcMe JS Produto Automático

> Esse é um sistema via linha de comando (CLI) projetado para criar produtos de uma forma automática e mais simples através do CalcMe Sistemas de gestão. Ainda está em construção, então não pode ser usado. O mesmo trabalha em conjunto com a lib calcme-js, que exporta as funções do Calcme para Nodejs.

## Como isso funciona?

Você pode executar comandos como:
```bash
# Retorne produtos
calcme --orcamentos --qnt 10 --page 5

# Retorne produtos
calcme --criar-produto
```

Copie esse repositório utilizando `git clone https://github.com/icleitoncosta/calcme-produto-automatico`

Após clonar use o comando `npm install -g .`


## Utilizando

Passos para utilizar localmente

```bash
# Efetue o clone desse repositório
git clone https://github.com/icleitoncosta/calcme-produto-automatico

# Utilize o comando para instalar globalmente
npm install -g . #Não esqueça do ponto

# Configure seu usuario e sua senha
calcme --user lalaal@gmail.com --password senha@123

# Efetue login
calcme -l

# Retorne uma lista de orçamentos criados
calcme --orcamentos --qnt 10 --page 0

```

## License

Copyright 2023 Saturno Inovação

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
