package org.jgg.service;

import org.jgg.entity.Task;
import org.jgg.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {
    @Autowired
    private TaskRepository repository;

    public Task saveTask(Task task) {
        return repository.save(task);
    }

    public List<Task> getAllTasks() {
        return repository.findAll();
    }
}
