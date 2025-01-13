
export const verify = async () => {
    const refToken = setCookie('token')
    if (refToken.value) {
        // 
    } else {
        removeCookie('username')
    }
}