const pad = (value) => String(value).padStart(2, '0')

const formatLocalDate = (date) => {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
    return ''
  }

  const year = date.getFullYear()
  const month = pad(date.getMonth() + 1)
  const day = pad(date.getDate())
  return `${year}-${month}-${day}`
}

export const normalizeDateISO = (value) => {
  if (!value) {
    return ''
  }

  if (typeof value?.toDate === 'function') {
    return formatLocalDate(value.toDate())
  }

  if (value instanceof Date) {
    return formatLocalDate(value)
  }

  if (typeof value === 'string') {
    const trimmed = value.trim()
    if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
      return trimmed
    }

    const parsed = new Date(trimmed)
    return formatLocalDate(parsed)
  }

  return ''
}

export const normalizeDateISOArray = (values = []) =>
  Array.from(new Set(values.map((value) => normalizeDateISO(value)).filter(Boolean)))
