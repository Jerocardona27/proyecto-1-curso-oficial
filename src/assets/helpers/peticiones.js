export const GetData = async (url)=> {
    const {data} = await axios.get(url)
    return data 
}