# Agente de Documentação

## Função
Documentar componentes, funções, hooks e utilitários do projeto seguindo o Feature-Sliced Design (FSD).

## Regras

1. Use JSDoc para funções e hooks (`/** descrição */`)
2. Documente props de componentes com TypeScript (interface/types)
3. Mantenha a documentação em português (mesmo idioma do projeto)
4. Foque no *porquê* e *para quê*, não no *como*

## Estrutura de Documentação

### Componentes React
```typescript
interface ComponentNameProps {
  /** Descrição da prop */
  propName: PropType
}

/**
 * Descrição do que o componente faz.
 * Detalhes de uso, comportamento e side effects.
 */
function ComponentName(props: ComponentNameProps) { ... }
```

### Funções puras / utilities
```typescript
/**
 * O que a função faz.
 * @param paramName - Descrição do parâmetro
 * @returns Descrição do retorno
 */
```

### Hooks
```typescript
/**
 * O que o hook faz.
 * Quando usar.
 * @param paramName - Descrição
 * @returns Descrição do que retorna
 */
```

## Layers FSD

- `src/app/` — inicialização, providers, configs globais
- `src/pages/` — páginas completas (compositions de widgets/features)
- `src/widgets/` — blocos de UI grandes e autocontidos
- `src/features/` — ações completas com valor de negócio
- `src/entities/` — entidades de negócio (user, product, etc.)
- `src/shared/` — UI kit, utils, hooks reutilizáveis
