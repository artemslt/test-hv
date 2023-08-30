import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

const handleConvertToPdf = (order, dictionary) => {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    const orderDate =
        order && new Date(order?.createdAt).toLocaleDateString("uk-UA");

    const productsListMarkup = () => {
        return order?.orderItems.map(product => {
            return {
                columns: [
                    {
                        text: `${product?.product.desc.title}`,
                        style: "name",
                        width: 268,
                    },
                    {
                        text: `${dictionary?.productCard.weight}${product?.product.desc.weight}`,
                        style: "characteristics",
                        width: 80,
                    },
                    {
                        text: `${dictionary?.productCard.portionsQuantity}${product?.product.desc.per_package}`,
                        style: "characteristics",
                        width: 130,
                    },
                    {
                        text: `${product?.quantity}${dictionary?.orderPage.pieces}`,
                        style: "quantity",
                        width: 40,
                    },
                ],
            };
        });
    };
    const docDefinition = {
        content: [
            {
                text: `${dictionary?.orderPage.title}${order?.order_id}`,
                style: "title",
            },
            {
                columns: [
                    {
                        text: `${dictionary?.orderPage.createdAt}`,
                        style: "info",
                        width: 200,
                    },
                    {
                        text: `${orderDate}`,
                        fontSize: 12,
                    },
                ],
            },
            {
                columns: [
                    {
                        text: `${dictionary?.orderPage.contactPerson}`,
                        style: "info",
                        width: 200,
                    },
                    {
                        text: `${order?.name}`,
                        fontSize: 12,
                    },
                ],
            },
            {
                columns: [
                    {
                        text: `${dictionary?.orderPage.howToConnect}`,
                        style: "info",
                        width: 200,
                    },
                    {
                        text: `${order?.connection_type}`,
                        fontSize: 12,
                    },
                ],
            },
            {
                columns: [
                    {
                        text: `${dictionary?.orderPage.phone}`,
                        style: "info",
                        width: 200,
                    },
                    {
                        text: `${order?.phone}`,
                        fontSize: 12,
                    },
                ],
            },
            {
                columns: [
                    {
                        text: `${dictionary?.orderPage.email}`,
                        style: "info",
                        width: 200,
                    },
                    {
                        text: `${order?.email}`,
                        fontSize: 12,
                    },
                ],
            },
            {
                columns: [
                    {
                        text: `${dictionary?.orderPage.comment}`,
                        style: "info",
                        width: 200,
                    },
                    {
                        text: `${order?.comments}`,
                        fontSize: 12,
                        marginBottom: 60,
                    },
                ],
            },

            {
                text: `${dictionary?.orderPage.subtitle}`,
                style: "subtitle",
            },
            {
                ol: [...productsListMarkup()],
            },
        ],
        styles: {
            title: {
                fontSize: 20,
                fontWeight: 400,
                marginBottom: 40,
                bold: true,
            },
            info: {
                fontSize: 12,
                marginBottom: 8,
                bold: true,
            },
            subtitle: {
                fontSize: 16,
                marginBottom: 20,
                bold: true,
            },
            name: {
                fontSize: 12,
                marginBottom: 12,
            },
            characteristics: {
                fontSize: 12,
                color: "grey",
            },
            quantity: {
                fontSize: 12,
            },
        },
    };
    pdfMake.createPdf(docDefinition).open();
};

export default handleConvertToPdf;
