import axios from "axios";

export abstract class BaseHttpCrudService<T, CreateDto, UpdateDto> {
    constructor(protected readonly url: string) {}

    async findAll(limit: number, offset: number): Promise<T[]> {
        const { data } = await axios.get<T[]>(`${this.url}?limit=${limit}&offset=${offset}`);
        return data;
    }

    async findOne(id: number): Promise<T | undefined> {
        const { data } = await axios.get<T>(`${this.url}/${id}`);
        return data;
    }

    async create(entity: CreateDto): Promise<T> {
        const { data } = await axios.post<T>(this.url, entity);
        return data;
    }

    async update(id: number, entity: UpdateDto): Promise<T | undefined> {
        const { data } = await axios.put<T>(`${this.url}/${id}`, entity);
        return data;
    }

    async delete(id: number): Promise<number | undefined> {
        const { data } = await axios.delete<number>(`${this.url}/${id}`);
        return data;
    }
}