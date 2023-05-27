export function categoryIndexFileContent(name: string): string {
  return `export * from './${name}'`
}
