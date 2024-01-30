
export const GetData = async (url) => {
    const response = await axios.get(url);
    return response.data;
};

export const GetData2 = async (url2) => {
    const response = await axios.get(url2);
    return response.data;
};

export const PostData = async (url, datos) => {
    try {
      await axios.post(url, datos);
      alert("Perfil guardado correctamente");
    } catch (error) {
      console.error;
    }
  };
  

  export const putData = async (url, datos) => {
    try {
      await axios.put(url, datos);
      alert("Perfil editado exitosamente");
    } catch (error) {
      console.error;
    }
  };
  

  export const deleteData = async (url) => {
    try {
      await axios.delete(url, datos);
      alert("Se borro exitosamente");
    } catch (error) {
      console.error;
    }
  };