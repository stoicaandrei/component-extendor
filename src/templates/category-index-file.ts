export function categoryIndexFileContent(componentName: string): string {
  return `export * from './${componentName}'`
}
