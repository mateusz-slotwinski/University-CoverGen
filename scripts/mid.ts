import { Data } from '../types/data'
import { romanize } from './roman'

export const rendermid = (c: HTMLCanvasElement | null, data: Data): void => {
  if (c) {
    c.style.display = 'block'
    c.style.width = `${0.00485 * data.pages}cm`
    c.width = 0.2425 * data.pages
    const ctx = c.getContext('2d')
    const img = new Image()

    if (ctx) {
      img.onload = (): void => {
        ctx.fillStyle = data.color
        ctx.fillRect(0, 0, c.width, c.height)

        ctx.filter = 'drop-shadow(0px 0px 3px #000)'
        ctx.fillStyle = '#e3e3e3'
        ctx.font = 'bold 35px Rubik'
        const text = `${data.TITLE.toUpperCase()} ${data.title_2.toUpperCase()}`

        ctx.save()
        ctx.translate(-82 + c.width / 2.02, 30)
        ctx.rotate(-Math.PI / 2)
        ctx.textAlign = 'right'
        ctx.fillText(text, 0, 95)
        ctx.restore()

        ctx.textAlign = 'center'
        ctx.fillText(romanize(data.PART), c.width / 2, 1075)
        ctx.filter =
          'invert(0.5) brightness(1000) brightness(0.9) drop-shadow(0px 0px 3px #000)'
        const sz = 62.75
        ctx.drawImage(img, (c.width - sz) / 2, 1090, sz, sz)
      }
    }

    img.src = `/icons/sciences/${data.icon}`
  }
}
