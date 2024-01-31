
export const GetData = async (url) => {
    const response = await axios.get(url);
    return response.data;
};

export const GetData2 = async (url2) => {
    const response = await axios.get(url2);
    return response.data;
};

export const GetDatap = async (urlp) => {
    const response = await axios.get(urlp);
    return response.data;
};

export const PostData = async (urlp, datos) => {
    try {
      await axios.post(urlp, datos);
      alert("Perfil guardado correctamente");
    } catch (error) {
      console.error;
    }
  };
  

  export const putData = async (urlp, datos) => {
    try {
      await axios.put(urlp, datos);
      alert("Perfil editado exitosamente");
    } catch (error) {
      console.error;
    }
  };
  

  export const deleteData = async (urlp) => {
    try {
      await axios.delete(urlp, datos);
      alert("Se borro exitosamente");
    } catch (error) {
      console.error;
    }
  };