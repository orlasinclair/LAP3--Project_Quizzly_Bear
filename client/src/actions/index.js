import axios from 'axios'

export const loginFunction = async (e) => {
    try {
        const userData = {
            username: e.target.username.value,
            password: e.target.password.value
        }

        const response = await axios.post('https://quizzlybears.azurewebsites.net/users/login', userData)
        const data = await response.data
        if (data.err)
        {throw Error(data.err)}
        login(data)
    } catch (err) {
        console.warn(err);
    }

}

export const registerFunction = async (e) => {
    try {
        const userData = {
            username: e.target.username.value,
            password: e.target.password.value
        }

        const response = await axios.post('https://quizzlybears.azurewebsites.net/users/register', userData)
        const data = await response.data
        if (data.err)
        {throw Error(data.err)}
    } catch (err) {
        console.warn(err);
    }

}

export const getLeaderboardData = async () => {
    try{
        const response = await axios.get('https://quizzlybears.azurewebsites.net/users')
        const data = response.data;
        const sort= data.sort((a, b) => {
            return b.score - a.score;
        })
        return sort;

    }catch(err){
        console.warn(err)
    }
}

export const getUserScore = async (username) => {
    try{
        const response = await axios.get(`https://quizzlybears.azurewebsites.net/users/username/${username}`)
        const data = response.data;
        console.log(data.score)
        return data.score;
    }catch(err){
        console.warn(err)
    }
}

export const updateUserScore = async (data) => {
    try{
        await axios.put('https://quizzlybears.azurewebsites.net/users/update', data)
    }catch(err){
        console.warn(err)
    }
}

export const deleteUser = async(username) => {
    try {
        const response = await axios.delete('https://quizzlybears.azurewebsites.net/users/delete', {data: {username: username}})
        const data = response.data
    } catch  (err) {
        console.warn(err)
    }

}


// helpers

function login(data) {
    localStorage.setItem("token", data.token)
}

