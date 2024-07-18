
// format date to MM/DD/YYYY
export const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-us')
}