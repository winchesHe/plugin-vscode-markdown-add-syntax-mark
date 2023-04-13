/* eslint-disable prefer-const */
import type { ExtensionContext } from 'vscode'
import { commands } from 'vscode'
import { getOptions } from './utils'
import type { Options } from './types'

export function activate(cxt: ExtensionContext) {
  const options = getOptions()

  const disposable = commands.registerTextEditorCommand('Markdown-add-syntax-mark', (textEdit, edit) => {
    const document = textEdit.document
    const selection = textEdit.selection
    const text = document.getText(selection)
    const newText = convert(text, options)

    edit.replace(selection, newText)
  })
  cxt.subscriptions.push(disposable)
}

function convert(text: string, options: Options): string {
  let {
    RegexSetting = '([a-zA-Z]+)(.?[a-zA-Z]+)?' as unknown as RegExp,
    AddMark = '`',
  } = options
  RegexSetting = new RegExp(RegexSetting, 'g')

  const lines = text.split('\n')
  const newLines = lines.map((line) => {
    if (RegexSetting.test(line))
      return line.replace(RegexSetting, `${AddMark}$1$2${AddMark}`)
    else
      return line
  })

  return newLines.join('\n')
}

export function deactivate() {

}
