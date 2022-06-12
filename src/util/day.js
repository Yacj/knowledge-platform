import dayjs from 'dayjs'

export const getFormatDate = (date = new Date()) => {
    const time = dayjs(date)
    const y = time.year()
    const m = time.month() + 1
    const d = time.date()
    const n = time.day()
    const h = time.hour()
    return {
        y,
        m,
        d,
        n,
        h
    }
}
