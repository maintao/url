export declare function parseQueryString({ queryString, paramTypeMap, autoInferType, }: {
    queryString: string;
    paramTypeMap?: {
        [key: string]: string;
    };
    autoInferType?: boolean;
}): {
    [key: string]: any;
};
export declare function parseUrlParams({ url, paramTypeMap, autoInferType, }: {
    url: string;
    paramTypeMap?: {
        [key: string]: string;
    };
    autoInferType?: boolean;
}): {
    [key: string]: any;
};
export declare function buildQueryString({ params, encodeURI, removeEmptyParams, }: {
    params: {
        [key: string]: any;
    };
    encodeURI?: Boolean;
    removeEmptyParams?: Boolean;
}): string;
export declare function overrideUrl({ url, params, encodeURI, removeEmptyParams, }: {
    url: string;
    params: {
        [key: string]: any;
    };
    encodeURI?: Boolean;
    removeEmptyParams?: Boolean;
}): string;
