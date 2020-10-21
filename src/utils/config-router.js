function routeMapper(route) {
  const { path, config } = route;
  return { path, ...config };
}

export function configRouter (routes) {
  return routes.map(routeMapper)
}
