const prepareText = (data: string[]):string | undefined => {
    if (data) {
        return data.join(', ')
    }
}

export default prepareText