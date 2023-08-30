const imageUrlArrayToFileArray = async (imageUrls, setFiles) => {
    const fileArray = [];

    for (const imageUrl of imageUrls) {
        try {
            const response = await fetch(imageUrl);
            const blob = await response.blob();
            const filename = imageUrl.split("/").pop();
            const file = new File([blob], filename, { type: blob.type });
            fileArray.push(file);
        } catch (error) {
            return error;
        }
    }

    setFiles(fileArray);
};
export default imageUrlArrayToFileArray;
