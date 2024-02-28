// base64topng.js
const convertBase64ToPng = async (base64Data) => {
    try {
      const response = await fetch(`data:image/png;base64,${base64Data}`);
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      return imageUrl;
    } catch (error) {
      console.error('Error converting base64 to PNG:', error);
      throw error;
    }
  };
  
  export { convertBase64ToPng };
  