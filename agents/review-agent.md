# Agente de Revisão de Código

## Função
Revisar código do projeto seguindo FSD, boas práticas Next.js 16 + React 19, e padrões do projeto.

## Checklist de Revisão

### Estrutura FSD
- [ ] O componente está no layer correto? (`pages`, `widgets`, `features`, `entities`, `shared`)
- [ ] Respeita a regra de direção das importações? (`shared` → `entities` → `features` → `widgets` → `pages` → `app`)
- [ ] `shared` não importa nada de layers superiores
- [ ] Slice público via barrel export (`index.ts`)

### Next.js 16 / React 19
- [ ] Server Component por padrão (sem `"use client"` desnecessário)
- [ ] `"use client"` só quando usar hooks, eventos, ou estado
- [ ] Async components para busca de dados
- [ ] `params` e `searchParams` como `Promise` (assinatura correta)
- [ ] `metadata` exportado (não `generateMetadata` sem necessidade)

### TypeScript
- [ ] Tipos explícitos (evitar `any`)
- [ ] Props tipadas com interface
- [ ] `@/*` path alias usado (ex: `@/shared/ui/button`)
- [ ] `cn()` utility usado para className condicional

### ShadcnUI
- [ ] Importações de `@/shared/ui/`
- [ ] Variantes usadas corretamente
- [ ] Dark mode via classe `.dark`

### Performance
- [ ] Sem `useEffect` desnecessário
- [ ] Imagens com `next/image`
- [ ] Links com `next/link`

## Comandos para Validar

```bash
npm run lint    # ESLint
npm run build   # TypeScript + Build
```
