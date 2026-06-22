const _ref = new URLSearchParams(window.location.search).get('referrer');

export function withReferrer(url) {
  if (!_ref) return url;
  try {
    const u = new URL(url);
    u.searchParams.set('referrer', _ref);
    return u.toString();
  } catch {
    return url;
  }
}
