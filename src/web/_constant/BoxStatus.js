const status = {
    UNDEFINED: '',
    CREATED: "Created",
    BOXING: "Boxing",
    DELIVERY: "Delivering",
    SIGNED: "Signed",
    STOCKED: "Stocked",

    /* functions */
    convertToNumber: status => {
        switch (status) {
            case status.CREATED:  return 1
            case status.BOXING:   return 2
            case status.DELIVERY: return 3
            case status.SIGNED:   return 4
            case status.STOCKED:  return 5
            default:              return 0
        }
    },

    convertToString: number => {
        return Object.values(status)[number]
    }
}

export default status