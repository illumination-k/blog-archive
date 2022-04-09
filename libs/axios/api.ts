/* tslint:disable */
/* eslint-disable */
/**
 * smrak API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0.1.9
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface Counter
 */
export interface Counter {
    /**
     * 
     * @type {number}
     * @memberof Counter
     */
    count: number;
}
/**
 * 
 * @export
 * @interface Post
 */
export interface Post {
    /**
     * 
     * @type {string}
     * @memberof Post
     */
    uuid: string;
    /**
     * 
     * @type {string}
     * @memberof Post
     */
    slug: string;
    /**
     * 
     * @type {string}
     * @memberof Post
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof Post
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof Post
     */
    category: string;
    /**
     * 
     * @type {string}
     * @memberof Post
     */
    lang: PostLangEnum;
    /**
     * 
     * @type {Array<string>}
     * @memberof Post
     */
    tags: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof Post
     */
    body: string;
    /**
     * 
     * @type {string}
     * @memberof Post
     */
    created_at: string;
    /**
     * 
     * @type {string}
     * @memberof Post
     */
    updated_at: string;
}

/**
    * @export
    * @enum {string}
    */
export enum PostLangEnum {
    Ja = 'ja',
    En = 'en'
}


/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        categoriesGet: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/categories`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        openapiYmlGet: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/openapi.yml`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} [lang] 
         * @param {string} [category] 
         * @param {string} [tag] 
         * @param {'asc' | 'desc'} [order] 
         * @param {'update_at' | 'created_at'} [orderBy] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postCountGet: async (lang?: string, category?: string, tag?: string, order?: 'asc' | 'desc', orderBy?: 'update_at' | 'created_at', options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/post/count`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (lang !== undefined) {
                localVarQueryParameter['lang'] = lang;
            }

            if (category !== undefined) {
                localVarQueryParameter['category'] = category;
            }

            if (tag !== undefined) {
                localVarQueryParameter['tag'] = tag;
            }

            if (order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

            if (orderBy !== undefined) {
                localVarQueryParameter['order_by'] = orderBy;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} slug Stem of filename
         * @param {'ja' | 'en'} [lang] Lang
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postSlugGet: async (slug: string, lang?: 'ja' | 'en', options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'slug' is not null or undefined
            assertParamExists('postSlugGet', 'slug', slug)
            const localVarPath = `/post/slug`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (slug !== undefined) {
                localVarQueryParameter['slug'] = slug;
            }

            if (lang !== undefined) {
                localVarQueryParameter['lang'] = lang;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} uuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postUuidUuidGet: async (uuid: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'uuid' is not null or undefined
            assertParamExists('postUuidUuidGet', 'uuid', uuid)
            const localVarPath = `/post/uuid/{uuid}`
                .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary get all posts
         * @param {string} [lang] 
         * @param {string} [category] 
         * @param {string} [tag] 
         * @param {'asc' | 'desc'} [order] 
         * @param {'update_at' | 'created_at'} [orderBy] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postsGet: async (lang?: string, category?: string, tag?: string, order?: 'asc' | 'desc', orderBy?: 'update_at' | 'created_at', options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/posts`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (lang !== undefined) {
                localVarQueryParameter['lang'] = lang;
            }

            if (category !== undefined) {
                localVarQueryParameter['category'] = category;
            }

            if (tag !== undefined) {
                localVarQueryParameter['tag'] = tag;
            }

            if (order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

            if (orderBy !== undefined) {
                localVarQueryParameter['order_by'] = orderBy;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rootGet: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} [query] 
         * @param {number} [limit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchGet: async (query?: string, limit?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/search`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (query !== undefined) {
                localVarQueryParameter['query'] = query;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tagsGet: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/tags`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async categoriesGet(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<string>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.categoriesGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async openapiYmlGet(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.openapiYmlGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} [lang] 
         * @param {string} [category] 
         * @param {string} [tag] 
         * @param {'asc' | 'desc'} [order] 
         * @param {'update_at' | 'created_at'} [orderBy] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postCountGet(lang?: string, category?: string, tag?: string, order?: 'asc' | 'desc', orderBy?: 'update_at' | 'created_at', options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Counter>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postCountGet(lang, category, tag, order, orderBy, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} slug Stem of filename
         * @param {'ja' | 'en'} [lang] Lang
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postSlugGet(slug: string, lang?: 'ja' | 'en', options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Post>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postSlugGet(slug, lang, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} uuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postUuidUuidGet(uuid: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Post>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postUuidUuidGet(uuid, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary get all posts
         * @param {string} [lang] 
         * @param {string} [category] 
         * @param {string} [tag] 
         * @param {'asc' | 'desc'} [order] 
         * @param {'update_at' | 'created_at'} [orderBy] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postsGet(lang?: string, category?: string, tag?: string, order?: 'asc' | 'desc', orderBy?: 'update_at' | 'created_at', options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Post>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postsGet(lang, category, tag, order, orderBy, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async rootGet(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.rootGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} [query] 
         * @param {number} [limit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async searchGet(query?: string, limit?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Post>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.searchGet(query, limit, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tagsGet(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<string>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tagsGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        categoriesGet(options?: any): AxiosPromise<Array<string>> {
            return localVarFp.categoriesGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        openapiYmlGet(options?: any): AxiosPromise<string> {
            return localVarFp.openapiYmlGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} [lang] 
         * @param {string} [category] 
         * @param {string} [tag] 
         * @param {'asc' | 'desc'} [order] 
         * @param {'update_at' | 'created_at'} [orderBy] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postCountGet(lang?: string, category?: string, tag?: string, order?: 'asc' | 'desc', orderBy?: 'update_at' | 'created_at', options?: any): AxiosPromise<Counter> {
            return localVarFp.postCountGet(lang, category, tag, order, orderBy, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} slug Stem of filename
         * @param {'ja' | 'en'} [lang] Lang
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postSlugGet(slug: string, lang?: 'ja' | 'en', options?: any): AxiosPromise<Post> {
            return localVarFp.postSlugGet(slug, lang, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} uuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postUuidUuidGet(uuid: string, options?: any): AxiosPromise<Post> {
            return localVarFp.postUuidUuidGet(uuid, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary get all posts
         * @param {string} [lang] 
         * @param {string} [category] 
         * @param {string} [tag] 
         * @param {'asc' | 'desc'} [order] 
         * @param {'update_at' | 'created_at'} [orderBy] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postsGet(lang?: string, category?: string, tag?: string, order?: 'asc' | 'desc', orderBy?: 'update_at' | 'created_at', options?: any): AxiosPromise<Array<Post>> {
            return localVarFp.postsGet(lang, category, tag, order, orderBy, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rootGet(options?: any): AxiosPromise<void> {
            return localVarFp.rootGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} [query] 
         * @param {number} [limit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchGet(query?: string, limit?: number, options?: any): AxiosPromise<Array<Post>> {
            return localVarFp.searchGet(query, limit, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tagsGet(options?: any): AxiosPromise<Array<string>> {
            return localVarFp.tagsGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public categoriesGet(options?: any) {
        return DefaultApiFp(this.configuration).categoriesGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public openapiYmlGet(options?: any) {
        return DefaultApiFp(this.configuration).openapiYmlGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} [lang] 
     * @param {string} [category] 
     * @param {string} [tag] 
     * @param {'asc' | 'desc'} [order] 
     * @param {'update_at' | 'created_at'} [orderBy] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public postCountGet(lang?: string, category?: string, tag?: string, order?: 'asc' | 'desc', orderBy?: 'update_at' | 'created_at', options?: any) {
        return DefaultApiFp(this.configuration).postCountGet(lang, category, tag, order, orderBy, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} slug Stem of filename
     * @param {'ja' | 'en'} [lang] Lang
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public postSlugGet(slug: string, lang?: 'ja' | 'en', options?: any) {
        return DefaultApiFp(this.configuration).postSlugGet(slug, lang, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} uuid 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public postUuidUuidGet(uuid: string, options?: any) {
        return DefaultApiFp(this.configuration).postUuidUuidGet(uuid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary get all posts
     * @param {string} [lang] 
     * @param {string} [category] 
     * @param {string} [tag] 
     * @param {'asc' | 'desc'} [order] 
     * @param {'update_at' | 'created_at'} [orderBy] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public postsGet(lang?: string, category?: string, tag?: string, order?: 'asc' | 'desc', orderBy?: 'update_at' | 'created_at', options?: any) {
        return DefaultApiFp(this.configuration).postsGet(lang, category, tag, order, orderBy, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public rootGet(options?: any) {
        return DefaultApiFp(this.configuration).rootGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} [query] 
     * @param {number} [limit] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public searchGet(query?: string, limit?: number, options?: any) {
        return DefaultApiFp(this.configuration).searchGet(query, limit, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public tagsGet(options?: any) {
        return DefaultApiFp(this.configuration).tagsGet(options).then((request) => request(this.axios, this.basePath));
    }
}

