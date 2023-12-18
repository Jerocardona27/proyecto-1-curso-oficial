
export const GetData = async (url) => {
    const response = await axios.get(url);
    return response.data;
};

export const GetData2 = async (url2) => {
    const response = await axios.get(url2);
    return response.data;
};
