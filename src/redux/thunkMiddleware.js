import axios from "axios"
import { GET_DATA } from "./dataSlice"

const fetchData = () => async (dispatch, getState) => {
    let coffee = await axios.get('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee')
    console.log(coffee)
    dispatch(GET_DATA(coffee.data.data))
}

export default fetchData