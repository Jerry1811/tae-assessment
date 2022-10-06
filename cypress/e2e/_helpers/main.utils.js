export const generatePhone = () => {
    return `+233${new Date().getTime().toString().slice(4, 13)}`
  }