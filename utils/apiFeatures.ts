class APIFeatures {
  query: any
  readonly queryStr: any
  constructor(query: any, queryStr: any) {
    this.query = query
    this.queryStr = queryStr
  }

  search() {
    const location = this.queryStr.location
      ? {
          address: {
            $regex: this.queryStr.location,
            $options: 'i',
          },
        }
      : {}

    this.query = this.query.find({ ...location })
    return this
  }

  filter() {
    const queryCopy = { ...this.queryStr }

    // remove fields from query
    const removeFields = ['location']
    removeFields.forEach((el: any) => {
      delete queryCopy[el]
    })

    this.query = this.query.find({ ...queryCopy })
    return this
  }
}

export default APIFeatures
