const hasUppercase = val => /[A-Z]/.test(val)
const hasLowercase = val => /[a-z]/.test(val)
const hasSpecialChars = val => /[$%#]/.test(val)

export { hasUppercase, hasLowercase, hasSpecialChars }
