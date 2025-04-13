export type Id = string | number | undefined

export interface CrudRepository<T> {
    create: (data: T) => Promise<T>
    findAll: () => Promise<T[]>
    findById: (id?: Id) => Promise<T>
    update: (id?: Id, data?: T) => Promise<T>
    delete: (id?: Id) => Promise<void>
}
