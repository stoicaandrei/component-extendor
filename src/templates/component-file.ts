export function componentFileContent(name: string): string {
  return `import React from 'react'
import type {${name}Props} from './${name}.types'

export const ${name} = (props: ${name}Props) => {
    return (
        <div>
            ${name}
        </div>
    )
}
`
}

