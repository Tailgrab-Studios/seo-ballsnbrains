// Repassa os query params da URL atual (utm_*, fbclid, gclid, etc.) para o destino.
// Genérico de propósito: encaminha o que estiver na URL, não uma lista fixa de chaves.
export function withCurrentParams(destinationUrl) {
  if (typeof window === 'undefined') return destinationUrl;

  try {
    const dest = new URL(destinationUrl, window.location.origin);
    const current = new URLSearchParams(window.location.search);

    // HashRouter: params também podem chegar depois do "#" (ex.: /#/rota?utm_source=ig)
    const hashQuery = window.location.hash.split('?')[1];
    if (hashQuery) {
      new URLSearchParams(hashQuery).forEach((value, key) => current.set(key, value));
    }

    current.forEach((value, key) => dest.searchParams.set(key, value));

    return dest.toString();
  } catch {
    return destinationUrl;
  }
}
