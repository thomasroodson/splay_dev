export default {
  destaque: { method: 'get', url: 'destaques' },
  planos: { method: 'get', url: 'planos' },
  cultos: { method: 'get', url: 'categorias/48/conteudos' },
  categorias: { method: 'get', url: 'categorias' },
  conteudoCategoria: { method: 'get', url: 'categorias{/id}/conteudos' }
}
