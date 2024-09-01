const rgbToHex = (r, g, b) => {
  const toHex = (component) => {
    const hex = component.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

module.exports = rgbToHex
