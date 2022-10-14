interface ClipboardItem {
    readonly types: string[];
    readonly presentationStyle: "unspecified" | "inline" | "attachment";
    getType(): Promise<Blob>;
}
interface ClipboardItemData {
    [mimeType: string]: Blob | string | Promise<Blob | string>;
}
declare var ClipboardItem: {
    prototype: ClipboardItem;
    new(itemData: ClipboardItemData): ClipboardItem;
};

const htmlToRichText = async (html: string) => {

    try {
        const content = html
        let qwikNavigator: any
        qwikNavigator = window.navigator
        const blobInput = new Blob([content], { type: 'text/html' })
        const clipboardItemInput = new ClipboardItem({ ['text/html']: blobInput })
        await qwikNavigator.clipboard.write([clipboardItemInput]);

    } catch (e) {
        // Handle error
        console.log("Copy Failed 😒", e);
    }

}

export { htmlToRichText };