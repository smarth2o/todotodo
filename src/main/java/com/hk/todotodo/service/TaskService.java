package com.hk.todotodo.service;

import com.hk.todotodo.dto.CategoryDto;
import com.hk.todotodo.dto.TaskDto;
import com.hk.todotodo.repository.CategoryRepository;
import com.hk.todotodo.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.print.attribute.Attribute;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskService {
    private final TaskRepository taskRepository;
    private final CategoryRepository categoryRepository;

    public void createTask(TaskDto taskDto) {

        // 카테고리가 존재하지 않는 경우
        CategoryDto category = categoryRepository.getCategory(taskDto.getCategory_id());
        if (category == null) {
            throw new IllegalArgumentException("category not found");
        }

        TaskDto.TaskDtoBuilder builder = TaskDto.builder()
                .user_id(taskDto.getUser_id())
                .category_id(taskDto.getCategory_id())
                .content(taskDto.getContent());

        if (taskDto.getGoal_id() != null) {
            builder.goal_id(taskDto.getGoal_id());
        }
        if (taskDto.getExecute_date() != null) {
            builder.execute_date(taskDto.getExecute_date());
        }
        if (taskDto.getDue_by()!= null) {
            builder.due_by(taskDto.getDue_by());
        }

        TaskDto newTask = builder.build();
        taskRepository.createTask(newTask);
    }

    public TaskDto getTask(int unqId) {
        return taskRepository.getTask(unqId);
    }

    public void updateTask(TaskDto updatedTask) {
        taskRepository.updateTask(updatedTask);
    }

    public void deleteTask(int unqId) {
        taskRepository.deleteTask(unqId);
    }

    public List<TaskDto> getTodayTask(int user_id) {
        return taskRepository.getTodayTask(user_id);
    }

    public List<TaskDto> getCategoryTasks(int unqId) {
        return taskRepository.getCategoryTasks(unqId);
    }
}
