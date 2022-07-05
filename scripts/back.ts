import { Data } from '../types/data'
import { romanize } from './roman'

const getLimitedTextArr = (text: string, size: number): string[][] => {
  const arr = []
  const fullText = text
    .replaceAll('\n', ' \n ')
    .split(' ')
    .filter((e) => e != '')

  while (fullText.length > 0) {
    const tempArr = []
    let counter = 0
    while (fullText[0] && counter < size - fullText[0].length) {
      let x = fullText.shift()
      if (x == '\n') break

      if (x) {
        tempArr.push(x)
        counter += x.length
      }
    }
    arr.push(tempArr)
  }
  return arr
}

export const renderback = (c: HTMLCanvasElement | null, data: Data): void => {
  if (c) {
    c.style.display = 'block'
    const ctx = c.getContext('2d')
    const background = new Image()
    const logo = new Image()

    if (ctx) {
      background.onload = (): void => {
        ctx.fillStyle = `#161616`
        ctx.fillRect(0, 0, c.width, c.height)
        ctx.fillStyle = `${data.color}`
        ctx.fillRect(0, 0, c.width, c.height)
        ctx.drawImage(background, 0, 0, c.width, c.height)
        ctx.fillStyle = '#e3e3e3'

        const TextArr = getLimitedTextArr(data.about, 70)
        const size = 20
        ctx.font = `${size}px Rubik`

        for (const line in TextArr) {
          let text = ''
          for (const verb in TextArr[line]) {
            text += `${TextArr[line][verb]} `
          }
          ctx.fillText(text, 25, 80 + Number(line) * (size + 5))
        }

        ctx.filter =
          'invert(0.5) brightness(1000) brightness(0.9) drop-shadow(0px 0px 7px #000)'
        ctx.drawImage(logo, c.width - 220, c.height - 330, 200, 200)
      }
    }
    background.src = '/back.svg'
    logo.src = `/icons/sciences/${data.icon}`
  }
}
