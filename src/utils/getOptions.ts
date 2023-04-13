import { workspace } from 'vscode'
import type { Options } from '../types'

export const getOptions = (): Options => {
  const RegexSetting: RegExp = workspace.getConfiguration().get('RegexSetting')!
  const AddMark: String = workspace.getConfiguration().get('AddMark')!

  return {
    RegexSetting,
    AddMark,
  }
}
