import { client } from "../client"
import { validateFields } from "../components/validation/validation"

export const getLetters = (setLetters) => {
    client.get('letters')
    .then((res) => setLetters(res.data))
    .catch((err) => console.log(err))
}

export const filterLetter = (query, setLetters) => {
    client
    .get(`letters?search=${query}`)
    .then((res) => setLetters(res.data))
    .catch((err) => console.log(err))
}

export const getLetterById = (id, setLetter) => {
    client.get(`letters/${id}`)
    .then((res) => setLetter(res.data))
    .catch((err) => console.log(err))
}

export const addLetter = (letter, setLetters, setOpen, setErrors) => {
    client.post('/create', letter)
    .then((res) => {
        setLetters((letters) => [res.data, ...letters])
        if(res.status === 201) setOpen(false)
    })
    .catch((err) => {
        setErrors(validateFields(letter))
        console.log(err)
    })
}