export function signIn() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'afasdf46as5d4f6asd51g6sd4fg65sdf1g56sdf1g561sdfg',
                user: {
                    name: 'venancio',
                    email: 'venancio@gmail.com'
                }
            })
        }, 2000)
    })
}