import pagesCatalog from "../config/pagesCatalog";

const getPageComponent = pageName => pagesCatalog[pageName];

export default getPageComponent;
