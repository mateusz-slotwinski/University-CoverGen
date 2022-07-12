import { Data } from '../types/data'
import { romanize } from './roman'

export const render = (c: HTMLCanvasElement | null, data: Data): void => {
  if (c) {
    c.style.display = 'block'
    const ctx = c.getContext('2d')
    const img = new Image()
    const background = new Image()
    const logo = new Image()

    if (ctx) {
      background.onload = (): void => {
        const long = data.AUTHOR.length > 2 ? 35 * (data.AUTHOR.length - 2) : 0

        ctx.fillStyle = '#e3e3e3'
        ctx.fillRect(0, 0, c.width, c.height)

        {
          const h = 1200
          ctx.drawImage(background, 0, c.height - h, c.width, h)
          ctx.fillStyle = '#161616bf'
          ctx.fillRect(0, 0, c.width, 425)
          ctx.fillRect(0, c.height - 175, c.width, 225)
        }

        {
          ctx.fillStyle = data.color
          ctx.fillRect(0, 0, 40, 1200)
          ctx.fillStyle = '#161616'
          ctx.fillRect(40, 0, 5, 1200)
        }

        // ctx.fillStyle = "#161616";
        // ctx.font = "bold  20px Rubik";
        // ctx.fillText("GENESIS", 710, 1170);
        // ctx.drawImage(logo, c.width / 2, 1090, 150, 60);

        if (data.PART != 0) {
          ctx.fillStyle = '#e3e3e3'
          ctx.textAlign = 'left'
          ctx.font = 'bold 40px Rubik'
          ctx.fillText('TOM ' + romanize(data.PART!), 90, 1100)
          ctx.font = '25px Rubik'
          ctx.fillText(
            data.SUBTITLE[0] != undefined ? data.SUBTITLE[0] : '',
            90,
            1136
          )
          ctx.fillText(
            data.SUBTITLE[1] != undefined ? data.SUBTITLE[1] : '',
            90,
            1167
          )
        }

        ctx.filter = 'drop-shadow(0px 0px 3px #000)'

        ctx.textAlign = 'right'
        const size = data.AUTHOR.length <= 2 ? 32 : 24
        ctx.font = `bold italic ${size}px Rubik`
        ctx.fillStyle = '#e3e3e3'
        for (const author in data.AUTHOR)
          ctx.fillText(
            data.AUTHOR[author],
            c.width - 40,
            (data.AUTHOR.length <= 3 ? 70 : 40) + (size + 8) * +author
          )

        {
          ctx.textAlign = 'center'
          ctx.fillStyle = '#e3e3e3'
          ctx.font = 'bold  64px Rubik'
          ctx.fillText(data.TITLE.toUpperCase(), (c.width + 45) / 2, 220)
          ctx.font = 'bold  54px Rubik'
          ctx.fillText(data.title_2.toUpperCase(), (c.width + 45) / 2, 280)

          ctx.fillStyle = data.color
          ctx.font = 'italic bold 42px Rubik'
          const y = data.title_2 ? 352.5 : 285
          ctx.fillText('(Nie tylko) dla inżynierów', (c.width + 45) / 2, y)
        }
      }
    }
    img.src = `/icons/sciences/${data.icon}`
    logo.src = '/icons/pwn.png'
    background.src = `/bg/${data.image}`
  }
}
