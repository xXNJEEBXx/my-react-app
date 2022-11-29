import axios from 'axios';
export default class custom_axios {
    async make_requst(url) {
        const token = localStorage.getItem('auth_token');
        axios.defaults.headers.post['Authorization'] = "Bearer " + token
        const res = await axios.post(url).catch(err => {
            if (err.response.status == 401) {
                if (localStorage.getItem('auth_token')) {
                    localStorage.removeItem('auth_token')
                    console.log("login token has been expired")
                }
                if (url != "http://localhost:8000/api/authCheck") {

                }
            } else {
                console.log(err)
            }
        })
        return res
    }
}