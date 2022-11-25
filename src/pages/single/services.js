export default {
  loadMovie: { method: 'get', url: 'conteudos{/id}' },
  relatedContent: { method: 'get', url: 'conteudos{/id}/sugeridos' }
}
