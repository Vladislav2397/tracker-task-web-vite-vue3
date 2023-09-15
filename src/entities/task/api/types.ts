type UpdatedTaskFields = {
    name?: string
    isCompleted?: boolean
}

type TaskID = string & { __tag?: 'TaskID' }

export type TaskAPI = {
    createTask(taskName: string): Promise<{ id: TaskID; status: boolean }>
    updateTask(
        taskId: TaskID,
        fields: UpdatedTaskFields
    ): Promise<{ status: boolean }>
    removeTask(taskId: TaskID): Promise<{ status: boolean }>
}
