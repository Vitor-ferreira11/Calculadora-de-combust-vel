# Calculadora de combustível

**[Abrir demonstração](https://vitor-ferreira11-calculadora.cozyseed5.chatgpt.site)**

Aplicação de estudo em React e TypeScript para comparar os preços por litro de álcool e gasolina. Usa a regra aproximada de 70%: razão álcool/gasolina menor ou igual a 0,70 recomenda álcool; acima disso, gasolina. O consumo real depende do veículo.

## Executar

Use Node.js 22.22.2 ou superior da linha 22, ou Node.js 24.15 ou superior da linha 24, e npm. Na raiz do projeto:

```
npm ci
npm run dev
```

Abra o endereço mostrado pelo Vite. Não são necessárias chaves de API.

## Verificar

```
npm run build
npm run lint
node --experimental-strip-types --test tests/fuel.test.mjs
```

Os testes cobrem os valores abaixo, igual e acima de 70% e preços inválidos. O navegador exige campos preenchidos e positivos; o cálculo também valida preços finitos maiores que zero. Alterar um preço limpa o resultado anterior para evitar uma recomendação desatualizada.

## Estrutura

- `src/App.tsx`: formulário e apresentação do resultado.
- `src/fuel.ts`: validação e regra de comparação.
- `tests/fuel.test.mjs`: testes da regra.

Projeto educacional; não utiliza o consumo real do veículo. Os arquivos `pnpm-lock.yaml` e `node_modules` produzidos na verificação local não fazem parte desta proposta; o lockfile do projeto permanece `package-lock.json`.
