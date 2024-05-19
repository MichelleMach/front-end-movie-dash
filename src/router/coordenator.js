
export const goToHome = (navigate) => {
    navigate('/')
}

export const goToMoviePage = (navigate, id) => {
    navigate(`/movie/${id}`)
}

export const goBack = (navigate) => {
    navigate(-1)
}