export function componentFileContent(componentName: string): string {
  return `import React from 'react'

interface ${componentName}Props {};

export const ${componentName} = (props: Props) => {
    return (
        <div>
            ${componentName}
        </div>
    )
}
`
}

