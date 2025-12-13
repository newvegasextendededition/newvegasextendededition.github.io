interface DocsJsonItem {
    title: string;
    image?: string;
    video?: string;
    description: string | string[];
}

interface Collapse extends Omit<DocsJsonItem, 'description'> {
    description: string[];
}