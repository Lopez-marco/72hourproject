

    export interface Resource {
        dataset: string;
        planet: string;
    }

    export interface NasaMainResponse {
        cloud_score?: any;
        date: Date;
        id: string;
        resource: Resource;
        service_version: string;
        url: string;
    }


