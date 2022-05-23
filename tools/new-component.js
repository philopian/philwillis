const fs = require('fs')
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function templateContent(titleName) {
  const tsx = `type Props = {
    message: string
    textColor?: string
  }
  
  const styles = {
    wrapper:
      'bg-gray-100 border border-gray-200 dark:border-gray-700 rounded-md dark:bg-green-600 text-sm p-4',
  }
  
  export default function ${titleName}({ message, textColor = 'white' }: Props) {
    return (
      <div className={styles.wrapper}>
        <span style={{ color: textColor }}>{message} </span>
      </div>
    )
  }
`

  const test = `import { render, screen } from '@testing-library/react'
import React from 'react'

import ${titleName} from '@/components/${titleName}'

describe('${titleName}', () => {
  test('should have welcome message', () => {
    render(<${titleName} message="helllo" />)
    const welcomeElement = screen.getByText(/helllo/)
    expect(welcomeElement).toBeInTheDocument()
  })
})
`

  const storybook = `import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import ${titleName} from '@/components/${titleName}'

export default {
  title: 'Components/${titleName}',
  component: ${titleName},
  argTypes: {
    textColor: { control: 'color' },
  },
} as ComponentMeta<typeof ${titleName}>

const Template: ComponentStory<typeof ${titleName}> = (args) => <${titleName} {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  message: '${titleName}',
}
`
  return { tsx, test, storybook }
}

rl.question('Give your component a name ? ', (titleName) => {
  console.log(` [Creating] ${titleName} component`)

  const newFileName = `./components/${titleName}.tsx`
  if (fs.existsSync(newFileName)) {
    console.log(' [ERROR] Looks like that file already exists')
    rl.close()
  }

  // Make sure components,__tests__,stories folders exists
  if (!fs.existsSync('./components/')) fs.mkdirSync('./components/')
  if (!fs.existsSync('./components/__tests__')) fs.mkdirSync('./components/__tests__')
  if (!fs.existsSync('./stories/')) fs.mkdirSync('./stories/')

  // Make files
  const { tsx, test, storybook } = templateContent(titleName)
  fs.writeFileSync(`./components/${titleName}.tsx`, tsx)
  fs.writeFileSync(`./components/__tests__/${titleName}.test.tsx`, test)
  fs.writeFileSync(`./stories/${titleName}.stories.tsx`, storybook)

  rl.close()
})

rl.on('close', function () {
  console.log(`\nCheckout ./components/ directory for your new files`)
  process.exit(0)
})
