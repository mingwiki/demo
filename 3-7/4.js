class People {
  constructor() {
    let firstName, lastName
    Object.assign(this, {
      setFirstName(key) {
        firstName = key
      },
      getFirstName() {
        return firstName
      },
      setLastName(key) {
        lastName = key
      },
      getLastName() {
        return lastName
      }
    })
  }
  getFullName() {
    console.log(`${this.getFirstName()} ${this.getLastName()}`)
  }
∏