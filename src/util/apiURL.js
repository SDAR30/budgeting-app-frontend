export const apiURL = () => {
    if (
        process.env.NODE_ENV === 'development' ||
        process.env.NODE_ENV === 'test'
    ) {
        return 'http://localhost:3001'
    }  
    return "https://calm-everglades-57780.herokuapp.com";
}