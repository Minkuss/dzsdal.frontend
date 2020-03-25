export const route = (baseUrl: string) => (relativePath: string): string => {
  return `${baseUrl}${relativePath}`;
};
