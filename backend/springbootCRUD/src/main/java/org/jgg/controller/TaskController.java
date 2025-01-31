package org.jgg.controller;

import org.jgg.entity.Task;
import org.jgg.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
public class TaskController {
    @Autowired
    private TaskService service;

    @PostMapping
    public Task createTask(@RequestBody Task task) {
        return service.saveTask(task);
    }

    @GetMapping
    public List<Task> getTasks() {
        return service.getAllTasks();
    }
}
