import { levels } from "./level.enum.js"

export class Task {
    name = ''
    description = ''
    completed = false
    level = levels.normal

    constructor(name, description, completed, level){
        this.name = name
        this.description = description
        this.completed = completed
        this.level = level
    }
}