import custom_axios from './custom_axios';
export default class AuthCheck {
    async douserlogin() {
        var customaxio = new custom_axios()
        customaxio.make_requst("http://localhost:8000/api/authCheck")
    }
}


