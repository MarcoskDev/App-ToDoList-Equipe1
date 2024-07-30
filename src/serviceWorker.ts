// Se o arquivo `serviceWorker.ts` já existe, adicione a linha abaixo
export {};

// O conteúdo restante do arquivo `serviceWorker.ts` deve permanecer o mesmo
// Exemplo:
const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
  // [::1] é a forma do IPv6 para localhost.
  window.location.hostname === '[::1]' ||
  // 127.0.0.0/8 são considerados localhost IPv4.
  window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])){3}$/
  )
);

// Outros códigos do `serviceWorker.ts`...
