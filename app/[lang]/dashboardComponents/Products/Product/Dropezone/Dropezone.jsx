import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useLang } from "@/hooks/useLang";
import { useDictionary } from "@/hooks/useDictionary";
import Addimage from "../../../../../../public/images/add_product/add_image.svg";
import CloseIcon from "../../../../../../public/images/CloseIcon.svg";
import imageUrlArrayToFileArray from "@/helpers/imageUrlArrayToFileArray";
import styles from "./Dropezone.module.scss";

const Dropzone = props => {
    const { setFieldValue, imageUrls } = props;
    const lang = useLang();
    const dictionary = useDictionary(lang);
    const [error, setError] = useState(false);
    const [files, setFiles] = useState([]);
    const [thumbs, setThumbs] = useState([]);

    useEffect(() => {
        if (imageUrls) {
            imageUrlArrayToFileArray(imageUrls, setFiles);
        }
    }, [imageUrls]);

    useEffect(() => {
        setFieldValue("files", files);
    }, [files, setFieldValue]);

    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            "image/*": [],
        },
        maxFiles: 3,
        noClick: true,
        noKeyboard: true,
        onClick: event => event.stopPropagation(),
        onDrop: acceptedFiles => {
            setError(false);
            if (!acceptedFiles.length) {
                setError(true);
                return;
            }

            if (files.length + acceptedFiles.length > 3) {
                setError(true);
                return;
            }
            const arr = acceptedFiles.map(file =>
                Object.assign(file, {
                    preview: URL.createObjectURL(file),
                })
            );

            setFiles([...files, ...arr]);
        },
    });

    const deleteFiles = useCallback(
        idx => {
            const arr = [...files];
            arr.splice(idx, 1);
            setFiles(arr);
            setThumbs([]);
        },
        [files]
    );

    useEffect(() => {
        const val = () =>
            [0, 1, 2].map(num => (
                <div key={num} className={styles.dropzone__thumb}>
                    {files[num] ? (
                        <>
                            <Image
                                fill
                                src={
                                    typeof files[num] === "string"
                                        ? files[num]
                                        : URL.createObjectURL(files[num])
                                }
                                alt="Product image"
                            />
                            <Image
                                src={CloseIcon}
                                alt="Product image"
                                width={24}
                                height={24}
                                className={styles.dropzone__icon}
                                onClick={e => {
                                    e.preventDefault();
                                    deleteFiles(num);
                                }}
                            />
                        </>
                    ) : (
                        <Image
                            src={Addimage}
                            alt="Product image"
                            width={32}
                            height={32}
                            className={styles.dropzone__add_icon}
                        />
                    )}
                </div>
            ));

        setThumbs(val());
    }, [deleteFiles, files]);

    return (
        <>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                <div className={styles.dropzone}>{thumbs}</div>
                {error && <p>{dictionary?.errors.imagesLimit}</p>}
            </div>
        </>
    );
};

export default Dropzone;
